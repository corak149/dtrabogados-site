import { defineCollection, z } from "astro:content";

/**
 * Colección de procesos legales — contenido rico por proceso.
 *
 * Path del archivo mapea a la ruta pública:
 *   src/content/procesos/{area}/{grupo}/{proceso}.md
 *     → /{area}/{grupo}/{proceso}/
 *
 * Cuando existe .md aquí, la plantilla [proceso].astro renderiza el
 * copy real. Si no existe, muestra los TODO placeholders del scaffolding.
 *
 * Cada .md debe validarse contra el RESUMEN.md correspondiente en
 * dtr-vault/800-Knowledge-PA/810-Migracion/ (u otro compendio).
 */
const procesos = defineCollection({
  type: "content",
  schema: z.object({
    titulo: z.string(),
    descripcion: z.string(),
    resumen: z.string(),
    base_legal: z.array(z.string()).default([]),
    dirigido_a: z.array(z.string()).default([]),
    requisitos_persona_natural: z.array(z.string()).default([]),
    requisitos_empresa: z.array(z.string()).default([]),
    documentos: z.array(z.string()).default([]),
    plazos: z.object({
      tramite: z.string().optional(),
      vigencia: z.string().optional(),
      renovacion: z.string().optional(),
    }).optional(),
    honorarios_ref: z.string().optional(),
    pendientes_dgi: z.array(z.string()).default([]),
    aprobado_por: z.string().optional(),
    revisar_con: z.string().optional(),
    ultima_actualizacion: z.string().optional(),
  }),
});

export const collections = { procesos };
