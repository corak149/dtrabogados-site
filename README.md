# dtrabogados-site

Sitio público **DTR Abogados** (Panamá) — Astro estático + Cloudflare Pages.

## Estado — Sprint 0 (06.08.26)

Rama `feat/claude-web-v3-scaffolding` (PR pendiente) trae el **scaffolding V3**:

- Layout base con OG completo, schema.org (LegalService), skip link accesibilidad.
- Design tokens con paleta refinada del logo oficial DTR (navy + dorado + papiro).
- Componentes: `Header`, `MegaMenu` (CSS hover, decisión V3 #3), `Footer` con disclaimer integrado (decisión V3 #5), `AreaCard`, `GoogleReviewsBadge`, `WhatsAppFloat`, `Logo`.
- Data source único (`src/data/areas.ts`) con las 10 áreas y ~50 procesos → alimenta mega-menú, home, hubs por área.
- Rutas dinámicas Astro (`getStaticPaths`) para generar ~90 páginas estáticas:
  - `/` — home minimalista de 5 bloques
  - `/areas-de-practica/`
  - `/[area]/` (10 hubs generados)
  - `/[area]/[grupo]/` (~30 grupos generados)
  - `/[area]/[grupo]/[proceso]/` (~50 páginas de proceso con estructura común)
  - `/honorarios`, `/quienes-somos`, `/contacto`, `/blog`, `/privacidad`

## TODOs conocidos (bloqueos externos)

| # | Bloqueo | Owner |
|---|---|---|
| 1 | Copy V3 real (900-DANNA `web-dtrabogados-v2/00-WEB-DTR-V3-iterativa.md`) sigue sin commit | Danna |
| 2 | Número WhatsApp Business real (hoy placeholder `50700000000`) | Yeltzin + Ana |
| 3 | Logo SVG oficial exportado del .ai (hoy placeholder generado) | Yeltzin |
| 4 | Google Business Profile para reviews | Greg |
| 5 | Redacción CNA 609-A (variante A/B/C) para `/honorarios` | Yeltzin |

## 10 decisiones V3 ya tomadas (NO reabrir)

Ver `900-Inbox/900-GREG/01-Pendientes/2026-08-03-HANDOFF-WEB-DTR-implementacion-V3.md`. Corta:

1. Deploy en Cloudflare Pages (revisión 05.08.26)
2. Sin casos de éxito en home
3. Mega-menú CSS hover
4. Landing 5 bloques, no 8
5. Disclaimer integrado al footer
6. Solo español PA
7. Google Reviews link en hero + widget flotante
8. Filtro papiro tenue en headers
9. Blog con CMS simple
10. Cada proceso = URL propia con requisitos separados por rol

## Stack

- Astro 4.16.18 estático (`output: 'static'`, sin adapter)
- Deploy Cloudflare Pages (build: `npm run build`, output: `dist/`)
- Tipografías: Cormorant Garamond + Source Sans 3 (Google Fonts)
- Cero JS framework — HTML/CSS/pocos scripts vanilla

## Local dev

```bash
npm install
npm run dev        # localhost:4321
npm run build      # dist/
```

## Variables de entorno

Ver `.env.example`. Copiar a `.env.local`:

```bash
PUBLIC_WHATSAPP=50700000000
PUBLIC_TALLY_URL=https://tally.so/r/dtr-consulta-inicial
PUBLIC_GOOGLE_REVIEWS_URL=
```

## Contribución

**Regla:** NO commitear a `main`. Todo cambio pasa por PR desde `feat/<slug>`.
Yeltzin revisa y mergea manualmente.
