/**
 * WhatsApp helper — template rico para captura previa de datos del prospecto.
 * Yeltzin (03.08.26 + iteración 06.08.26):
 *   - Pre-rellenar nombre, tema, país, correo y descripción del caso
 *   - Que el prospecto haga algo de trabajo previo antes de nuestra 1ra respuesta
 */

const WA_NUMBER =
  import.meta.env.PUBLIC_WHATSAPP || "50763920358"; // +507 6392-0358

export interface WaOptions {
  /** Área o proceso desde el que se abre el chat. Ej: "Migración", "Visa profesional". */
  tema?: string;
  /** Sobrescribir el mensaje entero si se necesita algo puntual. */
  mensaje?: string;
}

export function waLink({ tema, mensaje }: WaOptions = {}): string {
  const temaLinea = tema
    ? `Escribo desde la web porque estoy interesado en: *${tema}*`
    : "Escribo desde la web porque estoy interesado en: ________";

  const body =
    mensaje ??
    `Hola DTR Abogados 👋

Mi nombre es: ________
${temaLinea}

Me gustaría agendar una asesoría. Estos son mis datos:
• Correo:
• País desde donde escribo:
• Breve descripción del caso:

Gracias.`;

  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(body)}`;
}

export const WA_NUMBER_HUMAN = "+507 6392-0358";
