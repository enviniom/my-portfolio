import type {
  Locale,
  ProfileId,
  ExperienceId,
  ProjectId,
  EnrichedCertification,
} from '@/content/types';

export interface ResumeProfileConfig {
  id: ProfileId;
  targetRole: Record<Locale, string>;
  title: Record<Locale, string>;
  summary: Record<Locale, string>;
  prioritySkillNames: string[];
  featuredExperienceIds: ExperienceId[];
  featuredProjectIds: ProjectId[];
}

export interface ResumeSkillCategory {
  title: string;
  skills: string[];
}

export interface ResumeExperienceItem {
  id: ExperienceId;
  organization: string;
  clientGrouping?: 'cens-grupo-epm' | undefined;
  role: string;
  period: string;
  summary: string;
  responsibilities: string[];
  technologies: string[];
  highlights: string[];
}

export interface ResumeProjectItem {
  id: ProjectId;
  name: string;
  technologies: string[];
  description: string;
  highlights: string[];
}

export interface ResumeDocument {
  profileId: ProfileId;
  locale: Locale;
  header: {
    name: string;
    targetRole: string;
    title: string;
    email: string;
    phone: string;
    location: string;
    url: string;
    linkedIn: string;
    gitHub: string;
  };
  summary: string;
  skills: ResumeSkillCategory[];
  experiences: ResumeExperienceItem[];
  projects: ResumeProjectItem[];
  education: {
    institution: string;
    area: string;
    studyType: string;
    period: string;
  }[];
  certifications: EnrichedCertification[];
  labels: {
    skills: string;
    experience: string;
    projects: string;
    education: string;
    certifications: string;
    verifyCert: string;
  };
}
