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
      es: 'Aplicación WEB para la gestión y control del flujo de contratación empresarial y compras, con énfasis en tareas y fechas críticas.',
      en: 'Enterprise web application for corporate contract lifecycle management and procurement workflows, focusing on critical milestones and task governance.',
    },
    responsibilities: {
      es: [
        'Diseñar la arquitectura en capas con ASP.NET Core Web API y Angular 21, integrando autenticación empresarial con SSO / Active Directory',
        'Modelar y optimizar la persistencia en PostgreSQL mediante Entity Framework Core y consultas de alto rendimiento con Dapper',
        'Construir flujos de gestión contractual y compras con control de tareas, trazabilidad de fechas críticas y despliegue en servidor Linux',
        'Liderar el desarrollo del backend según lo requerido',
        'Liderar el desarrollo de la aplicación frontend',
        'Realizar migraciones a la base de datos',
        'Despliegue de la aplicación en la internet en los ambientes de pruebas y producción en servidor Linux',
      ],
      en: [
        'Architected layered enterprise web application with ASP.NET Core Web API and Angular 21, integrating Active Directory SSO authentication',
        'Designed and optimized PostgreSQL schemas using Entity Framework Core and high-performance Dapper queries',
        'Built contract lifecycle management and procurement workflows with milestone tracking, task governance, and deployment to Linux servers',
        'Led backend development as required',
        'Led frontend application development',
        'Performed database migrations',
        'Deployed the application in test and production environments on Linux server',
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
        items: ['Git Workflows'],
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
        'Desarrollar servicios backend en Go (Gin) y Node.js para la captura, cualificación y enrutamiento de leads con agentes IA',
        'Diseñar e implementar interfaces interactivas y reactivas con Svelte 5, TailwindCSS y DaisyUI',
        'Modelar esquemas relacionales en PostgreSQL y estandarizar entornos de desarrollo reproducibles con Docker (ddev)',
        'Liderar el desarrollo del backend según lo requerido',
        'Liderar el desarrollo de la aplicación frontend',
        'Definir las mejores opciones de proveedores IA',
        'Realizar migraciones a la base de datos',
        'Despliegue de la aplicación en la internet en los ambientes de pruebas y producción en servidor Linux',
      ],
      en: [
        'Developed high-throughput Go (Gin) backend and Node.js services for AI-driven lead qualification and CRM routing',
        'Built responsive user interfaces using Svelte 5, TailwindCSS, and DaisyUI',
        'Modeled PostgreSQL database schemas and standardized containerized developer environments with Docker (ddev)',
        'Led backend development as required',
        'Led frontend application development',
        'Evaluated and selected optimal AI providers and LLM integrations',
        'Performed database migrations',
        'Deployed the application in test and production environments on Linux server',
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
        'Desarrollar el portal público y panel administrativo con Angular 18 y Angular Material, con enfoque responsive y accesible',
        'Integrar consumo de servicios REST con validación estricta de formularios y seguridad mediante ReCaptcha',
        'Coordinar despliegues continuos en ambientes de pruebas y colaborar en la definición funcional de la plataforma',
        'Implementar el diseño de marca',
        'Aportar ideas para la mejora del proyecto',
        'Despliegue en entorno de pruebas',
        'Diseño responsive',
      ],
      en: [
        'Built public portal and administrative dashboard using Angular 18 and Angular Material with responsive, accessible UX',
        'Integrated REST API communication with robust form validation and ReCaptcha security',
        'Managed deployments in staging environments and collaborated on functional platform requirements',
        'Implemented corporate brand design',
        'Contributed engineering ideas for continuous system improvement',
        'Deployed into test environments',
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
        'Desarrollar cliente de escritorio en planta con Go (Wails) y Svelte 5 para el registro de producción y tiempos de maquinaria en tiempo real',
        'Construir APIs REST en PHP (CakePHP 5) para trazabilidad de consumos de materia prima y servicios de impresión de etiquetas',
        'Normalizar esquemas en MySQL e implementar despliegues en servidores Linux en la intranet corporativa mediante Docker',
        'Liderar el desarrollo del backend según lo requerido',
        'Liderar el desarrollo de la aplicación frontend',
        'Desarrollo de aplicación de escritorio que registra producción',
        'API Rest para servicio de impresión de etiquetas',
        'Realizar migraciones a la base de datos',
        'Despliegue de la aplicación en la intranet en los ambientes de pruebas y producción en servidor Linux',
      ],
      en: [
        'Developed shop-floor desktop client using Go (Wails) and Svelte 5 for real-time production logging and machinery monitoring',
        'Built robust REST APIs with CakePHP 5 for raw material traceability and industrial label printing services',
        'Designed normalized MySQL database schemas and managed production intranet Linux deployments via Docker',
        'Led backend development as required',
        'Led frontend application development',
        'Developed desktop application for real-time shop-floor production recording',
        'Built REST API service for high-volume barcode/label printing',
        'Performed database migrations',
        'Deployed the solution on internal enterprise network and production Linux servers',
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
        'Modernizar la plataforma empresarial migrando el backend a .NET 9 (ASP.NET Web API) y la interfaz a Angular 19',
        'Optimizar el modelo de datos y consultas en SQL Server mediante Entity Framework Core, asegurando integridad transaccional',
        'Configurar y desplegar la solución en servidores Windows Server / IIS bajo políticas estrictas de seguridad corporativa',
        'Despliegue de la aplicación en la intranet en los ambientes de pruebas y producción en servidor Windows',
        'Realizar migraciones a la base de datos',
      ],
      en: [
        'Modernized enterprise platform by upgrading backend to .NET 9 (ASP.NET Web API) and frontend to Angular 19',
        'Optimized data models and queries in SQL Server using Entity Framework Core, ensuring strict transactional integrity',
        'Configured and deployed application on Windows Server / IIS enterprise infrastructure meeting corporate security policies',
        'Deployed to test and production environments on Windows Server / IIS',
        'Executed relational database migrations',
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
        'Desarrollar y optimizar endpoints para transmisión de video bajo demanda, migrando módulos heredados de CakePHP a Laravel',
        'Mantener y afinar funciones serverless en AWS Lambda y almacenamiento en Amazon S3 para procesamiento multimedia',
        'Ejecutar migraciones en MySQL, optimizar consultas críticas y depurar cuellos de botella en la plataforma administrativa',
        'Actualización de la documentación interna',
        'Mantenimiento del panel administrativo',
        'Migrar funcionalidades de CakePHP a Laravel',
      ],
      en: [
        'Developed and optimized API endpoints for video streaming and media ingestion, migrating legacy CakePHP modules to Laravel',
        'Maintained and refined AWS Lambda serverless functions and Amazon S3 workflows for media delivery',
        'Executed MySQL schema migrations, optimized slow queries, and maintained the administrative portal',
        'Updated internal engineering documentation',
        'Maintained administrative management portal',
        'Migrated legacy CakePHP modules to Laravel',
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
        'Developed backend features',
        'Debugged codebase errors',
        'Executed database migrations',
        'Tuned serverless Lambda functions',
        'Updated internal documentation',
        'Maintained administrative portal',
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
        'Refactorizar la arquitectura empresarial hacia servicios REST desacoplados en .NET 7 (C#) y cliente web en Angular 17',
        'Normalizar y migrar esquemas relacionales en SQL Server utilizando Entity Framework Core',
        'Gestionar despliegues en servidores Windows Server / IIS dentro de la intranet corporativa',
        'Liderar el desarrollo de la aplicación backend y frontend según lo requerido',
        'Despliegue de la aplicación en la intranet en los ambientes de pruebas y producción en servidor Windows',
        'Realizar migraciones a la base de datos',
      ],
      en: [
        'Refactored enterprise architecture toward decoupled REST services in .NET 7 (C#) and modern Angular 17 frontend',
        'Normalized and migrated relational schemas in SQL Server using Entity Framework Core',
        'Managed application deployments on corporate intranet Windows Server / IIS environments',
        'Led backend and frontend application engineering',
        'Deployed application to enterprise intranet and production Windows servers',
        'Performed database migrations',
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
        'Desarrollar API REST de alto rendimiento en Go (Gin) para sincronización de datos con software contable externo (FireBird)',
        'Construir plataforma web de gestión de producción y control de horas de personal con Angular 15, CakePHP y MariaDB',
        'Diseñar esquemas relacionales y desplegar en servidores Linux bajo red interna de planta industrial',
        'Liderar el desarrollo del backend según lo requerido',
        'Liderar el desarrollo de la aplicación frontend',
        'Desarrollo de API Rest en Go para comunicación con el programa contable',
        'Realizar migraciones a la base de datos',
        'Despliegue de la aplicación en la intranet en los ambientes de pruebas y producción en servidor Linux',
      ],
      en: [
        'Developed high-performance Go (Gin) REST API for bidirectional accounting system synchronization with FireBird database',
        'Built production tracking and time-logging web platform with Angular 15, CakePHP, and MariaDB',
        'Designed relational database schemas and deployed on internal plant Linux servers',
        'Led backend development',
        'Led frontend development',
        'Developed high-performance Go REST API for real-time accounting software integration',
        'Performed database migrations',
        'Deployed application on intranet test and production Linux servers',
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
        'Implementar microservicios REST con Java y Spring Boot para la lógica de gamificación y usuarios de la app móvil',
        'Integrar mensajería asíncrona con RabbitMQ para desacoplamiento de eventos y comunicación inter-servicio',
        'Contenerizar servicios con Docker y gestionar despliegues en entornos de pruebas sobre AWS',
        'Soporte al equipo frontend (Flutter y Angular)',
        'Realizar migraciones a la base de datos',
        'Despliegue de la aplicación en la intranet en los ambientes de pruebas en AWS',
      ],
      en: [
        'Implemented REST microservices with Java and Spring Boot powering mobile gamification and challenge workflows',
        'Integrated asynchronous event-driven messaging with RabbitMQ for reliable inter-service communication',
        'Containerized services with Docker and managed staging deployments on AWS cloud infrastructure',
        'Supported mobile and web frontend teams (Flutter and Angular)',
        'Performed database migrations',
        'Deployed application on AWS staging and test environments',
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
        'Defined application architecture',
        'Selected technology stack',
        'Designed and normalized database schema',
        'Performed database migrations',
        'Delivered full-stack development of required features',
        'Deployed platform to AWS infrastructure',
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
        'Defined application architecture',
        'Selected technology stack',
        'Designed and normalized database schema',
        'Led application development',
        'Performed database migrations',
        'Deployed application on intranet test and production Linux servers',
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
        'Designed and normalized relational database schema',
        'Developed application according to specifications',
        'Deployed application on intranet test and production Windows servers',
        'Performed database migrations',
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
        'Designed and normalized relational database schema',
        'Developed application according to specifications',
        'Deployed application on on-premises local server',
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
        'Defined application architecture',
        'Selected technology stack',
        'Designed and normalized database schema',
        'Performed database migrations',
        'Led application development',
        'Deployed application on AWS infrastructure',
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
