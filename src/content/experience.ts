import type { ExperienceItem } from './types';

export const experiences: ExperienceItem[] = [
  {
    id: 'miia',
    organization: 'MIIA',
    startDate: '2026-05',
    endDate: null,
    isCurrent: true,
    url: 'https://enviniom.github.io/my-portfolio/',
    isEngineering: true,
    targetProfiles: ['backend', 'distributed-systems'],
    role: {
      es: 'Desarrollador Backend Senior Java',
      en: 'Senior Java Backend Developer',
    },
    summary: {
      es: 'Plataforma de rastreo satelital para mascotas con recepción, procesamiento y auditoría de telemetría GPS en tiempo real.',
      en: 'Real-time pet GPS tracking platform with high-throughput frame ingestion, processing, geospatial geofencing, and auditability.',
    },
    responsibilities: {
      es: [
        'Diseñar e implementar servidores de red de alta concurrencia con Netty (TCP/UDP) para recepción y decodificación de tramas binarias y HTTP',
        'Integrar y decodificar protocolos de múltiples dispositivos GPS (Concox JVL03, Jimi IoT AL600, Eview y OsmAnd)',
        'Desarrollar el motor geoespacial de geocercas para detección en tiempo real de eventos de entrada y salida',
        'Construir el pipeline de auditoría de tramas y telemetría canónica con persistencia atómica y diagnóstico de payloads crudos',
        'Diseñar la arquitectura multi-tenant y sistema de partners con aislamiento estricto de roles y usuarios',
        'Implementar la integración bidireccional con el backend y app móvil de household para despacho de comandos remotos y sincronización en tiempo real',
      ],
      en: [
        'Design and implement high-concurrency network servers with Netty (TCP/UDP) for binary frame reception and protocol decoding',
        'Integrate and decode telemetry protocols from multi-vendor GPS devices (Concox JVL03, Jimi IoT AL600, Eview, and OsmAnd)',
        'Build real-time geospatial geofencing engine for instant entry/exit event detection and alert dispatching',
        'Develop canonical telemetry and raw frame audit pipelines with atomic persistence and binary-safe diagnostics',
        'Architect multi-tenant partner isolation model with strict role and account security boundaries',
        'Implement bidirectional integration with mobile client and household backend for remote command dispatch and WebSocket streaming',
      ],
    },
    highlights: {
      es: [
        'Diseño de pasarelas de red concurrentes con decodificación resiliente de protocolos binarios de múltiples fabricantes GPS',
        'Motor de geocercas y pipeline de auditoría de tramas de alta fidelidad respaldado por más de 1000 pruebas automatizadas',
        'Integración de despacho de comandos y sincronización en tiempo real para aplicaciones móviles',
      ],
      en: [
        'High-throughput resilient protocol decoding pipeline for multi-brand binary GPS streams',
        'Real-time geofencing engine and high-fidelity frame audit suite backed by 1000+ automated tests',
        'Bidirectional remote device command dispatch and live state streaming for mobile applications',
      ],
    },
    technologies: [
      {
        category: 'Backend',
        items: ['Java 25', 'Spring Boot 3.5', 'Netty (TCP/UDP)', 'WebSockets', 'JWT'],
      },
      {
        category: 'Database',
        items: ['PostgreSQL', 'Flyway'],
      },
      {
        category: 'DevOps & Testing',
        items: ['Docker', 'Testcontainers'],
      },
    ],
    projectIds: ['miia-receptor-gps'],
  },
  {
    id: 'cens-sicont',
    organization: 'CENS Grupo EPM',
    clientGrouping: 'cens-grupo-epm',
    startDate: '2026-03',
    endDate: '2026-05',
    isCurrent: false,
    url: 'https://www.cens.com.co',
    isEngineering: true,
    targetProfiles: ['dotnet-fullstack'],
    role: {
      es: 'Desarrollador Fullstack',
      en: 'Fullstack Developer',
    },
    summary: {
      es: 'Aplicación WEB para controlar el flujo de los procesos de contratación, con énfasis en las fechas y tareas.',
      en: 'Web application to manage the flow of recruitment and contracting processes, with emphasis on dates and tasks.',
    },
    responsibilities: {
      es: [
        'Definir la arquitectura de la aplicación',
        'Seleccionar el stack tecnológico más adecuado',
        'Diseñar y normalizar la base de datos',
        'Liderar el desarrollo del backend según lo requerido',
        'Liderar el desarrollo de la aplicación frontend',
        'Realizar migraciones a la base de datos',
        'Despliegue de la aplicación en la internet en los ambientes de pruebas y producción en servidor Linux',
      ],
      en: [
        'Define application architecture',
        'Select the most suitable technology stack',
        'Design and normalize the database',
        'Lead backend development as required',
        'Lead frontend application development',
        'Perform database migrations',
        'Deploy the application in test and production environments on Linux server',
      ],
    },
    highlights: {
      es: [
        'Liderazgo en el inicio y despliegue del proyecto en producción',
        'Implementación de arquitectura y stack tecnológico desde cero',
        'Diseño backend con ASP.NET Web API y patrones de acceso a datos SQL',
      ],
      en: [
        'Leadership in project launch and production deployment',
        'Zero-to-one implementation of architecture and technology stack',
        'Backend design with ASP.NET Web API and SQL data access patterns',
      ],
    },
    technologies: [
      {
        category: 'Backend',
        items: ['C#', 'ASP.NET 10', 'Web API', 'MVC', 'IIS', 'SSO Active Directory'],
      },
      {
        category: 'Frontend',
        items: ['HTML', 'CSS (Tailwind)', 'JavaScript (Angular 21)'],
      },
      {
        category: 'Database',
        items: ['PostgreSQL (Entity Framework, Dapper)'],
      },
      {
        category: 'DevOps & Methodologies',
        items: ['Git Workflows', 'CI/CD'],
      },
    ],
    projectIds: ['sicont'],
  },
  {
    id: 'dreammakers',
    organization: 'DreamMakers',
    startDate: '2026-01',
    endDate: '2026-03',
    isCurrent: false,
    url: 'https://www.dreammakers.com.co',
    isEngineering: true,
    targetProfiles: ['backend', 'distributed-systems'],
    role: {
      es: 'Desarrollador Fullstack',
      en: 'Fullstack Developer',
    },
    summary: {
      es: 'Aplicación CRM para atención de potenciales clientes utilizando agentes IA.',
      en: 'CRM application for prospective client management utilizing AI agents.',
    },
    responsibilities: {
      es: [
        'Definir la arquitectura de la aplicación',
        'Seleccionar el stack tecnológico más adecuado',
        'Diseñar y normalizar la base de datos',
        'Liderar el desarrollo del backend según lo requerido',
        'Liderar el desarrollo de la aplicación frontend',
        'Definir las mejores opciones de proveedores IA',
        'Realizar migraciones a la base de datos',
        'Despliegue de la aplicación en la internet en los ambientes de pruebas y producción en servidor Linux',
      ],
      en: [
        'Define application architecture',
        'Select the most suitable technology stack',
        'Design and normalize the database',
        'Lead backend development as required',
        'Lead frontend application development',
        'Evaluate and select optimal AI providers and LLM integrations',
        'Perform database migrations',
        'Deploy the application in test and production environments on Linux server',
      ],
    },
    highlights: {
      es: [
        'Liderazgo en el inicio y despliegue del proyecto en producción',
        'Implementación de arquitectura y stack tecnológico desde cero',
      ],
      en: [
        'Leadership in project launch and production deployment',
        'Zero-to-one implementation of architecture and technology stack',
      ],
    },
    technologies: [
      {
        category: 'Backend',
        items: ['Go (Gin)', 'Node.js', 'AI Agents (Copilot, LLMs)'],
      },
      {
        category: 'Frontend',
        items: ['HTML', 'CSS (TailwindCSS, DaisyUI)', 'JavaScript (AlpineJS, Svelte 5)'],
      },
      {
        category: 'Database',
        items: ['PostgreSQL'],
      },
      {
        category: 'DevOps',
        items: ['Docker (ddev)'],
      },
    ],
    projectIds: ['neofluxai'],
  },
  {
    id: 'dtl360-sustitucion',
    organization: 'DTL 360',
    startDate: '2024-07',
    endDate: '2026-02',
    isCurrent: false,
    url: 'https://proveedores.direccionsustitucion.gov.co',
    isEngineering: true,
    targetProfiles: ['dotnet-fullstack'],
    role: {
      es: 'Desarrollador Frontend',
      en: 'Frontend Developer',
    },
    summary: {
      es: 'Solución Web que permite conectar campesinos con proveedores para la adquisición de productos que permitan la sustitución de cultivos ilícitos en zonas de conflicto.',
      en: 'Web platform connecting farmers with certified suppliers to acquire resources for crop substitution in conflict-affected regions.',
    },
    responsibilities: {
      es: [
        'Desarrollo del aplicativo Web',
        'Desarrollo del panel administrativo',
        'Consumir servicios del API Rest',
        'Implementar el diseño de marca',
        'Aportar ideas para la mejora del proyecto',
        'Despliegue en entorno de pruebas',
        'Diseño responsive',
      ],
      en: [
        'Web application development',
        'Administrative dashboard development',
        'Consume REST API services',
        'Implement corporate brand design',
        'Contribute engineering ideas for continuous system improvement',
        'Deploy into test environments',
        'Responsive layout and mobile optimization',
      ],
    },
    highlights: {
      es: [
        'Diseño e implementación de interfaz de usuario para un proyecto socialmente relevante',
        'Desarrollo de panel administrativo y consumo de APIs',
      ],
      en: [
        'Design and delivery of frontend interfaces for a high-impact public sector program',
        'Development of administrative portals and robust API consumption',
      ],
    },
    technologies: [
      {
        category: 'Frontend',
        items: ['HTML', 'CSS', 'JavaScript (Angular 18, Angular Material)'],
      },
      {
        category: 'Security & Integrations',
        items: ['ReCaptcha', 'REST APIs'],
      },
    ],
    projectIds: [],
  },
  {
    id: 'jemaproject',
    organization: 'Jemaproject S.A.S.',
    startDate: '2025-03',
    endDate: '2026-01',
    isCurrent: false,
    url: 'https://www.jemapack.com',
    isEngineering: true,
    targetProfiles: ['backend', 'distributed-systems'],
    role: {
      es: 'Desarrollador Fullstack',
      en: 'Fullstack Developer',
    },
    summary: {
      es: 'Solución web para el control y registro de producción, la trazabilidad de los consumos de materia prima y mantenimiento de la maquinaria.',
      en: 'Industrial production control, raw material consumption traceability, and machinery maintenance tracking software.',
    },
    responsibilities: {
      es: [
        'Definir la arquitectura de la aplicación',
        'Seleccionar el stack tecnológico más adecuado',
        'Diseñar y normalizar la base de datos',
        'Liderar el desarrollo del backend según lo requerido',
        'Liderar el desarrollo de la aplicación frontend',
        'Desarrollo de aplicación de escritorio que registra producción',
        'API Rest para servicio de impresión de etiquetas',
        'Realizar migraciones a la base de datos',
        'Despliegue de la aplicación en la intranet en los ambientes de pruebas y producción en servidor Linux',
      ],
      en: [
        'Define application architecture',
        'Select the most suitable technology stack',
        'Design and normalize the database',
        'Lead backend development as required',
        'Lead frontend application development',
        'Develop desktop application for real-time shop-floor production recording',
        'Build REST API service for high-volume barcode/label printing',
        'Perform database migrations',
        'Deploy the solution on internal enterprise network and production Linux servers',
      ],
    },
    highlights: {
      es: [
        'Liderazgo en el inicio y despliegue del proyecto en producción',
        'Implementación de arquitectura y stack tecnológico desde cero',
      ],
      en: [
        'Leadership in project launch and production deployment',
        'Zero-to-one implementation of architecture and technology stack',
      ],
    },
    technologies: [
      {
        category: 'Backend & Desktop',
        items: ['Go (Wails con Svelte 5)', 'PHP (CakePHP 5)', 'Node.js'],
      },
      {
        category: 'Frontend',
        items: ['HTML', 'CSS (TailwindCSS, DaisyUI)', 'JavaScript (AlpineJS, Svelte 5)'],
      },
      {
        category: 'Database',
        items: ['MySQL'],
      },
      {
        category: 'DevOps & Tools',
        items: ['Docker (ddev)', 'Trae AI', 'Windsurf'],
      },
    ],
    projectIds: ['jemapack'],
  },
  {
    id: 'cens-catalog-2025',
    organization: 'CENS Grupo EPM',
    clientGrouping: 'cens-grupo-epm',
    startDate: '2025-04',
    endDate: '2025-05',
    isCurrent: false,
    url: 'https://www.cens.com.co',
    isEngineering: true,
    targetProfiles: ['dotnet-fullstack'],
    role: {
      es: 'Desarrollador Fullstack',
      en: 'Fullstack Developer',
    },
    summary: {
      es: 'Actualización de aplicación intranet para control de servicios ofrecidos al cliente interno.',
      en: 'Intranet application update for internal service and product catalog management.',
    },
    responsibilities: {
      es: [
        'Actualización a nuevas versiones de la tecnología',
        'Desarrollo de nuevas funcionalidades',
        'Liderar el desarrollo de la aplicación backend y frontend según lo requerido',
        'Despliegue de la aplicación en la intranet en los ambientes de pruebas y producción en servidor Windows',
        'Realizar migraciones a la base de datos',
      ],
      en: [
        'Upgrade to modern framework versions',
        'Implement new enterprise business functionalities',
        'Lead backend and frontend application development as required',
        'Deploy to test and production environments on Windows Server / IIS',
        'Execute relational database migrations',
      ],
    },
    highlights: {
      es: [
        'Actualización exitosa de tecnologías y desarrollo de nuevas funcionalidades',
        'Despliegue en entornos de pruebas y producción en servidor Windows',
        'Mantenimiento y evolución de servicios REST integrados con SQL Server',
      ],
      en: [
        'Successful technology upgrades and delivery of new business capabilities',
        'Production deployment on Windows Server enterprise infrastructure',
        'Maintenance and evolution of REST services integrated with SQL Server',
      ],
    },
    technologies: [
      {
        category: 'Backend',
        items: ['C# (ASP.NET Web API, .NET 9)'],
      },
      {
        category: 'Frontend',
        items: ['HTML', 'CSS (Bootstrap)', 'JavaScript (Angular 19)'],
      },
      {
        category: 'Database',
        items: ['SQL Server (Entity Framework Core)'],
      },
      {
        category: 'DevOps',
        items: ['Git Workflows', 'Code Reviews'],
      },
    ],
    projectIds: ['cens-catalogo-2025'],
  },
  {
    id: 'arivo',
    organization: 'Arivo',
    startDate: '2024-06',
    endDate: '2025-02',
    isCurrent: false,
    url: 'https://www.ftwin360.com',
    isEngineering: true,
    targetProfiles: ['backend', 'distributed-systems'],
    role: {
      es: 'Desarrollador Backend',
      en: 'Backend Developer',
    },
    summary: {
      es: 'Aplicación (web y móvil) para reproducción de video bajo demanda dedicado a deportes universitarios.',
      en: 'On-demand video streaming platform for collegiate sports across web and mobile clients.',
    },
    responsibilities: {
      es: [
        'Desarrollo de nuevas funcionalidades',
        'Depuración de errores en el código',
        'Realizar migraciones a la base de datos',
        'Actualización de funciones Lambda AWS',
        'Actualización de la documentación interna',
        'Mantenimiento del panel administrativo',
        'Migrar funcionalidades de CakePHP a Laravel',
      ],
      en: [
        'Develop new streaming and video ingestion features',
        'Debug codebase errors and optimize performance',
        'Execute database migrations',
        'Maintain and optimize AWS Lambda serverless functions',
        'Update internal engineering documentation',
        'Maintain administrative management portal',
        'Migrate legacy CakePHP modules to Laravel',
      ],
    },
    highlights: {
      es: [
        'Participación clave en la migración y despliegue del proyecto',
        'Optimización de funcionalidades y mantenimiento de la plataforma',
      ],
      en: [
        'Key engineering contributions to platform migration and cloud deployments',
        'Feature optimization and continuous platform maintenance',
      ],
    },
    technologies: [
      {
        category: 'Backend',
        items: ['PHP (CakePHP, Laravel)'],
      },
      {
        category: 'Frontend',
        items: ['HTML', 'CSS (Bootstrap)', 'JavaScript (jQuery)'],
      },
      {
        category: 'Database',
        items: ['MySQL'],
      },
      {
        category: 'Cloud',
        items: ['AWS (Lambda, Amazon S3)'],
      },
    ],
    projectIds: ['ftw-360'],
  },
  {
    id: 'brinks',
    organization: 'Brinks',
    startDate: '2023-11',
    endDate: '2024-02',
    isCurrent: false,
    url: '',
    isEngineering: true,
    targetProfiles: ['backend'],
    role: {
      es: 'Desarrollador Backend',
      en: 'Backend Developer',
    },
    summary: {
      es: 'Aplicación web para streaming de contenido de video dedicado a deportes universitarios.',
      en: 'Web application for on-demand collegiate sports video streaming.',
    },
    responsibilities: {
      es: [
        'Desarrollo de nuevas funcionalidades',
        'Depuración de errores en el código',
        'Realizar migraciones a la base de datos',
        'Ajuste de funciones Lambda',
        'Actualización de la documentación interna',
        'Mantenimiento del panel administrativo',
      ],
      en: [
        'Develop backend features',
        'Debug codebase errors',
        'Execute database migrations',
        'Tune serverless Lambda functions',
        'Update internal documentation',
        'Maintain administrative portal',
      ],
    },
    highlights: {
      es: [
        'Desarrollo de funcionalidades backend para plataforma de streaming',
        'Mantenimiento y optimización de base de datos',
      ],
      en: [
        'Backend feature engineering for streaming platform',
        'Database optimization and maintenance',
      ],
    },
    technologies: [
      {
        category: 'Backend',
        items: ['PHP (CakePHP)'],
      },
      {
        category: 'Frontend',
        items: ['HTML', 'CSS (Bootstrap)', 'JavaScript (jQuery)'],
      },
      {
        category: 'Database',
        items: ['MySQL'],
      },
    ],
    projectIds: [],
  },
  {
    id: 'cens-catalog-2023',
    organization: 'CENS Grupo EPM',
    clientGrouping: 'cens-grupo-epm',
    startDate: '2023-07',
    endDate: '2023-10',
    isCurrent: false,
    url: 'https://www.cens.com.co',
    isEngineering: true,
    targetProfiles: ['dotnet-fullstack'],
    role: {
      es: 'Desarrollador Fullstack',
      en: 'Fullstack Developer',
    },
    summary: {
      es: 'Actualización de aplicación intranet para control de servicios ofrecidos al cliente interno.',
      en: 'Intranet modernization for internal service and product catalog management.',
    },
    responsibilities: {
      es: [
        'Definir la nueva arquitectura de la aplicación',
        'Definir las tecnologías a utilizar',
        'Definir y normalizar la base de datos',
        'Liderar el desarrollo de la aplicación backend y frontend según lo requerido',
        'Despliegue de la aplicación en la intranet en los ambientes de pruebas y producción en servidor Windows',
        'Realizar migraciones a la base de datos',
      ],
      en: [
        'Define new application architecture',
        'Select modern technology stack',
        'Design and normalize relational database schema',
        'Lead backend and frontend application engineering',
        'Deploy application to enterprise intranet and production Windows servers',
        'Perform database migrations',
      ],
    },
    highlights: {
      es: [
        'Liderazgo en la redefinición de arquitectura y tecnologías para la aplicación',
        'Gestión de migraciones y despliegues en entornos de producción',
      ],
      en: [
        'Technical leadership in architectural redesign and technology stack modernization',
        'Management of database migrations and production deployments',
      ],
    },
    technologies: [
      {
        category: 'Backend',
        items: ['C# (REST API ASP.NET, .NET 7)'],
      },
      {
        category: 'Frontend',
        items: ['HTML', 'CSS (Bootstrap)', 'JavaScript (Angular 17)'],
      },
      {
        category: 'Database',
        items: ['SQL Server (Entity Framework Core)'],
      },
    ],
    projectIds: ['cens-catalogo-2023'],
  },
  {
    id: 'preconcretos-sag3p',
    organization: 'Preconcretos',
    startDate: '2022-07',
    endDate: '2023-05',
    isCurrent: false,
    url: '',
    isEngineering: true,
    targetProfiles: ['backend', 'dotnet-fullstack'],
    role: {
      es: 'Ingeniero de Software',
      en: 'Software Engineer',
    },
    summary: {
      es: 'Solución web para el control y registro de producción, control de trabajadores, horas trabajadas, con integración al programa contable.',
      en: 'Web application for production management, personnel time-tracking, and accounting system integration.',
    },
    responsibilities: {
      es: [
        'Definir la arquitectura de la aplicación',
        'Definir las tecnologías a utilizar',
        'Definir y normalizar la base de datos',
        'Liderar el desarrollo del backend según lo requerido',
        'Liderar el desarrollo de la aplicación frontend',
        'Desarrollo de API Rest en Go para comunicación con el programa contable',
        'Realizar migraciones a la base de datos',
        'Despliegue de la aplicación en la intranet en los ambientes de pruebas y producción en servidor Linux',
      ],
      en: [
        'Define application architecture',
        'Select technology stack',
        'Design and normalize relational database schema',
        'Lead backend development',
        'Lead frontend development',
        'Develop high-performance Go REST API for real-time accounting software integration',
        'Perform database migrations',
        'Deploy application on intranet test and production Linux servers',
      ],
    },
    highlights: {
      es: [
        'Liderazgo en el ciclo completo de desarrollo de una solución de control de producción',
        'Integración exitosa con programa contable mediante API Rest en Go',
      ],
      en: [
        'Full lifecycle engineering leadership for industrial production management solution',
        'Successful integration with third-party enterprise accounting software via Go REST API',
      ],
    },
    technologies: [
      {
        category: 'Backend',
        items: ['Go (Gin)', 'PHP (REST API CakePHP, JWT)'],
      },
      {
        category: 'Frontend',
        items: ['HTML', 'CSS', 'JavaScript (Angular 15, Angular Material 15)'],
      },
      {
        category: 'Database',
        items: ['MariaDB', 'FireBird'],
      },
    ],
    projectIds: ['sag3p'],
  },
  {
    id: 'dtl360-metaretos',
    organization: 'DTL 360',
    startDate: '2022-03',
    endDate: '2022-10',
    isCurrent: false,
    url: 'https://dtl360.com/home',
    isEngineering: true,
    targetProfiles: ['backend', 'distributed-systems'],
    role: {
      es: 'Desarrollador Backend',
      en: 'Backend Developer',
    },
    summary: {
      es: 'Backend API Rest microservicios para aplicación móvil de retos.',
      en: 'Microservices REST API backend for mobile gamification and challenges platform.',
    },
    responsibilities: {
      es: [
        'Desarrollo del backend según la arquitectura definida, por microservicios',
        'Implementar RabbitMQ',
        'Implementar Docker',
        'Soporte al equipo frontend (Flutter y Angular)',
        'Realizar migraciones a la base de datos',
        'Despliegue de la aplicación en la intranet en los ambientes de pruebas en AWS',
      ],
      en: [
        'Develop backend services following microservices architecture',
        'Integrate RabbitMQ message broker for asynchronous events',
        'Containerize services with Docker',
        'Support mobile and web frontend teams (Flutter and Angular)',
        'Perform database migrations',
        'Deploy application on AWS staging and test environments',
      ],
    },
    highlights: {
      es: [
        'Implementación de arquitectura de microservicios con Spring Boot y Docker',
        'Integración con RabbitMQ y soporte a equipos frontend',
      ],
      en: [
        'Implementation of scalable microservices architecture with Spring Boot and Docker',
        'Event-driven integration with RabbitMQ and cross-team frontend support',
      ],
    },
    technologies: [
      {
        category: 'Backend',
        items: ['Java (Spring Boot Microservicios)', 'RabbitMQ'],
      },
      {
        category: 'Database',
        items: ['PostgreSQL (JPA)'],
      },
      {
        category: 'DevOps & Cloud',
        items: ['Docker', 'AWS'],
      },
    ],
    projectIds: ['metaretos'],
  },
  {
    id: 'casa-funerales-rincon',
    organization: 'Casa de Funerales Rincón',
    startDate: '2022-07',
    endDate: '2022-10',
    isCurrent: false,
    url: '',
    isEngineering: true,
    targetProfiles: [],
    role: {
      es: 'Desarrollador Web',
      en: 'Web Developer',
    },
    summary: {
      es: 'Software para custodia de video con último deseo.',
      en: 'Secure web platform for last-wish video custody and scheduled delivery.',
    },
    responsibilities: {
      es: [
        'Definir la arquitectura de la aplicación',
        'Definir las tecnologías a utilizar',
        'Definir y normalizar la base de datos',
        'Realizar migraciones a la base de datos',
        'Desarrollo de la aplicación según lo requerido',
        'Despliegue de la aplicación en AWS',
      ],
      en: [
        'Define application architecture',
        'Select technology stack',
        'Design and normalize database schema',
        'Perform database migrations',
        'Full-stack development of required features',
        'Deploy platform to AWS infrastructure',
      ],
    },
    highlights: {
      es: [
        'Desarrollo y despliegue en AWS de una aplicación innovadora de custodia de video',
        'Definición completa de la arquitectura y base de datos del proyecto',
      ],
      en: [
        'Development and AWS deployment of innovative secure video custody platform',
        'Complete architectural and database design',
      ],
    },
    technologies: [
      {
        category: 'Backend',
        items: ['PHP (CakePHP)'],
      },
      {
        category: 'Frontend',
        items: ['HTML', 'CSS (Bootstrap)', 'JavaScript'],
      },
      {
        category: 'Database',
        items: ['MariaDB'],
      },
      {
        category: 'Cloud',
        items: ['AWS'],
      },
    ],
    projectIds: ['custodia'],
  },
  {
    id: 'preconcretos-hr',
    organization: 'Preconcretos',
    startDate: '2021-04',
    endDate: '2022-07',
    isCurrent: false,
    url: '',
    isEngineering: true,
    targetProfiles: [],
    role: {
      es: 'Ingeniero de Software',
      en: 'Software Engineer',
    },
    summary: {
      es: 'Aplicación web para el control del personal (ingresos, afiliaciones, documentación).',
      en: 'Web platform for comprehensive human resources management, employee onboarding, affiliations, and documentation.',
    },
    responsibilities: {
      es: [
        'Definir la arquitectura de la aplicación',
        'Definir las tecnologías a utilizar',
        'Definir y normalizar la base de datos',
        'Liderar el desarrollo de la aplicación según lo requerido',
        'Realizar migraciones a la base de datos',
        'Despliegue de la aplicación en la intranet en los ambientes de pruebas y producción en servidor Linux',
      ],
      en: [
        'Define application architecture',
        'Select technology stack',
        'Design and normalize database schema',
        'Lead application development',
        'Perform database migrations',
        'Deploy application on intranet test and production Linux servers',
      ],
    },
    highlights: {
      es: [
        'Liderazgo en el desarrollo de una aplicación web para la gestión integral de personal',
        'Gestión de despliegues y migraciones de bases de datos',
      ],
      en: [
        'Full lifecycle leadership in delivering an end-to-end human resources management solution',
        'Database migration and enterprise deployment management',
      ],
    },
    technologies: [
      {
        category: 'Backend',
        items: ['PHP (CakePHP)'],
      },
      {
        category: 'Frontend',
        items: ['HTML', 'CSS (Bootstrap)', 'JavaScript'],
      },
      {
        category: 'Database',
        items: ['MariaDB'],
      },
    ],
    projectIds: ['hr-system'],
  },
  {
    id: 'cens-catalog-2020',
    organization: 'CENS Grupo EPM',
    clientGrouping: 'cens-grupo-epm',
    startDate: '2020-11',
    endDate: '2021-03',
    isCurrent: false,
    url: 'https://www.cens.com.co',
    isEngineering: true,
    targetProfiles: ['dotnet-fullstack'],
    role: {
      es: 'Ingeniero de Proyecto',
      en: 'Project Engineer',
    },
    summary: {
      es: 'Aplicativo para mostrar en la intranet los productos y servicios que ofrece cada dependencia de la empresa, y sus respectivos gestores.',
      en: 'Enterprise intranet catalog displaying corporate services, internal products, and department managers.',
    },
    responsibilities: {
      es: [
        'Definir y normalizar la base de datos',
        'Desarrollo de la aplicación según lo requerido',
        'Despliegue de la aplicación en la intranet en los ambientes de pruebas y producción en servidor Windows',
        'Realizar migraciones a la base de datos',
      ],
      en: [
        'Design and normalize relational database schema',
        'Develop application according to specifications',
        'Deploy application on intranet test and production Windows servers',
        'Perform database migrations',
      ],
    },
    highlights: {
      es: [
        'Desarrollo y despliegue de aplicativo intranet para visualización de servicios',
        'Gestión de base de datos y migraciones',
      ],
      en: [
        'Development and deployment of enterprise intranet portal for service discovery',
        'Database management and data schema migrations',
      ],
    },
    technologies: [
      {
        category: 'Backend',
        items: ['C# (.NET, Razor Pages)'],
      },
      {
        category: 'Database',
        items: ['SQL Server (Entity Framework Core)'],
      },
    ],
    projectIds: ['cens-catalogo-2020'],
  },
  {
    id: 'beers-and-more',
    organization: 'Beers And More',
    startDate: '2020-08',
    endDate: '2020-10',
    isCurrent: false,
    url: '',
    isEngineering: true,
    targetProfiles: [],
    role: {
      es: 'Ingeniero de Proyecto',
      en: 'Project Engineer',
    },
    summary: {
      es: 'Aplicación web para control de barriles de cerveza en fermento e inventario de insumos.',
      en: 'Web application for brewery raw material inventory and fermentation barrel tracking.',
    },
    responsibilities: {
      es: [
        'Definir y normalizar la base de datos',
        'Desarrollo de la aplicación según lo requerido',
        'Despliegue de la aplicación en servidor en sitio',
      ],
      en: [
        'Design and normalize relational database schema',
        'Develop application according to specifications',
        'Deploy application on on-premises local server',
      ],
    },
    highlights: {
      es: [
        'Desarrollo y despliegue de aplicativo en servidor local del negocio',
        'Gestión de base de datos y migraciones',
      ],
      en: [
        'Development and deployment of operational tracking software on on-premises hardware',
        'Database design and migration management',
      ],
    },
    technologies: [
      {
        category: 'Backend',
        items: ['JavaScript (Node.js)'],
      },
      {
        category: 'Frontend',
        items: ['CSS (Bootstrap)', 'JavaScript (Angular)'],
      },
      {
        category: 'Database',
        items: ['MariaDB (Sequelize)'],
      },
    ],
    projectIds: ['beer-fresh'],
  },
  {
    id: 'globocar',
    organization: 'Globocar',
    startDate: '2018-08',
    endDate: '2020-07',
    isCurrent: false,
    url: '',
    isEngineering: true,
    targetProfiles: [],
    role: {
      es: 'Ingeniero de Proyecto',
      en: 'Project Engineer',
    },
    summary: {
      es: 'Aplicación web para el seguimiento y programación de mantenimientos correctivos y preventivos de vehículos.',
      en: 'Web platform for scheduling and tracking preventive and corrective vehicle fleet maintenance.',
    },
    responsibilities: {
      es: [
        'Definir la arquitectura de la aplicación',
        'Definir las tecnologías a utilizar',
        'Definir y normalizar la base de datos',
        'Realizar migraciones a la base de datos',
        'Liderar el desarrollo de la aplicación según lo requerido',
        'Despliegue de la aplicación en AWS',
      ],
      en: [
        'Define application architecture',
        'Select technology stack',
        'Design and normalize database schema',
        'Perform database migrations',
        'Lead application development',
        'Deploy application on AWS infrastructure',
      ],
    },
    highlights: {
      es: [
        'Liderazgo en el desarrollo de una solución web para gestión de mantenimiento vehicular',
        'Definición de arquitectura tecnológica y despliegue en AWS',
      ],
      en: [
        'Engineering leadership in delivering fleet maintenance management software',
        'Technology architecture definition and AWS deployment',
      ],
    },
    technologies: [
      {
        category: 'Backend',
        items: ['PHP (CakePHP)'],
      },
      {
        category: 'Frontend & Mobile',
        items: ['Dart (Flutter)', 'HTML', 'CSS (Semantic UI)', 'JavaScript (jQuery)'],
      },
      {
        category: 'Cloud',
        items: ['AWS'],
      },
    ],
    projectIds: ['kinansu'],
  },
];
