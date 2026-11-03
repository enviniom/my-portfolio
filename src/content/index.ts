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

// Date format validator: YYYY-MM or YYYY-MM-DD
const DATE_REGEX = /^\d{4}-\d{2}(-\d{2})?$/;
// URL validator: http(s) or absolute path
const URL_REGEX = /^(https?:\/\/|\/)/;

// Integrity validation: ensure 100% referential integrity and translation completeness
function validateIntegrity() {
  const projectIds = new Set(projects.map((p) => p.id));
  const experienceIds = new Set(experiences.map((e) => e.id));
  const certIds = new Set<string>();

  // 1. Validate experiences
  for (const exp of experiences) {
    if (!exp.role.es || !exp.role.en) {
      throw new Error(`Integrity Error: Experience ${exp.id} missing role translation`);
    }
    if (!exp.summary.es || !exp.summary.en) {
      throw new Error(`Integrity Error: Experience ${exp.id} missing summary translation`);
    }
    if (!exp.responsibilities.es?.length || !exp.responsibilities.en?.length) {
      throw new Error(`Integrity Error: Experience ${exp.id} missing responsibilities`);
    }
    for (const pid of exp.projectIds) {
      if (!projectIds.has(pid)) {
        throw new Error(`Integrity Error: Experience ${exp.id} references non-existent project ${pid}`);
      }
    }
  }

  // 2. Validate projects
  for (const proj of projects) {
    if (!proj.description.es || !proj.description.en) {
      throw new Error(`Integrity Error: Project ${proj.id} missing description translation`);
    }
    if (!proj.highlights.es?.length || !proj.highlights.en?.length) {
      throw new Error(`Integrity Error: Project ${proj.id} missing highlights translation`);
    }
    if (proj.experienceId && !experienceIds.has(proj.experienceId)) {
      throw new Error(`Integrity Error: Project ${proj.id} references non-existent experience ${proj.experienceId}`);
    }
  }

  // 3. Validate certifications
  for (const cert of certifications) {
    if (certIds.has(cert.id)) {
      throw new Error(`Integrity Error: Duplicate certification ID: ${cert.id}`);
    }
    certIds.add(cert.id);

    if (!cert.name?.trim() || !cert.issuer?.trim()) {
      throw new Error(`Integrity Error: Certification ${cert.id} must have non-empty name and issuer`);
    }

    if (!DATE_REGEX.test(cert.issuedAt)) {
      throw new Error(`Integrity Error: Certification ${cert.id} has invalid issuedAt format: ${cert.issuedAt}`);
    }

    if (cert.expiresAt) {
      if (!DATE_REGEX.test(cert.expiresAt)) {
        throw new Error(`Integrity Error: Certification ${cert.id} has invalid expiresAt format: ${cert.expiresAt}`);
      }
      if (cert.expiresAt < cert.issuedAt) {
        throw new Error(`Integrity Error: Certification ${cert.id} expiresAt (${cert.expiresAt}) is before issuedAt (${cert.issuedAt})`);
      }
    }

    for (const [key, urlVal] of Object.entries({
      verificationUrl: cert.verificationUrl,
      pdfUrl: cert.pdfUrl,
      badgeUrl: cert.badgeUrl,
    })) {
      if (urlVal && !URL_REGEX.test(urlVal)) {
        throw new Error(`Integrity Error: Certification ${cert.id} has invalid URL format for ${key}: ${urlVal}`);
      }
    }

    if (cert.description && (!cert.description.es?.trim() || !cert.description.en?.trim())) {
      throw new Error(`Integrity Error: Certification ${cert.id} description must have both 'es' and 'en' translations`);
    }

    if (cert.assessment?.breakdown) {
      for (const item of cert.assessment.breakdown) {
        if (!item.name.es?.trim() || !item.name.en?.trim()) {
          throw new Error(`Integrity Error: Certification ${cert.id} assessment breakdown item missing 'es' or 'en' name`);
        }
        if (!item.score && !item.level) {
          throw new Error(`Integrity Error: Certification ${cert.id} assessment breakdown item must provide at least score or level`);
        }
      }
    }
  }

  // 4. Verify language references
  for (const lang of languages) {
    if (lang.certificateRef && !certIds.has(lang.certificateRef)) {
      throw new Error(`Integrity Error: Language references non-existent certification ID: ${lang.certificateRef}`);
    }
  }
}

// Run validation at compile time/import
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
