import type { SkillCategory } from './types';

export const skills: SkillCategory[] = [
  {
    title: {
      es: 'Backend y Arquitectura',
      en: 'Backend & Architecture',
    },
    skills: [
      {
        name: 'Java',
        level: { es: 'Avanzado', en: 'Advanced' },
        keywords: ['JDK 25', 'Concurrencia', 'APIs'],
        priorityProfiles: ['backend', 'distributed-systems'],
      },
      {
        name: 'Spring Boot',
        level: { es: 'Avanzado', en: 'Advanced' },
        keywords: ['Microservicios', 'REST APIs', 'Spring Data JPA', 'Spring Security'],
        priorityProfiles: ['backend', 'distributed-systems'],
      },
      {
        name: 'Netty',
        level: { es: 'Intermedio', en: 'Intermediate' },
        keywords: ['TCP/UDP', 'Sockets', 'Alta Concurrencia', 'Decodificación Binaria'],
        priorityProfiles: ['backend', 'distributed-systems'],
      },
      {
        name: 'Go',
        level: { es: 'Avanzado', en: 'Advanced' },
        keywords: ['Gin', 'WebSockets', 'APIs REST', 'Wails'],
        priorityProfiles: ['backend', 'distributed-systems'],
      },
      {
        name: 'C#',
        level: { es: 'Avanzado', en: 'Advanced' },
        keywords: ['.NET 7/9/10', 'ASP.NET Web API', 'ASP.NET MVC'],
        priorityProfiles: ['dotnet-fullstack'],
      },
      {
        name: '.NET',
        level: { es: 'Intermedio', en: 'Intermediate' },
        keywords: ['Entity Framework Core', 'Dapper', 'Razor Pages'],
        priorityProfiles: ['dotnet-fullstack'],
      },
      {
        name: 'RabbitMQ',
        level: { es: 'Intermedio', en: 'Intermediate' },
        keywords: ['Message Broker', 'Event-Driven Architecture', 'Asynchronous Messaging'],
        priorityProfiles: ['backend', 'distributed-systems'],
      },
      {
        name: 'Node.js',
        level: { es: 'Avanzado', en: 'Advanced' },
        keywords: ['Backend', 'JavaScript', 'APIs'],
        priorityProfiles: ['backend', 'dotnet-fullstack'],
      },
      {
        name: 'CakePHP',
        level: { es: 'Avanzado', en: 'Advanced' },
        keywords: ['PHP Framework', 'MVC', 'REST APIs'],
        priorityProfiles: ['backend'],
      },
      {
        name: 'Laravel',
        level: { es: 'Intermedio', en: 'Intermediate' },
        keywords: ['PHP Framework', 'Backend'],
        priorityProfiles: ['backend'],
      },
    ],
  },
  {
    title: {
      es: 'Bases de Datos',
      en: 'Databases & Storage',
    },
    skills: [
      {
        name: 'PostgreSQL',
        level: { es: 'Intermedio', en: 'Intermediate' },
        keywords: ['SQL', 'Modelado Relacional', 'Flyway', 'JPA', 'GORM'],
        priorityProfiles: ['backend', 'distributed-systems', 'dotnet-fullstack'],
      },
      {
        name: 'SQL Server',
        level: { es: 'Intermedio', en: 'Intermediate' },
        keywords: ['T-SQL', 'Entity Framework Core', 'Optimización de Consultas'],
        priorityProfiles: ['dotnet-fullstack'],
      },
      {
        name: 'MySQL',
        level: { es: 'Intermedio', en: 'Intermediate' },
        keywords: ['SQL', 'Almacenamiento de Datos'],
        priorityProfiles: ['backend'],
      },
      {
        name: 'MariaDB',
        level: { es: 'Intermedio', en: 'Intermediate' },
        keywords: ['SQL', 'Open Source'],
        priorityProfiles: ['backend'],
      },
    ],
  },
  {
    title: {
      es: 'Frontend',
      en: 'Frontend & UI',
    },
    skills: [
      {
        name: 'Angular',
        level: { es: 'Avanzado', en: 'Advanced' },
        keywords: ['Angular 15-21', 'Angular Material', 'RxJS', 'TypeScript'],
        priorityProfiles: ['dotnet-fullstack'],
      },
      {
        name: 'TypeScript',
        level: { es: 'Avanzado', en: 'Advanced' },
        keywords: ['Tipado Estático', 'Frontend', 'Backend'],
        priorityProfiles: ['dotnet-fullstack', 'backend'],
      },
      {
        name: 'JavaScript',
        level: { es: 'Avanzado', en: 'Advanced' },
        keywords: ['ES6+', 'Fullstack'],
        priorityProfiles: ['dotnet-fullstack', 'backend'],
      },
      {
        name: 'Svelte',
        level: { es: 'Avanzado', en: 'Advanced' },
        keywords: ['Svelte 4/5', 'Componentes Reactivos'],
        priorityProfiles: ['backend', 'dotnet-fullstack'],
      },
      {
        name: 'TailwindCSS',
        level: { es: 'Avanzado', en: 'Advanced' },
        keywords: ['Diseño Responsivo', 'CSS Framework', 'DaisyUI'],
        priorityProfiles: ['dotnet-fullstack'],
      },
      {
        name: 'HTML',
        level: { es: 'Master', en: 'Master' },
        keywords: ['Semántica', 'Accesibilidad'],
        priorityProfiles: ['dotnet-fullstack'],
      },
      {
        name: 'CSS',
        level: { es: 'Avanzado', en: 'Advanced' },
        keywords: ['Flexbox', 'Grid', 'Diseño Responsivo'],
        priorityProfiles: ['dotnet-fullstack'],
      },
      {
        name: 'Alpine.js',
        level: { es: 'Intermedio', en: 'Intermediate' },
        keywords: ['UI Liviana', 'JavaScript'],
        priorityProfiles: [],
      },
    ],
  },
  {
    title: {
      es: 'Cloud, DevOps y Herramientas',
      en: 'Cloud, DevOps & Tools',
    },
    skills: [
      {
        name: 'Docker',
        level: { es: 'Intermedio', en: 'Intermediate' },
        keywords: ['Contenedores', 'Docker Compose', 'Testcontainers'],
        priorityProfiles: ['backend', 'distributed-systems', 'dotnet-fullstack'],
      },
      {
        name: 'CI/CD',
        level: { es: 'Intermedio', en: 'Intermediate' },
        keywords: ['GitHub Actions', 'Flujos Automatizados'],
        priorityProfiles: ['backend', 'distributed-systems', 'dotnet-fullstack'],
      },
      {
        name: 'Git',
        level: { es: 'Avanzado', en: 'Advanced' },
        keywords: ['Control de Versiones', 'Pull Requests', 'Code Reviews'],
        priorityProfiles: ['backend', 'distributed-systems', 'dotnet-fullstack'],
      },
      {
        name: 'GitHub',
        level: { es: 'Avanzado', en: 'Advanced' },
        keywords: ['Control de Versiones', 'Colaboración'],
        priorityProfiles: ['backend', 'distributed-systems', 'dotnet-fullstack'],
      },
      {
        name: 'AWS Lambda',
        level: { es: 'Intermedio', en: 'Intermediate' },
        keywords: ['Serverless', 'Cloud Functions'],
        priorityProfiles: ['backend', 'distributed-systems'],
      },
      {
        name: 'Amazon S3',
        level: { es: 'Intermedio', en: 'Intermediate' },
        keywords: ['Cloud Storage'],
        priorityProfiles: ['backend', 'distributed-systems'],
      },
    ],
  },
];
