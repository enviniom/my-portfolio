import type {
  Locale,
  ProfileId,
  EnrichedCertification,
  CertificationItem,
  CertificationAssessmentBreakdown,
} from '../../content/types';
import type {
  ResumeDocument,
  ResumeExperienceItem,
  ResumeProjectItem,
  ResumeSkillCategory,
} from './types';
import { resumeProfiles } from './profiles';
import {
  profile,
  experiences as contentExperiences,
  projects as contentProjects,
  skills as contentSkills,
  education as contentEducation,
  certifications as contentCertifications,
} from '../../content';

export function getResumeDocument(profileId: ProfileId, locale: Locale): ResumeDocument {
  const resumeProfile = resumeProfiles[profileId] || resumeProfiles.backend;
  const presentLabel = locale === 'es' ? 'Actual' : 'Present';

  // Map and filter experiences according to profile configuration
  const expMap = new Map(contentExperiences.map((e) => [e.id, e]));
  const experiences: ResumeExperienceItem[] = resumeProfile.featuredExperienceIds
    .map((id) => {
      const exp = expMap.get(id);
      if (!exp) return null;

      const start = exp.startDate;
      const end = exp.endDate ?? presentLabel;
      const flatTechs = exp.technologies.flatMap((t) => t.items);

      return {
        id: exp.id,
        organization: exp.organization,
        ...(exp.clientGrouping ? { clientGrouping: exp.clientGrouping } : {}),
        role: exp.role[locale],
        period: `${start} — ${end}`,
        summary: exp.summary[locale],
        responsibilities: exp.responsibilities[locale].slice(0, 3), // Curated for ATS density
        technologies: flatTechs,
        highlights: exp.highlights[locale].slice(0, 1),
      };
    })
    .filter((item): item is ResumeExperienceItem => Boolean(item));

  // Map and filter projects
  const projMap = new Map(contentProjects.map((p) => [p.id, p]));
  const projects: ResumeProjectItem[] = resumeProfile.featuredProjectIds
    .map((id) => {
      const proj = projMap.get(id);
      if (!proj) return null;

      return {
        id: proj.id,
        name: proj.name,
        technologies: proj.technologies,
        description: proj.description[locale],
        highlights: proj.highlights[locale].slice(0, profileId === 'master' ? 1 : 2),
      };
    })
    .filter((item): item is ResumeProjectItem => Boolean(item));

  // Categorize skills and order priority skills first
  const skills: ResumeSkillCategory[] = contentSkills.map((cat) => ({
    title: cat.title[locale],
    skills: profileId === 'master'
      ? cat.skills.map((s) => s.name)
      : cat.skills
          .filter((s) => s.priorityProfiles.includes(profileId) || resumeProfile.prioritySkillNames.includes(s.name))
          .map((s) => s.name),
  })).filter((cat) => cat.skills.length > 0);

  // Education
  const education = contentEducation.map((edu) => ({
    institution: edu.institution,
    area: edu.area[locale],
    studyType: edu.studyType[locale],
    period: `${edu.startDate.substring(0, 4)} — ${edu.endDate.substring(0, 4)}`,
  }));

  const resumeCertifications: EnrichedCertification[] = contentCertifications.map((c: CertificationItem) => ({
    id: c.id,
    name: c.name,
    issuer: c.issuer,
    category: c.category,
    issuedAt: c.issuedAt,
    expiresAt: c.expiresAt,
    credentialId: c.credentialId,
    verificationUrl: c.verificationUrl,
    pdfUrl: c.pdfUrl,
    badgeUrl: c.badgeUrl,
    description: c.description ? c.description[locale] : undefined,
    skills: c.skills,
    assessment: c.assessment
      ? {
          score: c.assessment.score,
          level: c.assessment.level,
          breakdown: c.assessment.breakdown?.map((b: CertificationAssessmentBreakdown) => ({
            name: b.name[locale],
            score: b.score,
            level: b.level,
          })),
        }
      : undefined,
  }));

  const labels = {
    skills: locale === 'es' ? 'Habilidades Técnicas' : 'Technical Skills',
    experience: locale === 'es' ? 'Experiencia Profesional Relevante' : 'Relevant Professional Experience',
    projects: locale === 'es' ? 'Proyectos de Ingeniería Seleccionados' : 'Selected Engineering Projects',
    education: locale === 'es' ? 'Educación' : 'Education',
    certifications: locale === 'es' ? 'Certificaciones' : 'Certifications',
    verifyCert: locale === 'es' ? 'Verificar credencial' : 'Verify credential',
  };

  const linkedIn = profile.profiles.find((p) => p.network === 'LinkedIn')?.url || 'https://www.linkedin.com/in/enviniom/';
  const gitHub = profile.profiles.find((p) => p.network === 'GitHub')?.url || 'https://github.com/enviniom';

  return {
    profileId,
    locale,
    header: {
      name: profile.name,
      title: resumeProfile.title[locale],
      email: profile.email,
      phone: profile.phone,
      location: `${profile.location.city}, ${profile.location.region}`,
      url: profile.url,
      linkedIn,
      gitHub,
    },
    summary: resumeProfile.summary[locale],
    skills,
    experiences,
    projects,
    education,
    certifications: resumeCertifications,
    labels,
  };
}

export interface ProfileValidationResult {
  profileId: ProfileId;
  locale: Locale;
  experiencesCount: number;
  projectsCount: number;
  skillsCount: number;
}

export function validateAllResumeProfiles(): ProfileValidationResult[] {
  const profiles: ProfileId[] = ['master', 'backend', 'dotnet-fullstack', 'distributed-systems'];
  const locales: Locale[] = ['es', 'en'];
  const results: ProfileValidationResult[] = [];

  for (const prof of profiles) {
    for (const loc of locales) {
      const doc = getResumeDocument(prof, loc);
      if (!doc.header.name || !doc.summary || doc.experiences.length === 0 || doc.projects.length === 0) {
        throw new Error(`Resume validation failed for ${prof} [${loc}]`);
      }
      results.push({
        profileId: prof,
        locale: loc,
        experiencesCount: doc.experiences.length,
        projectsCount: doc.projects.length,
        skillsCount: doc.skills.reduce((acc, cat) => acc + cat.skills.length, 0),
      });
    }
  }

  return results;
}
