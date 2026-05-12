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

- Astro 6.3.1
- TypeScript 6.0.3
- JSON como fuente de contenido del CV
- Deploy automatico en GitHub Pages con GitHub Actions

## Estructura Relevante

- `src/cv_es.json`: contenido del CV en espanol.
- `src/cv_en.json`: contenido del CV en ingles.
- `src/components/sections/`: secciones visuales del CV.
- `src/pages/index.astro`: pagina principal (ingles).
- `src/pages/es/index.astro`: pagina en espanol.
- `.github/workflows/deploy.yml`: pipeline de deploy.

## Requisitos Locales

- Node.js 22.22.0
- pnpm 11.0.9

El proyecto fija versiones para evitar diferencias entre entorno local y CI/CD.

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

1. Actualiza datos personales, experiencia y proyectos en `src/cv_es.json` y `src/cv_en.json`.
2. Ajusta secciones visuales en `src/components/sections/` si queres cambiar el layout.
3. Ejecuta `pnpm build` para validar antes de publicar.

## Deploy

Cada push a la rama `master` dispara deploy a GitHub Pages usando el workflow en `.github/workflows/deploy.yml`.

## Contacto

Si llegaste a este repositorio por una postulacion, gracias por revisar mi perfil.

