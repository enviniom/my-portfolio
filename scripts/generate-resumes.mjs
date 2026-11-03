#!/usr/bin/env node
import { existsSync, readdirSync, mkdirSync, copyFileSync, statSync, readFileSync } from 'node:fs';
import { resolve, join } from 'node:path';
import { execSync } from 'node:child_process';
import { homedir } from 'node:os';
import { profile } from '../src/content/profile.ts';
import { certifications } from '../src/content/certifications.ts';

const projectRoot = resolve('.');
const distDir = join(projectRoot, 'dist');
const publicResumesDir = join(projectRoot, 'public', 'resumes');
const distResumesDir = join(distDir, 'resumes');

// Ensure output directories
mkdirSync(publicResumesDir, { recursive: true });
mkdirSync(distResumesDir, { recursive: true });

// Check required validation tools upfront
function checkValidationTools() {
  try {
    execSync('pdfinfo -v', { stdio: 'ignore' });
    execSync('pdftotext -v', { stdio: 'ignore' });
  } catch (err) {
    throw new Error(
      'Required PDF validation tools (pdfinfo and pdftotext from poppler-utils) are not available in PATH.\n' +
      'Validation cannot proceed without these tools. Please install poppler-utils (e.g. sudo apt install poppler-utils).'
    );
  }
}

// Locate headless browser binary dynamically without hardcoded version numbers
function findChromeBinary() {
  if (process.env.CHROME_BIN && existsSync(process.env.CHROME_BIN)) {
    return process.env.CHROME_BIN;
  }
  if (process.env.PUPPETEER_EXECUTABLE_PATH && existsSync(process.env.PUPPETEER_EXECUTABLE_PATH)) {
    return process.env.PUPPETEER_EXECUTABLE_PATH;
  }

  const candidates = [];

  // 1. Scan Playwright cache directory for any installed chromium or chromium_headless_shell
  const playwrightCache = join(homedir(), '.cache', 'ms-playwright');
  if (existsSync(playwrightCache)) {
    try {
      const entries = readdirSync(playwrightCache)
        .filter((dir) => dir.startsWith('chromium_headless_shell-') || dir.startsWith('chromium-'))
        .sort()
        .reverse();

      for (const entry of entries) {
        if (entry.startsWith('chromium_headless_shell-')) {
          candidates.push(join(playwrightCache, entry, 'chrome-headless-shell-linux64', 'chrome-headless-shell'));
        } else if (entry.startsWith('chromium-')) {
          candidates.push(join(playwrightCache, entry, 'chrome-linux64', 'chrome'));
        }
      }
    } catch {
      // ignore read errors
    }
  }

  // 2. Standard system binary locations (Linux, macOS, GitHub Actions runners)
  candidates.push(
    '/usr/bin/google-chrome',
    '/usr/bin/google-chrome-stable',
    '/usr/bin/chromium',
    '/usr/bin/chromium-browser',
    '/snap/bin/chromium',
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
  );

  // 3. Command resolution via which
  const commands = ['google-chrome', 'google-chrome-stable', 'chromium', 'chromium-browser'];
  for (const cmd of commands) {
    try {
      const found = execSync(`which ${cmd} 2>/dev/null`, { encoding: 'utf-8' }).trim();
      if (found && existsSync(found)) {
        candidates.push(found);
      }
    } catch {
      // not found in path
    }
  }

  for (const candidate of candidates) {
    if (candidate && existsSync(candidate)) {
      return candidate;
    }
  }

  // 4. Fallback attempt: install Chromium via Playwright if permitted
  try {
    console.log('No Chromium binary found. Attempting Playwright chromium installation...');
    execSync('npx playwright install chromium --only-shell', { stdio: 'inherit' });
    if (existsSync(playwrightCache)) {
      const entries = readdirSync(playwrightCache)
        .filter((dir) => dir.startsWith('chromium_headless_shell-') || dir.startsWith('chromium-'))
        .sort()
        .reverse();
      for (const entry of entries) {
        const candidate = entry.startsWith('chromium_headless_shell-')
          ? join(playwrightCache, entry, 'chrome-headless-shell-linux64', 'chrome-headless-shell')
          : join(playwrightCache, entry, 'chrome-linux64', 'chrome');
        if (existsSync(candidate)) return candidate;
      }
    }
  } catch {
    // ignore install error
  }

  throw new Error(
    'No Chromium or chrome-headless-shell binary found for PDF generation.\n' +
    'Please set CHROME_BIN or install Chromium (e.g., npx playwright install chromium).'
  );
}

checkValidationTools();

const chromeBin = findChromeBinary();
console.log(`Using Chromium headless binary: ${chromeBin}`);

const profiles = ['master', 'backend', 'dotnet-fullstack', 'distributed-systems'];
const locales = ['en', 'es'];

const profilePageLimits = {
  master: { min: 3, max: 6, expected: '3-6 pages (comprehensive)' },
  backend: { min: 2, max: 2, expected: 'exactamente 2 páginas' },
  'dotnet-fullstack': { min: 2, max: 2, expected: 'exactamente 2 páginas' },
  'distributed-systems': { min: 2, max: 2, expected: 'exactamente 2 páginas' },
};

const results = [];
const warnings = [];

