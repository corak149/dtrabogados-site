import { defineCollection, z } from "astro:content";

/**
 * Colección de procesos legales — contenido rico por proceso.
 *
 * Path del archivo mapea a la ruta pública:
 *   src/content/procesos/{area}/{grupo}/{proceso}.md
 *     → /{area}/{grupo}/{proceso}/
 *
 * Sprint 1c (07.08.26) — schema extendido por Danna (CLO).
 * Es extensión compatible hacia atrás: el .md poblado por claude.ai en
 * PR #4 sigue siendo válido, solo le faltan 6 campos opcionales.
 *
 * Referencia: dtr-vault/900-Inbox/900-DANNA/02-En-Proceso/web-dtrabogados-v2/
 *             Sprint-1c-Danna/0001-schema-content-config-CLO.md
 */
const procesos = defineCollection({
  type: "content",
  schema: z.object({
    // === Identidad ===
    titulo: z.string(),
    descripcion: z.string(),                          // meta description (140-160 chars)
    resumen: z.string(),                              // bajada del hero (1-2 oraciones)

    // === Base legal (lo que Yeltzin pidió: nombre del decreto visible) ===
    base_legal: z.array(z.string()).default([]),      // lista completa, va al pie
    decreto_principal: z.string().optional(),         // string destacado, va al hero info strip
    categoria_migratoria: z.string().optional(),      // ej: "Visa de corta estancia"
    categoria_comercial: z.string().optional(),       // ej: "Constitución societaria" (Sprint 2 Comercial)

    // === Audiencia ===
    dirigido_a: z.array(z.string()).default([]),      // bullets del "es para vos si..."

    // === Requisitos (separados por rol, decisión V3 #10) ===
    requisitos_persona_natural: z.array(z.string()).default([]),
    requisitos_empresa: z.array(z.string()).default([]),

    // === Documentos (soporta HTML inline: <strong>, <em>, <code>) ===
    documentos: z.array(z.string()).default([]),

    // === Plazos ===
    plazos: z.object({
      tramite: z.string().optional(),
      vigencia: z.string().optional(),
      renovacion: z.string().optional(),
    }).optional(),

    // === Costos / Honorarios ===
    honorarios_ref: z.string().optional(),            // texto con referencia al Acuerdo CNA 609-A
    tasas_oficiales: z.string().optional(),           // ej: "SNM B/.250 + MITRADEL B/.300"

    // === Alertas operativas (NUEVO Sprint 1c) ===
    alertas: z.array(z.string()).default([]),         // callout amarillo, va antes de "Dirigido a"
    notas_firma: z.string().optional(),               // párrafo libre "Notas de la Firma", tipografía serif

    // === Pendientes DGI / CSS (preservado de claude.ai) ===
    pendientes_dgi: z.array(z.string()).default([]),

    // === Trazabilidad CLO ===
    aprobado_por: z.string().optional(),              // OBLIGATORIO antes de merge a producción
    revisar_con: z.string().optional(),               // path al RESUMEN del vault
    ultima_actualizacion: z.string().optional(),
  }),
});

export const collections = { procesos };
