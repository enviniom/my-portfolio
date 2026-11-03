import type { ProjectItem } from './types';

export const projects: ProjectItem[] = [
  {
    id: 'miia-receptor-gps',
    name: 'MIIA - Receptor GPS',
    category: 'commercial_client',
    confidentiality: 'private_enterprise',
    experienceId: 'miia',
    technologies: ['Java 25', 'Spring Boot 3.5', 'Netty (TCP/UDP)', 'PostgreSQL', 'Flyway', 'Docker', 'WebSockets'],
    url: '',
    targetProfiles: ['backend', 'distributed-systems'],
    description: {
      es: 'Backend receptor y procesador de telemetría GPS en tiempo real para mascotas con auditoría y geocercas.',
      en: 'Real-time GPS telemetry ingestion and processing backend for pet tracking with geospatial geofencing and audit trails.',
    },
    highlights: {
      es: [
        'Backend: Java 25, Spring Boot 3.5, Netty (TCP/UDP), PostgreSQL, Flyway, Docker',
        'Decodificación binaria multimarca: Concox JVL03, Jimi IoT AL600, Eview y OsmAnd',
        'Motor geoespacial de geocercas en tiempo real y despacho de comandos remotos',
        'Sistema de partners multi-tenant y auditoría de tramas crudas para trazabilidad y diagnóstico',
        'Integración con app móvil y WebSockets para actualización en vivo',
      ],
      en: [
        'Backend: Java 25, Spring Boot 3.5, Netty (TCP/UDP), PostgreSQL, Flyway, Docker',
        'Multi-vendor binary decoding: Concox JVL03, Jimi IoT AL600, Eview, and OsmAnd',
        'Real-time geospatial geofencing engine and remote device command dispatch',
        'Multi-tenant partner model and raw frame audit pipeline for traceability',
        'Bidirectional mobile app integration with WebSockets for live streaming',
      ],
    },
  },
  {
    id: 'sicont',
    name: 'SICont',
    category: 'commercial_client',
    confidentiality: 'private_enterprise',
    experienceId: 'cens-sicont',
    technologies: ['C# (ASP.NET 10)', 'PostgreSQL (EntityFramework, Dapper)', 'Angular 21', 'IIS', 'Tailwind', 'Active Directory SSO'],
    url: '',
    targetProfiles: ['dotnet-fullstack'],
    description: {
      es: 'Aplicación WEB para controlar el flujo de los procesos de contratación, con énfasis en las fechas y tareas.',
      en: 'Enterprise web application to orchestrate procurement and contracting workflows, deadlines, and milestone tasks.',
    },
    highlights: {
      es: [
        'Backend: C# (ASP.NET 10), PostgreSQL (EntityFramework, Dapper), IIS',
        'Frontend: HTML, CSS (Tailwind), JavaScript (Angular 21)',
        'Despliegue en intranet corporativa',
        'Notificaciones automáticas por correo',
        'SSO con Directorio Activo institucional',
      ],
      en: [
        'Backend: C# (ASP.NET 10), PostgreSQL (EntityFramework, Dapper), IIS',
        'Frontend: HTML, CSS (Tailwind), JavaScript (Angular 21)',
        'Deployment on enterprise corporate intranet',
        'Automated email notification engine',
        'Single Sign-On (SSO) integrated with corporate Active Directory',
      ],
    },
  },
  {
    id: 'neofluxai',
    name: 'NeoFluxAI',
    category: 'commercial_client',
    confidentiality: 'private_enterprise',
    experienceId: 'dreammakers',
    technologies: ['Go (Gin, WebSocket)', 'PostgreSQL (Gorm)', 'Svelte 5', 'Tailwind CSS', 'AI Agents'],
    url: '',
    targetProfiles: ['backend', 'distributed-systems'],
    description: {
      es: 'Aplicación CRM para atención de potenciales clientes utilizando agentes IA.',
      en: 'CRM application for client engagement and sales lead automation utilizing AI agents.',
    },
    highlights: {
      es: [
        'Backend: Go (Gin, WebSocket), PostgreSQL (Gorm)',
        'Frontend: HTML, CSS (Tailwind CSS, Daisy UI), JavaScript (Svelte 5)',
        'Agente IA integrado con múltiples proveedores LLM',
      ],
      en: [
        'Backend: Go (Gin, WebSocket), PostgreSQL (Gorm)',
        'Frontend: HTML, CSS (Tailwind CSS, Daisy UI), JavaScript (Svelte 5)',
        'Multi-provider LLM AI agent integration',
      ],
    },
  },
  {
    id: 'jemapack',
    name: 'Jemapack',
    category: 'commercial_client',
    confidentiality: 'private_enterprise',
    experienceId: 'jemaproject',
    technologies: ['Go (Wails, Gin)', 'PHP (CakePHP 5)', 'MariaDB', 'Svelte 5', 'Tailwind CSS', 'Alpine.js'],
    url: '',
    targetProfiles: ['backend', 'distributed-systems'],
    description: {
      es: 'Solución web para el registro, control y manejo de la producción interna de una fábrica de plásticos.',
      en: 'Industrial production control, raw material consumption traceability, and machinery maintenance tracking system for plastics manufacturing.',
    },
    highlights: {
      es: [
        'Backend: PHP (CakePHP 5), MariaDB (Cake ORM), Go (Wails, API Rest, Gin Gonic)',
        'Frontend: HTML, CSS (Tailwind CSS, Daisy UI), JavaScript (Alpine JS, Svelte 5)',
        'Implementación en Intranet, control de producción, trazabilidad y mantenimiento',
      ],
      en: [
        'Backend: PHP (CakePHP 5), MariaDB (Cake ORM), Go (Wails, REST API, Gin Gonic)',
        'Frontend: HTML, CSS (Tailwind CSS, Daisy UI), JavaScript (Alpine JS, Svelte 5)',
        'Intranet deployment, real-time production recording, and barcode printing API',
      ],
    },
  },
  {
    id: 'saphyr',
    name: 'Saphyr',
    category: 'personal_saas',
    confidentiality: 'public',
    technologies: ['Go (Gin REST API, Web Server)', 'MariaDB (Gorm)', 'SSR (Templ, HTMX)', 'Pico CSS', 'Vanilla JS'],
    url: '',
    targetProfiles: ['backend'],
    description: {
      es: 'Aplicación web para la administración de propiedades horizontales.',
      en: 'Web application for residential property management, financial records, and resident communications.',
    },
    highlights: {
      es: [
        'Backend: Go (Gin API Rest, web server), MariaDB (Gorm)',
        'Frontend: SSR (Templ, HTMX), HTML, CSS (Pico CSS), JavaScript (Vanilla)',
        'Desarrollo de plataforma robusta para administración de propiedades',
      ],
      en: [
        'Backend: Go (Gin REST API, web server), MariaDB (Gorm)',
        'Frontend: SSR (Templ, HTMX), HTML, CSS (Pico CSS), JavaScript (Vanilla)',
        'Robust property administration platform built with lightweight SSR architecture',
      ],
    },
  },
  {
    id: 'raffles',
    name: 'Raffles',
    category: 'personal_saas',
    confidentiality: 'public',
    technologies: ['Go (Gin REST API)', 'MariaDB (Gorm)', 'Svelte 4', 'Dart (Flutter)', 'Pico CSS'],
    url: '',
    targetProfiles: ['backend', 'distributed-systems'],
    description: {
      es: 'Aplicación web para crear rifas, promover y vender de manera online los puestos.',
      en: 'Online ticketing platform to create, manage, promote, and sell raffle numbers securely.',
    },
    highlights: {
      es: [
        'Backend: Go (Gin API Rest), MariaDB (Gorm)',
        'Frontend: HTML, CSS (Pico CSS), JavaScript (Svelte 4), Dart (Flutter)',
        'Plataforma completa para gestión y venta de rifas online',
      ],
      en: [
        'Backend: Go (Gin REST API), MariaDB (Gorm)',
        'Frontend: HTML, CSS (Pico CSS), JavaScript (Svelte 4), Dart (Flutter)',
        'End-to-end online raffle platform with cross-platform mobile app',
      ],
    },
  },
  {
    id: 'ftw-360',
    name: 'FTW 360',
    category: 'commercial_client',
    confidentiality: 'private_enterprise',
    experienceId: 'arivo',
    technologies: ['PHP (CakePHP, Laravel)', 'MySQL', 'Docker', 'AWS Lambda', 'Amazon S3', 'Bootstrap', 'jQuery'],
    url: '',
    targetProfiles: ['backend', 'distributed-systems'],
    description: {
      es: 'Aplicación web para streaming de contenido de video dedicado a deportes universitarios.',
      en: 'On-demand video streaming platform for collegiate sports competitions.',
    },
    highlights: {
      es: [
        'Backend: PHP (CakePHP, Laravel), MySQL, Docker, Lambda AWS, S3 Bucket',
        'Frontend: HTML, CSS (Bootstrap), JavaScript (JQuery)',
        'Plataforma de streaming con optimización de recursos en la nube',
      ],
      en: [
        'Backend: PHP (CakePHP, Laravel), MySQL, Docker, AWS Lambda, S3 Bucket',
        'Frontend: HTML, CSS (Bootstrap), JavaScript (jQuery)',
        'Video streaming infrastructure with cloud resource optimization',
      ],
    },
  },
  {
    id: 'cens-catalogo-2025',
    name: 'Catálogo de Servicios (2025)',
    category: 'commercial_client',
    confidentiality: 'private_enterprise',
    experienceId: 'cens-catalog-2025',
    technologies: ['C# (ASP.NET Web API, .NET 9)', 'SQL Server (Entity Framework Core)', 'Angular 19', 'Bootstrap'],
    url: '',
    targetProfiles: ['dotnet-fullstack'],
    description: {
      es: 'Actualización de aplicación intranet para control de servicios ofrecidos al cliente interno.',
      en: 'Intranet modernization for internal service and product catalog management across corporate departments.',
    },
    highlights: {
      es: [
        'Backend: C# (Rest API ASP.NET, .NET 9), SQL Server (Entity Framework Core)',
        'Frontend: HTML, CSS (Bootstrap), JavaScript (Angular 19)',
        'Modernización de plataforma interna con nuevas funcionalidades',
      ],
      en: [
        'Backend: C# (REST API ASP.NET, .NET 9), SQL Server (Entity Framework Core)',
        'Frontend: HTML, CSS (Bootstrap), JavaScript (Angular 19)',
        'Enterprise platform modernization with new workflow capabilities',
      ],
    },
  },
  {
    id: 'cens-catalogo-2023',
    name: 'Catálogo de Servicios (2023)',
    category: 'commercial_client',
    confidentiality: 'private_enterprise',
    experienceId: 'cens-catalog-2023',
    technologies: ['C# (ASP.NET Web API, .NET 7)', 'SQL Server (Entity Framework Core)', 'Angular 17', 'Bootstrap'],
    url: '',
    targetProfiles: ['dotnet-fullstack'],
    description: {
      es: 'Actualización de aplicación intranet para control de servicios ofrecidos al cliente interno.',
      en: 'Intranet modernization for internal service and product catalog management.',
    },
    highlights: {
      es: [
        'Backend: C# (Rest API ASP.NET, .NET 7), SQL Server (Entity Framework Core)',
        'Frontend: HTML, CSS (Bootstrap), JavaScript (Angular 17)',
        'Rediseño arquitectónico y migración tecnológica',
      ],
      en: [
        'Backend: C# (REST API ASP.NET, .NET 7), SQL Server (Entity Framework Core)',
        'Frontend: HTML, CSS (Bootstrap), JavaScript (Angular 17)',
        'Architectural redesign and modern REST API development',
      ],
    },
  },
  {
    id: 'sag3p',
    name: 'Sag3p',
    category: 'commercial_client',
    confidentiality: 'private_enterprise',
    experienceId: 'preconcretos-sag3p',
    technologies: ['Go (Gin)', 'PHP (CakePHP, JWT)', 'MariaDB', 'FireBird', 'Angular 15', 'Angular Material 15'],
    url: '',
    targetProfiles: ['backend', 'dotnet-fullstack'],
    description: {
      es: 'Solución web para el control y registro de producción, control de trabajadores, horas trabajadas, con integración al programa contable.',
      en: 'Web platform for production control, work-hour recording, and real-time accounting integration.',
    },
    highlights: {
      es: [
        'Backend: PHP (Rest API CakePHP y JWT), MariaDB, FireBird, Go (Gin)',
        'Frontend: JavaScript (Angular 15, Angular Material 15), HTML, CSS',
        'Desarrollo integral de sistema de gestión de producción con integración contable',
      ],
      en: [
        'Backend: PHP (REST API CakePHP and JWT), MariaDB, FireBird, Go (Gin)',
        'Frontend: JavaScript (Angular 15, Angular Material 15), HTML, CSS',
        'End-to-end manufacturing management system with real-time accounting sync',
      ],
    },
  },
  {
    id: 'custodia',
    name: 'Custodia',
    category: 'commercial_client',
    confidentiality: 'private_enterprise',
    experienceId: 'casa-funerales-rincon',
    technologies: ['PHP (CakePHP)', 'MariaDB', 'Bootstrap', 'AWS'],
    url: '',
    targetProfiles: [],
    description: {
      es: 'Software para custodia de video con último deseo.',
      en: 'Secure web platform for last-wish video custody and scheduled posthumous delivery.',
    },
    highlights: {
      es: [
        'Tecnologías: PHP (CakePHP), CSS (Bootstrap), MariaDB',
        'Despliegue en AWS para alta disponibilidad y seguridad',
      ],
      en: [
        'Technologies: PHP (CakePHP), CSS (Bootstrap), MariaDB',
        'AWS cloud deployment for high availability and encrypted storage',
      ],
    },
  },
  {
    id: 'hr-system',
    name: 'H&R System',
    category: 'commercial_client',
    confidentiality: 'private_enterprise',
    experienceId: 'preconcretos-hr',
    technologies: ['PHP (CakePHP)', 'MariaDB', 'Bootstrap', 'JavaScript'],
    url: '',
    targetProfiles: [],
    description: {
      es: 'Aplicación web para el control del personal (ingresos, afiliaciones, documentación).',
      en: 'Human resources management platform for employee records, affiliations, and documentation.',
    },
    highlights: {
      es: [
        'Tecnologías: PHP (CakePHP), HTML, CSS (Bootstrap), JavaScript, MariaDB',
        'Sistema de gestión de recursos humanos para control de personal y documentación',
      ],
      en: [
        'Technologies: PHP (CakePHP), HTML, CSS (Bootstrap), JavaScript, MariaDB',
        'HR system for employee personnel records and documentation workflows',
      ],
    },
  },
  {
    id: 'metaretos',
    name: 'Metaretos',
    category: 'commercial_client',
    confidentiality: 'private_enterprise',
    experienceId: 'dtl360-metaretos',
    technologies: ['Java (Spring Boot Microservicios)', 'RabbitMQ', 'PostgreSQL (JPA)', 'Docker', 'AWS'],
    url: '',
    targetProfiles: ['backend', 'distributed-systems'],
    description: {
      es: 'Backend para aplicación móvil de retos.',
      en: 'Scalable microservices backend for mobile gamification and challenges application.',
    },
    highlights: {
      es: [
        'Tecnologías: Java (Spring Boot Microservices), PostgreSQL (JPA), Docker, RabbitMQ',
        'Implementación de arquitectura de microservicios escalable',
      ],
      en: [
        'Technologies: Java (Spring Boot Microservices), PostgreSQL (JPA), Docker, RabbitMQ',
        'Implementation of scalable, decoupled microservices architecture',
      ],
    },
  },
  {
    id: 'cens-catalogo-2020',
    name: 'Catálogo de Servicios (2020)',
    category: 'commercial_client',
    confidentiality: 'private_enterprise',
    experienceId: 'cens-catalog-2020',
    technologies: ['C# (.NET, Razor Pages)', 'SQL Server (Entity Framework Core)'],
    url: '',
    targetProfiles: ['dotnet-fullstack'],
    description: {
      es: 'Aplicativo para mostrar en la intranet los productos y servicios que ofrece cada dependencia de la empresa, y sus respectivos gestores.',
      en: 'Corporate intranet catalog showcasing services and internal products offered by company departments.',
    },
    highlights: {
      es: [
        'Tecnologías: C# (.NET, Razor Pages), SQL Server (Entity Framework Core)',
        'Creación de catálogo interno para optimización de servicios empresariales',
      ],
      en: [
        'Technologies: C# (.NET, Razor Pages), SQL Server (Entity Framework Core)',
        'Creation of internal catalog to optimize corporate service discovery',
      ],
    },
  },
  {
    id: 'beer-fresh',
    name: 'Beer Fresh',
    category: 'commercial_client',
    confidentiality: 'private_enterprise',
    experienceId: 'beers-and-more',
    technologies: ['JavaScript (Node.js, Angular, Sequelize)', 'MariaDB', 'Bootstrap'],
    url: '',
    targetProfiles: [],
    description: {
      es: 'Aplicación web para la administración de la preparación de cerveza e inventario de insumos.',
      en: 'Brewery operations management software for inventory tracking and fermentation vessel monitoring.',
    },
    highlights: {
      es: [
        'Tecnologías: JavaScript (Node.js, Angular, Sequelize), HTML, CSS (Bootstrap), MariaDB',
        'Aplicación web para administrar insumos y almacenamiento de barriles en fermento',
      ],
      en: [
        'Technologies: JavaScript (Node.js, Angular, Sequelize), HTML, CSS (Bootstrap), MariaDB',
        'Brewery management application for raw ingredients and fermentation barrels',
      ],
    },
  },
  {
    id: 'kinansu',
    name: 'Kinansu',
    category: 'commercial_client',
    confidentiality: 'private_enterprise',
    experienceId: 'globocar',
    technologies: ['PHP (CakePHP)', 'Dart (Flutter)', 'Semantic UI', 'jQuery', 'AWS'],
    url: '',
    targetProfiles: [],
    description: {
      es: 'Aplicación web para el seguimiento y programación de mantenimientos correctivos y preventivos de vehículos.',
      en: 'Web platform for tracking and scheduling preventive and corrective vehicle fleet maintenance.',
    },
    highlights: {
      es: [
        'Tecnologías: PHP (CakePHP), HTML, CSS (Semantic UI), JavaScript (jQuery), Dart (Flutter)',
        'Plataforma de gestión de mantenimiento vehicular con integración móvil',
      ],
      en: [
        'Technologies: PHP (CakePHP), HTML, CSS (Semantic UI), JavaScript (jQuery), Dart (Flutter)',
        'Fleet maintenance platform with integrated mobile inspection tools',
      ],
    },
  },
];
