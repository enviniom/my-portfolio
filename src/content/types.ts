export type Locale = 'es' | 'en';

export type ProfileId = 'backend' | 'dotnet-fullstack' | 'distributed-systems';

export type ExperienceId =
  | 'miia'
  | 'cens-sicont'
  | 'dreammakers'
  | 'dtl360-sustitucion'
  | 'jemaproject'
  | 'cens-catalog-2025'
  | 'arivo'
  | 'brinks'
  | 'cens-catalog-2023'
  | 'preconcretos-sag3p'
  | 'dtl360-metaretos'
  | 'casa-funerales-rincon'
  | 'preconcretos-hr'
  | 'cens-catalog-2020'
  | 'beers-and-more'
  | 'globocar';

export type ProjectId =
  | 'miia-receptor-gps'
  | 'sicont'
  | 'neofluxai'
  | 'jemapack'
  | 'saphyr'
  | 'raffles'
  | 'ftw-360'
  | 'cens-catalogo-2025'
  | 'cens-catalogo-2023'
  | 'sag3p'
  | 'custodia'
  | 'hr-system'
  | 'metaretos'
  | 'cens-catalogo-2020'
  | 'beer-fresh'
  | 'kinansu';

export type ProjectCategory = 'commercial_client' | 'personal_saas' | 'in_development';
export type ConfidentialityLevel = 'public' | 'private_enterprise';

export type I18nString = Record<Locale, string>;
export type I18nList = Record<Locale, string[]>;

export interface TechItem {
  category: string;
  items: string[];
}

export interface ProfileData {
  name: string;
  email: string;
  phone: string;
  url: string;
  image: string;
  location: {
    city: string;
    region: string;
    countryCode: string;
    postalCode: string;
  };
  profiles: {
    network: string;
    username: string;
    url: string;
  }[];
  label: I18nString;
  summary: I18nString;
  summaryHighlights: I18nList;
}

export interface ExperienceItem {
  id: ExperienceId;
  organization: string;
  clientGrouping?: 'cens-grupo-epm';
  startDate: string; // YYYY-MM
  endDate: string | null; // null if present
  isCurrent: boolean;
  url: string;
  role: I18nString;
  summary: I18nString;
  responsibilities: I18nList;
  highlights: I18nList;
  technologies: TechItem[];
  projectIds: ProjectId[];
  targetProfiles: ProfileId[];
  isEngineering: boolean;
}

export interface ProjectItem {
  id: ProjectId;
  name: string;
  category: ProjectCategory;
  confidentiality: ConfidentialityLevel;
  experienceId?: ExperienceId;
  technologies: string[];
  url?: string;
  github?: string;
  targetProfiles: ProfileId[];
  description: I18nString;
  highlights: I18nList;
}

export interface SkillItem {
  name: string;
  level: I18nString;
  keywords: string[];
  priorityProfiles: ProfileId[];
}

export interface SkillCategory {
  title: I18nString;
  skills: SkillItem[];
}

export interface EducationItem {
  id: string;
  institution: string;
  url: string;
  studyType: I18nString;
  area: I18nString;
  startDate: string;
  endDate: string;
  score?: string;
}

export type CertificationCategory =
  | 'language'
  | 'cloud'
  | 'development'
  | 'security'
  | 'devops'
  | 'architecture'
  | 'agile'
  | 'other';

export interface CertificationAssessmentBreakdown {
  name: I18nString;
  score?: string;
  level?: string;
}

export interface CertificationAssessment {
  score?: string;
  level?: string;
  breakdown?: CertificationAssessmentBreakdown[];
}

export interface CertificationItem {
  id: string;
  name: string;
  issuer: string;
  category: CertificationCategory;

  issuedAt: string;
  expiresAt?: string;

  credentialId?: string;
  verificationUrl?: string;
  pdfUrl?: string;
  badgeUrl?: string;

  description?: I18nString;
  skills?: string[];

  assessment?: CertificationAssessment;
}

export interface EnrichedCertificationBreakdown {
  name: string;
  score?: string;
  level?: string;
}

export interface EnrichedCertificationAssessment {
  score?: string;
  level?: string;
  breakdown?: EnrichedCertificationBreakdown[];
}

export interface EnrichedCertification {
  id: string;
  name: string;
  issuer: string;
  category: CertificationCategory;
  issuedAt: string;
  expiresAt?: string;
  credentialId?: string;
  verificationUrl?: string;
  pdfUrl?: string;
  badgeUrl?: string;
  description?: string;
  skills?: string[];
  assessment?: EnrichedCertificationAssessment;
}

export interface LanguageItem {
  language: I18nString;
  fluency: I18nString;
  certificateRef?: string;
}

export interface InterestItem {
  name: I18nString;
}

export interface SiteLabels {
  about: string;
  experience: string;
  relevantExperience: string;
  completeHistory: string;
  recurringClientNote: string;
  projects: string;
  skills: string;
  education: string;
  certifications: string;
  languages: string;
  interests: string;
  present: string;
  downloadResume: string;
  viewPrintResume: string;
  privateProject: string;
  commercialProject: string;
  personalProject: string;
  viewCertificate: string;
  englishLevel: string;
}