for (const profileId of profiles) {
  for (const locale of locales) {
    const htmlPath = join(distDir, 'resume', locale, profileId, 'index.html');
    if (!existsSync(htmlPath)) {
      throw new Error(`Target HTML not found at ${htmlPath}. Run 'astro build' first.`);
    }

    const pdfFileName = `cv-jhon-colmenares-${profileId}-${locale}.pdf`;
    const publicPdfPath = join(publicResumesDir, pdfFileName);
    const distPdfPath = join(distResumesDir, pdfFileName);

    const cmd = `"${chromeBin}" --no-sandbox --disable-gpu --no-pdf-header-footer --print-to-pdf="${publicPdfPath}" "file://${htmlPath}"`;
    try {
      execSync(cmd, { stdio: 'pipe' });
    } catch (err) {
      console.error(`Failed to generate ${pdfFileName}:`, err);
      throw err;
    }

    // Mirror to dist/resumes
    copyFileSync(publicPdfPath, distPdfPath);

    const stats = statSync(publicPdfPath);
    if (stats.size < 10000) {
      throw new Error(`Generated PDF ${pdfFileName} is suspiciously small (${stats.size} bytes).`);
    }

    // 1. Validation via pdfinfo: page count & US Letter dimensions
    let pageCount = 0;
    let isLetterFormat = false;
    let pageSizeDesc = 'unknown';

    try {
      const infoOut = execSync(`pdfinfo "${publicPdfPath}"`, { encoding: 'utf-8' });
      const pagesMatch = infoOut.match(/Pages:\s+(\d+)/);
      if (pagesMatch) {
        pageCount = parseInt(pagesMatch[1], 10);
      }

      const sizeMatch = infoOut.match(/Page size:\s+([0-9.]+)\s+x\s+([0-9.]+)\s+pts/);
      if (sizeMatch) {
        const width = parseFloat(sizeMatch[1]);
        const height = parseFloat(sizeMatch[2]);
        const widthMm = (width * 25.4 / 72).toFixed(1);
        const heightMm = (height * 25.4 / 72).toFixed(1);
        pageSizeDesc = `${width} x ${height} pts (${widthMm} x ${heightMm} mm)`;
        // US Letter is 612 x 792 pts (allow ±2 pts tolerance)
        isLetterFormat = Math.abs(width - 612) <= 2 && Math.abs(height - 792) <= 2;
      }
    } catch (err) {
      throw new Error(`pdfinfo failed on ${pdfFileName}: ${err.message}`);
    }

    if (!isLetterFormat) {
      throw new Error(`Format validation failed for ${pdfFileName}: expected US Letter (612 x 792 pts), got ${pageSizeDesc}`);
    }

    const pageLimit = profilePageLimits[profileId] || { min: 2, max: 2, expected: '2 páginas' };
    if (pageCount < pageLimit.min || pageCount > pageLimit.max) {
      warnings.push({
        fileName: pdfFileName,
        pages: pageCount,
        expected: pageLimit.expected,
        pageSizeDesc,
      });
    }

    // 2. Absence of empty pages
    for (let p = 1; p <= pageCount; p++) {
      const pageText = execSync(`pdftotext -f ${p} -l ${p} "${publicPdfPath}" -`, { encoding: 'utf-8' }).trim();
      if (pageText.length === 0) {
        throw new Error(`Empty page detected in ${pdfFileName} at page ${p}.`);
      }
    }

    // 3. Text validation via pdftotext (dynamic strings from domain content)
    let textValid = false;
    try {
      const textOut = execSync(`pdftotext "${publicPdfPath}" -`, { encoding: 'utf-8' });
      const textOutLower = textOut.toLowerCase();
      const hasName = textOutLower.includes(profile.name.toLowerCase());
      const hasEmail = textOutLower.includes(profile.email.toLowerCase());
      const hasCert = certifications.length === 0 || certifications.some((c) => textOutLower.includes(c.issuer.toLowerCase()));
      textValid = hasName && hasEmail && hasCert;
    } catch (err) {
      throw new Error(`pdftotext failed on ${pdfFileName}: ${err.message}`);
    }

    // 4. Link validation (raw PDF buffer check for URI action and mailto)
    const pdfRaw = readFileSync(publicPdfPath);
    const hasMailtoLink = pdfRaw.includes(Buffer.from(`mailto:${profile.email}`));
    const hasUriLinks = pdfRaw.includes(Buffer.from('/URI'));
    const linksValid = hasMailtoLink && hasUriLinks;

    results.push({
      fileName: pdfFileName,
      profile: profileId,
      locale,
      sizeKb: (stats.size / 1024).toFixed(1),
      pages: pageCount,
      expected: pageLimit.expected,
      dimensions: pageSizeDesc,
      textValid,
      linksValid,
      letterFormat: isLetterFormat,
    });
  }
}

console.log('\n--- PDF RESUME GENERATION SUMMARY ---');
console.table(results);

if (warnings.length > 0) {
  console.warn('\n⚠️  WARNING: The following resume(s) did not match their expected page limits:');
  for (const w of warnings) {
    console.warn(`  - ${w.fileName}: ${w.pages} pages (Expected: ${w.expected})`);
  }
} else {
  console.log('\n✓ All 8 resumes fit cleanly within their expected page limits.');
}

const invalidText = results.filter((r) => !r.textValid);
if (invalidText.length > 0) {
  throw new Error(`ATS selectable text validation failed for: ${invalidText.map((i) => i.fileName).join(', ')}`);
}

const invalidLinks = results.filter((r) => !r.linksValid);
if (invalidLinks.length > 0) {
  throw new Error(`Link validation failed for: ${invalidLinks.map((i) => i.fileName).join(', ')}`);
}

console.log('✓ All 8 resumes validated: selectable ATS text, interactive links, and US Letter format confirmed.\n');
