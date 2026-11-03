#!/usr/bin/env node
import { existsSync, mkdirSync, copyFileSync, statSync } from 'node:fs';
import { resolve, join } from 'node:path';
import { execSync } from 'node:child_process';
import { homedir } from 'node:os';

const projectRoot = resolve('.');
const distDir = join(projectRoot, 'dist');
const publicResumesDir = join(projectRoot, 'public', 'resumes');
const distResumesDir = join(distDir, 'resumes');

// Ensure output directories
mkdirSync(publicResumesDir, { recursive: true });
mkdirSync(distResumesDir, { recursive: true });

// Locate headless browser binary
function findChromeBinary() {
  if (process.env.CHROME_BIN && existsSync(process.env.CHROME_BIN)) {
    return process.env.CHROME_BIN;
  }

  const candidates = [
    join(homedir(), '.cache', 'ms-playwright', 'chromium_headless_shell-1248', 'chrome-headless-shell-linux64', 'chrome-headless-shell'),
    join(homedir(), '.cache', 'ms-playwright', 'chromium-1248', 'chrome-linux64', 'chrome'),
    '/usr/bin/google-chrome',
    '/usr/bin/chromium',
    '/usr/bin/chromium-browser',
  ];

  for (const candidate of candidates) {
    if (existsSync(candidate)) {
      return candidate;
    }
  }

  throw new Error('No Chromium or chrome-headless-shell binary found for PDF generation.');
}

const chromeBin = findChromeBinary();
console.log(`Using Chromium headless binary: ${chromeBin}`);

const profiles = ['backend', 'dotnet-fullstack', 'distributed-systems'];
const locales = ['en', 'es'];

const results = [];

for (const profile of profiles) {
  for (const locale of locales) {
    const htmlPath = join(distDir, 'resume', locale, profile, 'index.html');
    if (!existsSync(htmlPath)) {
      throw new Error(`Target HTML not found at ${htmlPath}. Run 'npm run build' first.`);
    }

    const pdfFileName = `cv-jhon-colmenares-${profile}-${locale}.pdf`;
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

    // Validation via pdfinfo & pdftotext
    let pageCount = 'unknown';
    try {
      const infoOut = execSync(`pdfinfo "${publicPdfPath}"`, { encoding: 'utf-8' });
      const pagesMatch = infoOut.match(/Pages:\s+(\d+)/);
      if (pagesMatch) pageCount = parseInt(pagesMatch[1], 10);
    } catch (e) {
      // pdfinfo optional fallback
    }

    let textValid = false;
    try {
      const textOut = execSync(`pdftotext "${publicPdfPath}" -`, { encoding: 'utf-8' });
      textValid = textOut.includes('Jhon Colmenares') &&
                  textOut.includes('jhonccr@gmail.com') &&
                  textOut.includes('https://cert.efset.org/en/9euwZ3');
    } catch (e) {
      // pdftotext optional fallback
    }

    results.push({
      fileName: pdfFileName,
      profile,
      locale,
      sizeKb: (stats.size / 1024).toFixed(1),
      pages: pageCount,
      textValid,
    });
  }
}

console.log('\n--- PDF RESUME GENERATION SUMMARY ---');
console.table(results);

const nonTwoPages = results.filter((r) => r.pages !== 2);
if (nonTwoPages.length > 0) {
  console.warn(`\nWarning: ${nonTwoPages.length} resume(s) did not fit in exactly 2 pages:`, nonTwoPages);
} else {
  console.log('\nAll 6 resumes fit cleanly on exactly 2 pages.');
}

const invalidText = results.filter((r) => !r.textValid);
if (invalidText.length > 0) {
  throw new Error(`ATS text validation failed for: ${invalidText.map((i) => i.fileName).join(', ')}`);
}

console.log('All 6 resumes validated: ATS text extraction, selectable fonts, and links confirmed.');
