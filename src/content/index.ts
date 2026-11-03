import type {
  Locale,
  TechItem,
  EnrichedCertification,
} from './types';
import { profile, languages, interests, labels } from './profile';
import { experiences } from './experience';
import { projects } from './projects';
import { skills } from './skills';
import { education } from './education';
import { certifications } from './certifications';
import { resumeProfiles } from '../lib/resume/profiles';

// URL validator: http(s) or absolute path
const URL_REGEX = /^(https?:\/\/|\/)/;

/**
 * Validates that a date string matches YYYY-MM or YYYY-MM-DD
 * and corresponds to an actual, valid calendar date (e.g. rejecting Feb 30 or Apr 31).
 */
function validateDateString(entityName: string, id: string, fieldName: string, dateStr: string | null | undefined): void {
  if (dateStr === null || dateStr === undefined) return;

  const match = dateStr.match(/^(\d{4})-(\d{2})(?:-(\d{2}))?$/);
  if (!match) {
    throw new Error(`Integrity Error: ${entityName} "${id}" has invalid ${fieldName} date format "${dateStr}". Expected YYYY-MM or YYYY-MM-DD.`);
  }

  const year = parseInt(match[1], 10);
  const month = parseInt(match[2], 10);
  const day = match[3] ? parseInt(match[3], 10) : 1;

  if (month < 1 || month > 12) {
    throw new Error(`Integrity Error: ${entityName} "${id}" has invalid month ${month} in ${fieldName} date "${dateStr}". Month must be 01-12.`);
  }

  const dateObj = new Date(year, month - 1, day);
  if (
    dateObj.getFullYear() !== year ||
    dateObj.getMonth() !== month - 1 ||
    dateObj.getDate() !== day
  ) {
    throw new Error(`Integrity Error: ${entityName} "${id}" has non-existent calendar date "${dateStr}" in ${fieldName}.`);
  }
}

