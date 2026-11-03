import type { ProfileData, LanguageItem, InterestItem, SiteLabels, Locale } from './types';

export const profile: ProfileData = {
  name: 'Jhon Colmenares',
  email: 'jhonccr@gmail.com',
  phone: '+57 318 657 24 67',
  url: 'https://enviniom.github.io/my-portfolio/',
  image: '/my-portfolio/cv1.jpg',
  location: {
    city: 'Cúcuta',
    region: 'Colombia',
    countryCode: 'CO',
    postalCode: '54001',
  },
  profiles: [
    {
      network: 'LinkedIn',
      username: 'jhonccr',
      url: 'https://www.linkedin.com/in/enviniom/',
    },
    {
      network: 'GitHub',
      username: 'jhonccr',
      url: 'https://github.com/enviniom',
    },
  ],
  label: {
    es: 'Desarrollador Senior Backend / Fullstack (Java | Go | .NET) con más de 8 años de experiencia en sistemas distribuidos, APIs y arquitectura de software.',
    en: 'Senior Backend / Fullstack Developer (Java | Go | .NET) with 8+ years of experience in distributed systems, high-concurrency APIs, and software architecture.',
  },
  summary: {
    es: 'Soy un Desarrollador Senior con más de 8 años de experiencia en diseño, construcción y despliegue de software empresarial y sistemas distribuidos. Cuento con una base técnica sólida en Java (Spring Boot, Netty), Go y C#/.NET para desarrollo backend de alto rendimiento, procesamiento de telemetría y tramas en tiempo real, APIs REST y modelado de datos SQL. He trabajado en todo el ciclo de vida del software, desde levantamiento de requerimientos y diseño de arquitectura limpia hasta soporte en producción, code reviews y prácticas de entrega continua. Mi enfoque es construir soluciones confiables, escalables y orientadas a los objetivos del negocio.',
    en: 'Senior Developer with 8+ years of experience designing, building, and deploying enterprise software and distributed systems. Strong technical foundation in Java (Spring Boot, Netty), Go, and C#/.NET for high-performance backend development, real-time telemetry processing, REST APIs, and clean architecture design. Experienced across the full software development lifecycle, from technical design and domain modeling to production operations, automated testing, and CI/CD practices. Focused on delivering resilient, maintainable, and scalable systems aligned with business goals.',
  },
  summaryHighlights: {
    es: [
      'Más de 8 años de experiencia con liderazgo técnico en arquitectura y entrega',
      'Desarrollo backend en Java (Spring Boot, Netty), Go y C#/.NET',
      'Sistemas de alta concurrencia, procesamiento en tiempo real (TCP/UDP, WebSockets) y modelado SQL',
      'Experiencia con flujos Git, pruebas automatizadas y entregas orientadas a CI/CD',
      'Despliegues y soporte en producción sobre servidores Linux, Docker y AWS',
    ],
    en: [
      '8+ years in software engineering with technical leadership in architecture and delivery',
      'Robust backend development in Java (Spring Boot, Netty), Go, and C#/.NET',
      'High-concurrency systems, real-time networking (TCP/UDP, WebSockets), and SQL modeling',
      'Git workflows, automated testing, code reviews, and CI/CD-driven delivery',
      'Production deployments and operations across Linux, Docker containers, and AWS',
    ],
  },
};

export const languages: LanguageItem[] = [
  {
    language: { es: 'Español', en: 'Spanish' },
    fluency: { es: 'Nativo', en: 'Native' },
  },
  {
    language: { es: 'Inglés', en: 'English' },
    fluency: {
      es: 'C1 Avanzado (Certificado EF SET 62/100)',
      en: 'C1 Advanced (EF SET Certified 62/100)',
    },
    certificateRef: 'efset-c1',
  },
];

export const interests: InterestItem[] = [
  { name: { es: 'Música', en: 'Music' } },
  { name: { es: 'Tenis', en: 'Tennis' } },
  { name: { es: 'Baloncesto', en: 'Basketball' } },
  { name: { es: 'Videojuegos', en: 'Video Games' } },
];

export const labels: Record<Locale, SiteLabels> = {
  es: {
    about: 'Sobre mí',
    experience: 'Experiencia laboral',
    relevantExperience: 'Experiencia relevante en ingeniería de software',
    completeHistory: 'Historial profesional completo',
    recurringClientNote: 'Relación profesional recurrente por proyectos específicos (2020, 2023, 2025, 2026)',
    projects: 'Proyectos',
    skills: 'Habilidades',
    education: 'Estudios',
    certifications: 'Certificados',
    languages: 'Idiomas',
    interests: 'Intereses o Hobbies',
    present: 'Actual',
    downloadResume: 'Descargar CV (PDF)',
    viewPrintResume: 'Ver / Imprimir CV',
    privateProject: 'Proyecto privado empresarial',
    commercialProject: 'Proyecto empresarial',
    personalProject: 'Producto propio / SaaS',
    viewCertificate: 'Verificar certificado oficial',
    englishLevel: 'Nivel global',
  },
  en: {
    about: 'About Me',
    experience: 'Work Experience',
    relevantExperience: 'Relevant Software Engineering Experience',
    completeHistory: 'Complete Professional Career History',
    recurringClientNote: 'Recurring software engineering engagements across key initiatives (2020, 2023, 2025, 2026)',
    projects: 'Projects',
    skills: 'Technical Skills',
    education: 'Education',
    certifications: 'Certifications',
    languages: 'Languages',
    interests: 'Interests & Hobbies',
    present: 'Present',
    downloadResume: 'Download Resume (PDF)',
    viewPrintResume: 'View / Print Resume',
    privateProject: 'Private enterprise project',
    commercialProject: 'Commercial project',
    personalProject: 'Personal product / SaaS',
    viewCertificate: 'Verify official certificate',
    englishLevel: 'Overall level',
  },
};
