/**
 * DTR — Áreas de práctica y sitemap V3
 *
 * Fuente única de verdad para: mega-menú, home cards, generación
 * de rutas por área. Cuando Danna commitee el copy V3, se actualiza
 * `descripcion` y `pregunta` por bloque.
 *
 * Ver: 900-Inbox/900-GREG/01-Pendientes/2026-08-03-HANDOFF-WEB-DTR-implementacion-V3.md
 */

export interface Proceso {
  slug: string;
  titulo: string;
  descripcion?: string;
}

export interface Grupo {
  slug: string;
  titulo: string;
  procesos: Proceso[];
}

export interface HeadDepto {
  nombre: string;              // "Lcda. Rosemary S. De León"
  cargo: string;               // "Socia Fundadora"
  especialidad: string;        // "Especialista en Derecho Migratorio"
  bio: string;                 // párrafo corto (2-3 líneas)
  experiencia_anios: number;   // 20
  stats?: {
    expedientes?: string;      // "950+"
    success_rate?: string;     // "97%"
    otras?: Array<{ label: string; value: string }>;
  };
  foto: string;                // path relativo a /public (ej. "/team/rosemary-de-leon.jpg")
  foto_alt: string;
}

export interface Area {
  slug: string;                   // ej. "derecho-migratorio"
  titulo: string;                 // "Migración a Panamá"
  tituloCorto: string;            // "Migración"
  pregunta: string;               // pregunta-cliente que responde
  descripcion: string;            // sub para el card + hub
  destacada?: boolean;            // aparece en home V3
  head?: HeadDepto;               // Head del departamento (opcional)
  grupos: Grupo[];
}