// Integrity validation: ensure 100% referential integrity, date validity, and translation completeness
export function validateIntegrity(): void {
  const experienceIds = new Set<string>();
  const projectIds = new Set<string>();
  const certIds = new Set<string>();
  const educationIds = new Set<string>();

  // 1. Validate profile mandatory translations
  if (!profile.name?.trim()) {
    throw new Error(`Integrity Error: Profile name cannot be empty.`);
  }
  if (!profile.label.es?.trim() || !profile.label.en?.trim()) {
    throw new Error(`Integrity Error: Profile missing mandatory 'label' translation in 'es' or 'en'.`);
  }
  if (!profile.summary.es?.trim() || !profile.summary.en?.trim()) {
    throw new Error(`Integrity Error: Profile missing mandatory 'summary' translation in 'es' or 'en'.`);
  }
  if (!profile.summaryHighlights.es?.length || !profile.summaryHighlights.en?.length) {
    throw new Error(`Integrity Error: Profile missing mandatory 'summaryHighlights' translations in 'es' or 'en'.`);
  }

  // 2. Validate experiences
  for (const exp of experiences) {
    // Check duplicate ID
    if (experienceIds.has(exp.id)) {
      throw new Error(`Integrity Error: Duplicate experience ID detected: "${exp.id}".`);
    }
    experienceIds.add(exp.id);

    // Validate dates
    validateDateString('Experience', exp.id, 'startDate', exp.startDate);
    validateDateString('Experience', exp.id, 'endDate', exp.endDate);

    // End date after start date
    if (exp.endDate !== null && exp.endDate < exp.startDate) {
      throw new Error(`Integrity Error: Experience "${exp.id}" endDate (${exp.endDate}) is earlier than startDate (${exp.startDate}).`);
    }

    // Consistency between isCurrent and endDate
    if (exp.isCurrent === true && exp.endDate !== null) {
      throw new Error(`Integrity Error: Experience "${exp.id}" is marked as current (isCurrent=true) but has an endDate ("${exp.endDate}"). Current roles must have endDate: null.`);
    }
    if (exp.isCurrent === false && exp.endDate === null) {
      throw new Error(`Integrity Error: Experience "${exp.id}" is not current (isCurrent=false) but has endDate: null. Completed roles must specify an endDate.`);
    }

    // Mandatory translations
    if (!exp.role.es?.trim() || !exp.role.en?.trim()) {
      throw new Error(`Integrity Error: Experience "${exp.id}" missing mandatory 'role' translation.`);
    }
    if (!exp.summary.es?.trim() || !exp.summary.en?.trim()) {
      throw new Error(`Integrity Error: Experience "${exp.id}" missing mandatory 'summary' translation.`);
    }
    if (!exp.responsibilities.es?.length || !exp.responsibilities.en?.length) {
      throw new Error(`Integrity Error: Experience "${exp.id}" missing mandatory 'responsibilities' list.`);
    }
    for (const resp of [...exp.responsibilities.es, ...exp.responsibilities.en]) {
      if (!resp?.trim()) {
        throw new Error(`Integrity Error: Experience "${exp.id}" has an empty responsibility entry.`);
      }
    }
  }

  // 3. Validate projects
  for (const proj of projects) {
    // Check duplicate ID
    if (projectIds.has(proj.id)) {
      throw new Error(`Integrity Error: Duplicate project ID detected: "${proj.id}".`);
    }
    projectIds.add(proj.id);

    // Mandatory translations
    if (!proj.description.es?.trim() || !proj.description.en?.trim()) {
      throw new Error(`Integrity Error: Project "${proj.id}" missing mandatory 'description' translation.`);
    }
    if (!proj.highlights.es?.length || !proj.highlights.en?.length) {
      throw new Error(`Integrity Error: Project "${proj.id}" missing mandatory 'highlights' list.`);
    }
    for (const hl of [...proj.highlights.es, ...proj.highlights.en]) {
      if (!hl?.trim()) {
        throw new Error(`Integrity Error: Project "${proj.id}" has an empty highlight entry.`);
      }
    }

    // Experience reference check
    if (proj.experienceId && !experienceIds.has(proj.experienceId)) {
      throw new Error(`Integrity Error: Project "${proj.id}" references non-existent experience "${proj.experienceId}".`);
    }
  }

  // Cross-reference: experience projectIds
  for (const exp of experiences) {
    for (const pid of exp.projectIds) {
      if (!projectIds.has(pid)) {
        throw new Error(`Integrity Error: Experience "${exp.id}" references non-existent project "${pid}".`);
      }
    }
  }

  // 4. Validate education
  for (const edu of education) {
    if (educationIds.has(edu.id)) {
      throw new Error(`Integrity Error: Duplicate education ID detected: "${edu.id}".`);
    }
    educationIds.add(edu.id);

    validateDateString('Education', edu.id, 'startDate', edu.startDate);
    validateDateString('Education', edu.id, 'endDate', edu.endDate);

    if (edu.endDate < edu.startDate) {
      throw new Error(`Integrity Error: Education "${edu.id}" endDate (${edu.endDate}) is earlier than startDate (${edu.startDate}).`);
    }

    if (!edu.studyType.es?.trim() || !edu.studyType.en?.trim()) {
      throw new Error(`Integrity Error: Education "${edu.id}" missing mandatory 'studyType' translation.`);
    }
    if (!edu.area.es?.trim() || !edu.area.en?.trim()) {
      throw new Error(`Integrity Error: Education "${edu.id}" missing mandatory 'area' translation.`);
    }
  }

  // 5. Validate certifications
  for (const cert of certifications) {
    if (certIds.has(cert.id)) {
      throw new Error(`Integrity Error: Duplicate certification ID detected: "${cert.id}".`);
    }
    certIds.add(cert.id);

    if (!cert.name?.trim() || !cert.issuer?.trim()) {
      throw new Error(`Integrity Error: Certification "${cert.id}" must have non-empty name and issuer.`);
    }

    validateDateString('Certification', cert.id, 'issuedAt', cert.issuedAt);
    if (cert.expiresAt) {
      validateDateString('Certification', cert.id, 'expiresAt', cert.expiresAt);
      if (cert.expiresAt < cert.issuedAt) {
        throw new Error(`Integrity Error: Certification "${cert.id}" expiresAt (${cert.expiresAt}) is before issuedAt (${cert.issuedAt}).`);
      }
    }

    for (const [key, urlVal] of Object.entries({
      verificationUrl: cert.verificationUrl,
      pdfUrl: cert.pdfUrl,
      badgeUrl: cert.badgeUrl,
    })) {
      if (urlVal && !URL_REGEX.test(urlVal)) {
        throw new Error(`Integrity Error: Certification "${cert.id}" has invalid URL format for ${key}: "${urlVal}".`);
      }
    }

    if (cert.description && (!cert.description.es?.trim() || !cert.description.en?.trim())) {
      throw new Error(`Integrity Error: Certification "${cert.id}" description must provide both 'es' and 'en' translations.`);
    }

    if (cert.assessment?.breakdown) {
      for (const item of cert.assessment.breakdown) {
        if (!item.name.es?.trim() || !item.name.en?.trim()) {
          throw new Error(`Integrity Error: Certification "${cert.id}" assessment breakdown item missing 'es' or 'en' name.`);
        }
        if (!item.score && !item.level) {
          throw new Error(`Integrity Error: Certification "${cert.id}" assessment breakdown item must provide at least score or level.`);
        }
      }
    }
  }

  // 6. Verify language certificate references
  for (const lang of languages) {
    if (!lang.language.es?.trim() || !lang.language.en?.trim()) {
      throw new Error(`Integrity Error: Language item missing mandatory 'language' translation.`);
    }
    if (!lang.fluency.es?.trim() || !lang.fluency.en?.trim()) {
      throw new Error(`Integrity Error: Language item missing mandatory 'fluency' translation.`);
    }
    if (lang.certificateRef && !certIds.has(lang.certificateRef)) {
      throw new Error(`Integrity Error: Language references non-existent certification ID: "${lang.certificateRef}".`);
    }
  }

  // 7. Verify CV Profile references (featuredExperienceIds and featuredProjectIds)
  for (const [profKey, profConfig] of Object.entries(resumeProfiles)) {
    for (const expId of profConfig.featuredExperienceIds) {
      if (!experienceIds.has(expId)) {
        throw new Error(`Integrity Error: Resume profile "${profKey}" references non-existent featured experience ID "${expId}".`);
      }
    }
    for (const projId of profConfig.featuredProjectIds) {
      if (!projectIds.has(projId)) {
        throw new Error(`Integrity Error: Resume profile "${profKey}" references non-existent featured project ID "${projId}".`);
      }
    }
  }
}

