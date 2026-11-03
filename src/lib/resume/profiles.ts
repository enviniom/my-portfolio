import type { ResumeProfileConfig } from './types';

export const resumeProfiles: Record<string, ResumeProfileConfig> = {
  backend: {
    id: 'backend',
    targetRole: {
      es: 'Ingeniero Backend Senior',
      en: 'Senior Backend Engineer',
    },
    title: {
      es: 'Senior Backend Engineer (Java | Go | Sistemas Distribuidos)',
      en: 'Senior Backend Engineer (Java | Go | Distributed Systems)',
    },
    summary: {
      es: 'Ingeniero de Software Senior con más de 8 años de experiencia especializado en desarrollo backend de alto rendimiento, microservicios y sistemas distribuidos. Sólido dominio en Java (Spring Boot, Netty), Go y C#/.NET para procesamiento de telemetría en tiempo real, decodificación binaria de protocolos, APIs REST y bases de datos relacionales (PostgreSQL, SQL Server). Capacidad comprobada para liderar el ciclo completo: desde levantamiento de requisitos y arquitectura hasta despliegues en contenedores Docker y servidores Linux en producción.',
      en: 'Senior Software Engineer with 8+ years of experience specializing in high-performance backend systems, microservices, and distributed architectures. Strong proficiency in Java (Spring Boot, Netty), Go, and C#/.NET for real-time telemetry processing, binary protocol decoding, REST APIs, and relational databases (PostgreSQL, SQL Server). Proven track record of end-to-end ownership: from technical requirements and architectural design to containerized Docker deployments on production Linux servers.',
    },
    prioritySkillNames: [
      'Java',
      'Spring Boot',
      'Netty',
      'Go',
      'PostgreSQL',
      'RabbitMQ',
      'Docker',
      'CI/CD',
      'MySQL',
      'Node.js',
    ],
    featuredExperienceIds: [
      'miia',
      'dreammakers',
      'jemaproject',
      'dtl360-metaretos',
      'preconcretos-sag3p',
    ],
    featuredProjectIds: [
      'miia-receptor-gps',
      'neofluxai',
      'metaretos',
    ],
  },
  'dotnet-fullstack': {
    id: 'dotnet-fullstack',
    targetRole: {
      es: 'Desarrollador Full Stack .NET Senior',
      en: 'Senior Full Stack .NET Developer',
    },
    title: {
      es: 'Senior Full Stack .NET & Angular Developer (C# | ASP.NET Core | Angular)',
      en: 'Senior Full Stack .NET & Angular Developer (C# | ASP.NET Core | Angular)',
    },
    summary: {
      es: 'Desarrollador Full Stack Senior con más de 8 años de experiencia construyendo aplicaciones empresariales web seguras y escalables con el ecosistema .NET (C#, ASP.NET Core 7/9/10, Web API, MVC) y Angular (v15 a v21). Amplia experiencia en modelado y optimización de bases de datos relacionales (SQL Server, PostgreSQL) con Entity Framework Core y Dapper, integración con Directorio Activo (SSO) y despliegue en entornos empresariales (Windows Server / IIS y Linux).',
      en: 'Senior Full Stack Developer with 8+ years of experience building secure, scalable enterprise web applications using the .NET ecosystem (C#, ASP.NET Core 7/9/10, Web API, MVC) and Angular (v15 to v21). Extensive background in relational database modeling and optimization (SQL Server, PostgreSQL) with Entity Framework Core and Dapper, Active Directory SSO integration, and enterprise deployments across Windows Server/IIS and Linux environments.',
    },
    prioritySkillNames: [
      'C#',
      '.NET',
      'Angular',
      'TypeScript',
      'SQL Server',
      'PostgreSQL',
      'JavaScript',
      'HTML',
      'CSS',
      'TailwindCSS',
      'Docker',
      'Git',
    ],
    featuredExperienceIds: [
      'cens-sicont',
      'cens-catalog-2025',
      'dtl360-sustitucion',
      'cens-catalog-2023',
      'preconcretos-sag3p',
    ],
    featuredProjectIds: [
      'sicont',
      'cens-catalogo-2025',
      'sag3p',
    ],
  },
  'distributed-systems': {
    id: 'distributed-systems',
    targetRole: {
      es: 'Ingeniero de Sistemas Distribuidos',
      en: 'Distributed Systems Engineer',
    },
    title: {
      es: 'Distributed Systems & Real-Time Backend Engineer (Java | Netty | Go)',
      en: 'Distributed Systems & Real-Time Backend Engineer (Java | Netty | Go)',
    },
    summary: {
      es: 'Ingeniero de Software Senior especializado en sistemas distribuidos, alta concurrencia y redes en tiempo real. Experiencia comprobada en el diseño e implementación de servidores de red con Netty (TCP/UDP), decodificación de protocolos binarios de múltiples marcas de telemetría IoT, motores geoespaciales de geocercas, colas de mensajería asíncronas con RabbitMQ y arquitecturas resilientes sobre Docker y AWS.',
      en: 'Senior Software Engineer specializing in distributed architectures, high-concurrency event processing, and real-time networking. Proven experience designing and operating custom network gateways with Netty (TCP/UDP), multi-vendor binary IoT telemetry protocol decoders, real-time geospatial geofencing engines, asynchronous message brokers with RabbitMQ, and resilient cloud architectures on Docker and AWS.',
    },
    prioritySkillNames: [
      'Netty',
      'Java',
      'Spring Boot',
      'Go',
      'RabbitMQ',
      'PostgreSQL',
      'Docker',
      'WebSockets',
      'AWS Lambda',
      'CI/CD',
    ],
    featuredExperienceIds: [
      'miia',
      'cens-sicont',
      'dtl360-metaretos',
      'dreammakers',
      'arivo',
    ],
    featuredProjectIds: [
      'miia-receptor-gps',
      'sicont',
      'metaretos',
    ],
  },
};
