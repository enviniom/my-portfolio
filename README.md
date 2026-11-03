# Portfolio CV - Jhon Colmenares

Este repositorio es mi CV web profesional. El objetivo es mostrar experiencia, proyectos y habilidades de forma clara para procesos de seleccion tecnica.

## Demo

- Produccion (GitHub Pages): https://enviniom.github.io/my-portfolio/
- Idiomas disponibles:
	- Espanol: https://enviniom.github.io/my-portfolio/es/
	- Ingles: https://enviniom.github.io/my-portfolio/

## Proposito

- Centralizar mi perfil profesional en un sitio publico y mantenible.
- Mostrar experiencia, educacion, proyectos y stack tecnico en formato CV.
- Tener una base reutilizable para futuras postulaciones.

## Stack Tecnologico

- Astro 7.4.4
- TypeScript 6.0.3
- Arquitectura modular por dominios en TypeScript (`src/content/`)
- Generación automatizada de 6 versiones PDF ATS (Letter)
- Deploy automatico en GitHub Pages con GitHub Actions

## Estructura Relevante

- `src/content/`: Fuente única de datos profesionales organizada por dominios con tipado estricto y bilingüe (`{ es, en }`):
  - `profile.ts`: Datos personales, contacto y redes.
  - `experience.ts`: Trayectoria laboral y compromisos de ingeniería.
  - `projects.ts`: Proyectos destacados y arquitectura.
  - `education.ts`: Formación académica.
  - `skills.ts`: Habilidades técnicas y categorías.
  - `certifications.ts`: Certificaciones oficiales (idiomas, cloud, técnicas).
- `src/components/sections/`: Secciones visuales del portafolio.
- `src/components/resume/`: Componente de renderizado de CV ATS imprimible en 2 páginas.
- `src/pages/index.astro`: Portafolio web principal (inglés).
- `src/pages/es/index.astro`: Portafolio web en español.
- `src/pages/resume/[lang]/[profile].astro`: Páginas web dedicadas para los 3 perfiles ATS en ambos idiomas.
- `scripts/generate-resumes.mjs`: Generador y validador de los 6 PDFs ATS en formato Letter.
- `.github/workflows/deploy.yml`: Pipeline de deploy.

## Requisitos Locales

- Node.js 22.22.0
- pnpm 11.0.9
- **Generación y Validación de PDFs**:
  - Binario de Chromium: Google Chrome / Chromium del sistema, o `npx playwright install chromium`. En GitHub Actions (`ubuntu-latest`), `/usr/bin/google-chrome` se encuentra preinstalado.
  - Herramientas de validación de PDF (`poppler-utils`): `pdfinfo` y `pdftotext`. En Debian/Ubuntu: `sudo apt install poppler-utils`. En GitHub Actions (`ubuntu-latest`), se encuentran preinstaladas.

## Ejecutar En Local

```bash
corepack enable
corepack prepare pnpm@11.0.9 --activate
pnpm install
pnpm dev
```

Abrir en navegador: http://localhost:4321

## Scripts

- `pnpm dev`: desarrollo local.
- `pnpm start`: alias de desarrollo local.
- `pnpm build`: chequeo + build de produccion.
- `pnpm preview`: preview local del build.

## Como Personalizar Tu CV

1. Actualiza tus datos en los módulos de dominio dentro de `src/content/` (`profile.ts`, `experience.ts`, etc.).
2. Ejecuta `pnpm validate` o `pnpm build` para validar integridad y regenerar los PDFs.

## Deploy

Cada push a la rama `master` dispara deploy a GitHub Pages usando el workflow en `.github/workflows/deploy.yml`.

## Contacto

Si llegaste a este repositorio por una postulacion, gracias por revisar mi perfil.