// Run validation at compile time / module load
validateIntegrity();

export interface EnrichedExperience {
  id: string;
  organization: string;
  clientGrouping?: 'cens-grupo-epm';
  startDate: string;
  endDate: string | null;
  isCurrent: boolean;
  url: string;
  role: string;
  summary: string;
  responsibilities: string[];
  highlights: string[];
  technologies: TechItem[];
  projectIds: string[];
  isEngineering: boolean;
}

export interface EnrichedProject {
  id: string;
  name: string;
  category: 'commercial_client' | 'personal_saas' | 'in_development';
  confidentiality: 'public' | 'private_enterprise';
  experienceId?: string;
  url?: string;
  github?: string;
  technologies: string[];
  description: string;
  highlights: string[];
}

export interface PortfolioData {
  basics: {
    name: string;
    email: string;
    phone: string;
    url: string;
    image: string;
    location: typeof profile.location;
    profiles: typeof profile.profiles;
    label: string;
    summary: string;
    summaryHighlights: string[];
  };
  experiences: EnrichedExperience[];
  projects: EnrichedProject[];
  skills: {
    title: string;
    categories: {
      title: string;
      items: {
        name: string;
        level: string;
        keywords: string[];
      }[];
    }[];
  };
  education: {
    title: string;
    items: {
      id: string;
      institution: string;
      url: string;
      studyType: string;
      area: string;
      startDate: string;
      endDate: string;
      score?: string;
    }[];
  };
  certifications: {
    title: string;
    items: EnrichedCertification[];
  };
  languages: {
    title: string;
    items: {
      language: string;
      fluency: string;
      certificateRef?: string;
    }[];
  };
  interests: {
    title: string;
    items: {
      name: string;
    }[];
  };
  labels: typeof labels.es;
}