export const AREAS: Area[] = [
  {
    slug: "derecho-migratorio",
    titulo: "Derecho Migratorio",
    tituloCorto: "Migración",
    pregunta: "¿Puedo vivir, trabajar o invertir en Panamá siendo extranjero?",
    descripcion:
      "Visas, residencias provisionales y permanentes, permisos de trabajo, regularizaciones y trámites administrativos. Acompañamos el trámite completo con plazos claros por nacionalidad.",
    destacada: true,
    head: {
      nombre: "Lcda. Rosemary S. De León",
      cargo: "Socia Fundadora · Head del Departamento",
      especialidad: "Especialista en Derecho Migratorio",
      bio: "Con más de 20 años de experiencia en el régimen migratorio panameño, la Lcda. De León lidera el departamento de Migración de DTR. Su equipo acompaña cada expediente de principio a fin, desde la consulta inicial hasta la entrega del permiso o residencia.",
      experiencia_anios: 20,
      stats: {
        expedientes: "950+",
        success_rate: "97%",
        otras: [
          { label: "Años de experiencia", value: "20+" },
        ],
      },
      foto: "/team/rosemary-de-leon.jpg",
      foto_alt: "Lcda. Rosemary S. De León — Socia Fundadora de DTR Abogados",
    },
    grupos: [
      {
        slug: "visas-corta-estancia",
        titulo: "Visas de corta estancia",
        procesos: [
          { slug: "visa-turista", titulo: "Visa de turista" },
          { slug: "visa-transito", titulo: "Visa de tránsito" },
          { slug: "visa-extension-turista", titulo: "Extensión de visa de turista" },
          { slug: "visa-extension-cambio-categoria", titulo: "Extensión y cambio de categoría" },
          { slug: "visa-multiple", titulo: "Visa múltiple" },
          { slug: "visa-marino", titulo: "Visa de marino" },
          { slug: "visa-espectaculos", titulo: "Visa de espectáculos" },
          { slug: "visa-vtet", titulo: "Visa VTET (técnicos especializados)" },
          { slug: "visa-domesticos", titulo: "Visa de servicio doméstico" },
          { slug: "visa-transeuntes-artistas", titulo: "Transeúntes artistas (v1)" },
          { slug: "visa-transeuntes-artistas-v2", titulo: "Transeúntes artistas (v2)" },
          { slug: "corta-estancia-familiares", titulo: "Corta estancia para familiares" },
          { slug: "corta-estancia-investigadores", titulo: "Corta estancia para investigadores" },
          { slug: "corta-estancia-medico", titulo: "Corta estancia médica" },
          { slug: "corta-estancia-comerciantes", titulo: "Corta estancia para comerciantes" },
          { slug: "corta-estancia-humanitaria", titulo: "Corta estancia humanitaria" },
          { slug: "corta-estancia-bancario", titulo: "Corta estancia bancaria" },
          { slug: "corta-estancia-trabajador-remoto", titulo: "Corta estancia para trabajador remoto" },
        ],
      },
      {
        slug: "visas-residente",
        titulo: "Visas de residente",
        procesos: [
          { slug: "visa-profesional", titulo: "Visa profesional" },
          { slug: "visa-confianza", titulo: "Visa de confianza" },
          { slug: "visa-inversionista", titulo: "Visa de inversionista" },
          { slug: "visa-estudiante", titulo: "Visa de estudiante" },
          { slug: "visa-religioso", titulo: "Visa de religioso o misionero" },
        ],
      },
      {
        slug: "residente-provisional",
        titulo: "Residente provisional",
        procesos: [
          { slug: "residencia-inversion-inmobiliaria", titulo: "Inversión inmobiliaria" },
          { slug: "residencia-trabajo", titulo: "Trabajo (permiso MITRADEL)" },
          { slug: "residencia-reagrupacion-familiar", titulo: "Reagrupación familiar" },
          { slug: "residencia-cuenta-propia", titulo: "Trabajador por cuenta propia" },
          { slug: "residencia-deportista-profesional", titulo: "Deportista profesional" },
          { slug: "residencia-corresponsal-prensa", titulo: "Corresponsal de prensa" },
          { slug: "residencia-contrato-gobierno", titulo: "Contrato con gobierno" },
          { slug: "residencia-marrakech", titulo: "Convención de Marrakech" },
          { slug: "residencia-misionero-religioso", titulo: "Misionero religioso" },
          { slug: "residencia-cinematografico", titulo: "Trabajador cinematográfico" },
          { slug: "residencia-crisol-de-razas", titulo: "Crisol de Razas (EE.UU. y otros)" },
        ],
      },
      {
        slug: "residente-permanente",
        titulo: "Residente permanente",
        procesos: [
          { slug: "requisitos", titulo: "Requisitos generales" },
          { slug: "rentista-permanente", titulo: "Rentista permanente" },
          { slug: "jubilado-permanente", titulo: "Jubilado permanente" },
          { slug: "inversionista-permanente", titulo: "Inversionista calificado permanente" },
          { slug: "permanente-casado-panameno", titulo: "Casado con panameño/a" },
          { slug: "permanente-hijos-panamenos", titulo: "Hijo de panameño" },
          { slug: "permanente-aviacion-10", titulo: "Aviación (10% extranjeros)" },
          { slug: "permanente-aviacion-15", titulo: "Aviación (15%)" },
          { slug: "permanente-tratado-italia", titulo: "Tratado Panamá-Italia" },
          { slug: "permanente-religioso", titulo: "Religioso" },
          { slug: "permanente-italia-especifico", titulo: "Italia y países específicos" },
          { slug: "permanente-profesional", titulo: "Profesional (idoneidad)" },
          { slug: "residencia-matrimonio", titulo: "Residencia por matrimonio" },
          { slug: "residencia-pension-jubilacion", titulo: "Residencia por pensión o jubilación" },
          { slug: "residencia-tratado-panama-italia", titulo: "Residencia por Tratado Panamá-Italia" },
        ],
      },
      {
        slug: "permisos-de-trabajo",
        titulo: "Permisos de trabajo (MITRADEL)",
        procesos: [
          { slug: "permiso-profesional", titulo: "Profesional (10% extranjeros)" },
          { slug: "permiso-tratado-panama-italia", titulo: "Tratado Panamá-Italia" },
          { slug: "permiso-deportista-profesional", titulo: "Deportista profesional" },
          { slug: "permiso-corresponsal-prensa", titulo: "Corresponsal de prensa" },
          { slug: "permiso-zona-libre-colon", titulo: "Zona Libre de Colón" },
          { slug: "permiso-panama-pacifico", titulo: "Panamá Pacífico" },
          { slug: "permiso-sede-multinacional", titulo: "Sede de Empresa Multinacional" },
          { slug: "permiso-gobierno", titulo: "Contrato con gobierno" },
          { slug: "permiso-marrakech", titulo: "Convención de Marrakech" },
          { slug: "permiso-10-ordinario", titulo: "10% ordinario" },
          { slug: "permiso-15-experto-tecnico", titulo: "15% experto técnico" },
          { slug: "permiso-paises-amigos", titulo: "Países Amigos" },
          { slug: "permiso-diplomatico", titulo: "Personal diplomático" },
          { slug: "permiso-empresas-cds", titulo: "Empresas Ciudad del Saber" },
          { slug: "permiso-conyuge-nacionalidad", titulo: "Cónyuge con nacionalidad panameña" },
          { slug: "permiso-conyuge-patria-potestad", titulo: "Cónyuge con patria potestad" },
          { slug: "permiso-refugiados", titulo: "Refugiados (ONPAR)" },
        ],
      },
      {
        slug: "regularizaciones-y-amnistias",
        titulo: "Regularizaciones y amnistías",
        procesos: [
          { slug: "regularizacion-ppsh", titulo: "PPSH (Protección Humanitaria)" },
          { slug: "regularizacion-pasaporte-venezolano", titulo: "Pasaporte venezolano" },
          { slug: "regularizacion-retorno-voluntario", titulo: "Retorno voluntario" },
          { slug: "regularizacion-refugiados-onpar", titulo: "Refugiados (ONPAR)" },
          { slug: "regularizacion-multas-migratorias", titulo: "Exoneración de multas" },
          { slug: "regularizacion-rmg-235", titulo: "Regularización Migratoria General (RMG 235)" },
        ],
      },
      {
        slug: "tramites-administrativos",
        titulo: "Trámites administrativos (SNMT)",
        procesos: [
          { slug: "cambio-residencia", titulo: "Cambio de tipo de residencia" },
          { slug: "movimiento-migratorio", titulo: "Movimiento migratorio" },
          { slug: "traspaso-registro", titulo: "Traspaso de registro" },
        ],
      },
      {
        slug: "naturalizacion",
        titulo: "Naturalización",
        procesos: [
          { slug: "naturalizacion", titulo: "Naturalización por residencia" },
          { slug: "naturalizacion-carta-naturaleza", titulo: "Carta de Naturaleza" },
        ],
      },
    ],
  },
  {
    slug: "derecho-civil",
    titulo: "Derecho Civil",
    tituloCorto: "Civil",
    pregunta: "Estoy comprando, vendiendo o heredando un bien — ¿qué necesito?",
    descripcion:
      "Propiedad horizontal, compraventas, sucesiones y responsabilidad civil para personas y empresas en Panamá.",
    destacada: true,
    grupos: [
      {
        slug: "propiedad-horizontal",
        titulo: "Propiedad Horizontal",
        procesos: [
          { slug: "asamblea-propietarios", titulo: "Asamblea de propietarios" },
          { slug: "cobro-cuotas", titulo: "Cobro de cuotas" },
          { slug: "reglamento-ph", titulo: "Reglamento PH" },
          { slug: "conflictos-ph", titulo: "Conflictos PH" },
        ],
      },
      {
        slug: "compraventas",
        titulo: "Compraventas",
        procesos: [
          { slug: "opcion-compra", titulo: "Opción de compra" },
          { slug: "compraventa-finca", titulo: "Compraventa de finca" },
          { slug: "cesion-derechos", titulo: "Cesión de derechos" },
        ],
      },
      {
        slug: "sucesiones",
        titulo: "Sucesiones",
        procesos: [
          { slug: "juicio-sucesorio", titulo: "Juicio sucesorio" },
          { slug: "cesion-hereditarios", titulo: "Cesión de derechos hereditarios" },
          { slug: "particion-bienes", titulo: "Partición de bienes" },
        ],
      },
      {
        slug: "responsabilidad-civil",
        titulo: "Responsabilidad civil",
        procesos: [],
      },
    ],
  },
  {
    slug: "derecho-comercial",
    titulo: "Derecho Comercial",
    tituloCorto: "Sociedades",
    pregunta: "Quiero abrir mi S.A., fundación o hacer compliance — ¿por dónde empiezo?",
    descripcion:
      "Constitución de sociedades, fundaciones de interés privado, compliance corporativo y resolución de conflictos societarios.",
    destacada: true,
    grupos: [
      {
        slug: "sociedades-anonimas",
        titulo: "Sociedades Anónimas",
        procesos: [
          { slug: "constitucion-sa", titulo: "Constitución S.A." },
          { slug: "acciones-nominativas", titulo: "Acciones nominativas" },
          { slug: "aumento-capital", titulo: "Aumento de capital" },
          { slug: "reforma-pacto-social", titulo: "Reforma del pacto social" },
        ],
      },
      {
        slug: "fundaciones-interes-privado",
        titulo: "Fundaciones de interés privado",
        procesos: [],
      },
      {
        slug: "compliance-corporativo",
        titulo: "Compliance corporativo",
        procesos: [
          { slug: "programa-cumplimiento-penal", titulo: "Programa de cumplimiento penal" },
          { slug: "debida-diligencia", titulo: "Debida diligencia" },
        ],
      },
      {
        slug: "conflictos-societarios",
        titulo: "Conflictos societarios",
        procesos: [
          { slug: "exclusion-socios", titulo: "Exclusión de socios" },
          { slug: "disolucion", titulo: "Disolución" },
        ],
      },
    ],
  },
  {
    slug: "derecho-maritimo",
    titulo: "Derecho Marítimo",
    tituloCorto: "Marítimo",
    pregunta: "Bandera, hipoteca naval o gente de mar — ¿cómo lo resuelvo?",
    descripcion:
      "Abanderamiento y registro de buques, hipoteca naval y asuntos de la gente de mar bajo la ley panameña.",
    grupos: [
      { slug: "abanderamiento-buques", titulo: "Abanderamiento de buques", procesos: [] },
      {
        slug: "registro-buques",
        titulo: "Registro de buques",
        procesos: [{ slug: "hipoteca-naval", titulo: "Hipoteca naval" }],
      },
      { slug: "gente-de-mar", titulo: "Gente de mar", procesos: [] },
    ],
  },
  {
    slug: "derecho-penal",
    titulo: "Derecho Penal",
    tituloCorto: "Penal",
    pregunta: "Necesito defensa penal o una querella empresarial — ¿me acompañan?",
    descripcion:
      "Defensa penal, penal corporativo (CSS y otros) y querellas empresariales.",
    grupos: [
      { slug: "defensa-penal", titulo: "Defensa penal", procesos: [] },
      { slug: "penal-css-corporativo", titulo: "Penal CSS corporativo", procesos: [] },
      { slug: "querellas-empresariales", titulo: "Querellas empresariales", procesos: [] },
    ],
  },
  {
    slug: "derecho-laboral",
    titulo: "Derecho Laboral",
    tituloCorto: "Laboral",
    pregunta: "Despido, mutuo acuerdo o CSS — ¿cómo termino la relación laboral bien?",
    descripcion:
      "Despidos justificados e injustificados, mutuo acuerdo y trámites ante Seguridad Social.",
    grupos: [
      { slug: "despido-justificado", titulo: "Despido justificado", procesos: [] },
      { slug: "despido-injustificado", titulo: "Despido injustificado", procesos: [] },
      { slug: "mutuo-acuerdo", titulo: "Mutuo acuerdo", procesos: [] },
      { slug: "seguridad-social", titulo: "Seguridad social", procesos: [] },
    ],
  },
  {
    slug: "derecho-tributario",
    titulo: "Derecho Tributario",
    tituloCorto: "Tributario",
    pregunta: "ISR, ITBMS o planificación fiscal — ¿me ayudan?",
    descripcion:
      "ISR, ITBMS, planificación fiscal y recursos ante el Tribunal Administrativo Tributario.",
    grupos: [
      { slug: "isr", titulo: "ISR", procesos: [] },
      { slug: "itbms", titulo: "ITBMS", procesos: [] },
      { slug: "planificacion-fiscal", titulo: "Planificación fiscal", procesos: [] },
      { slug: "recursos-tributario", titulo: "Recursos tributarios", procesos: [] },
    ],
  },
  {
    slug: "derecho-de-familia",
    titulo: "Derecho de Familia",
    tituloCorto: "Familia",
    pregunta: "Divorcio, pensión o adopción — ¿por dónde empiezo?",
    descripcion:
      "Divorcios, pensión alimenticia, adopciones y otros procesos de familia.",
    grupos: [
      { slug: "divorcio", titulo: "Divorcio", procesos: [] },
      { slug: "pension-alimenticia", titulo: "Pensión alimenticia", procesos: [] },
      { slug: "adopcion", titulo: "Adopción", procesos: [] },
    ],
  },
  {
    slug: "propiedad-intelectual",
    titulo: "Propiedad Intelectual",
    tituloCorto: "PI",
    pregunta: "Marcas, patentes o derechos de autor — ¿los registro con ustedes?",
    descripcion:
      "Registro y defensa de marcas, patentes y derechos de autor en Panamá.",
    grupos: [
      { slug: "marcas", titulo: "Marcas", procesos: [] },
      { slug: "patentes", titulo: "Patentes", procesos: [] },
      { slug: "derecho-autor", titulo: "Derecho de autor", procesos: [] },
    ],
  },
  {
    slug: "otras-areas",
    titulo: "Otras áreas",
    tituloCorto: "Más áreas",
    pregunta: "¿Seguros, competencia, energía, salud o internacional?",
    descripcion:
      "Seguros, competencia y consumo, energía, salud y regulación, derecho internacional público y privado.",
    grupos: [
      { slug: "derecho-de-seguros", titulo: "Seguros", procesos: [] },
      { slug: "derecho-de-la-competencia", titulo: "Competencia", procesos: [] },
      { slug: "derecho-internacional", titulo: "Derecho internacional", procesos: [] },
      { slug: "energia-y-recursos", titulo: "Energía y recursos", procesos: [] },
      { slug: "salud-y-regulacion", titulo: "Salud y regulación", procesos: [] },
    ],
  },
];

export const AREAS_DESTACADAS = AREAS.filter((a) => a.destacada);