export function getPortfolioData(locale: Locale): PortfolioData {
  const localizedLabels = labels[locale];

  const enrichedExperiences: EnrichedExperience[] = experiences.map((exp) => ({
    id: exp.id,
    organization: exp.organization,
    clientGrouping: exp.clientGrouping,
    startDate: exp.startDate,
    endDate: exp.endDate,
    isCurrent: exp.isCurrent,
    url: exp.url,
    role: exp.role[locale],
    summary: exp.summary[locale],
    responsibilities: exp.responsibilities[locale],
    highlights: exp.highlights[locale],
    technologies: exp.technologies,
    projectIds: exp.projectIds,
    isEngineering: exp.isEngineering,
  }));

  const enrichedProjects: EnrichedProject[] = projects.map((proj) => ({
    id: proj.id,
    name: proj.name,
    category: proj.category,
    confidentiality: proj.confidentiality,
    experienceId: proj.experienceId,
    url: proj.url,
    github: proj.github,
    technologies: proj.technologies,
    description: proj.description[locale],
    highlights: proj.highlights[locale],
  }));

  const localizedSkills = {
    title: localizedLabels.skills,
    categories: skills.map((cat) => ({
      title: cat.title[locale],
      items: cat.skills.map((s) => ({
        name: s.name,
        level: s.level[locale],
        keywords: s.keywords,
      })),
    })),
  };

  const localizedEducation = {
    title: localizedLabels.education,
    items: education.map((edu) => ({
      id: edu.id,
      institution: edu.institution,
      url: edu.url,
      studyType: edu.studyType[locale],
      area: edu.area[locale],
      startDate: edu.startDate,
      endDate: edu.endDate,
      score: edu.score,
    })),
  };

  const localizedCertifications: EnrichedCertification[] = certifications.map((cert) => ({
    id: cert.id,
    name: cert.name,
    issuer: cert.issuer,
    category: cert.category,
    issuedAt: cert.issuedAt,
    expiresAt: cert.expiresAt,
    credentialId: cert.credentialId,
    verificationUrl: cert.verificationUrl,
    pdfUrl: cert.pdfUrl,
    badgeUrl: cert.badgeUrl,
    description: cert.description ? cert.description[locale] : undefined,
    skills: cert.skills,
    assessment: cert.assessment
      ? {
          score: cert.assessment.score,
          level: cert.assessment.level,
          breakdown: cert.assessment.breakdown?.map((b) => ({
            name: b.name[locale],
            score: b.score,
            level: b.level,
          })),
        }
      : undefined,
  }));

  const localizedLanguages = {
    title: localizedLabels.languages,
    items: languages.map((lang) => ({
      language: lang.language[locale],
      fluency: lang.fluency[locale],
      certificateRef: lang.certificateRef,
    })),
  };

  const localizedInterests = {
    title: localizedLabels.interests,
    items: interests.map((item) => ({
      name: item.name[locale],
    })),
  };

  return {
    basics: {
      name: profile.name,
      email: profile.email,
      phone: profile.phone,
      url: profile.url,
      image: profile.image,
      location: profile.location,
      profiles: profile.profiles,
      label: profile.label[locale],
      summary: profile.summary[locale],
      summaryHighlights: profile.summaryHighlights[locale],
    },
    experiences: enrichedExperiences,
    projects: enrichedProjects,
    skills: localizedSkills,
    education: localizedEducation,
    certifications: {
      title: localizedLabels.certifications,
      items: localizedCertifications,
    },
    languages: localizedLanguages,
    interests: localizedInterests,
    labels: localizedLabels,
  };
}

export * from './types';
export * from './profile';
export * from './experience';
export * from './projects';
export * from './skills';
export * from './education';
export * from './certifications';
