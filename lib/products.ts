export interface Product {
  id: string;
  slug: string;
  name: string;
  category: string;
  categorySlug: string;
  tagline: string;
  description: string;
  mechanism: string;
  benefits: string[];
  protocol: string;
  sideEffects: string[];
  evidence: string;
  keywords: string[];
  metaTitle: string;
  metaDescription: string;
  features: { icon: string; title: string; description: string }[];
  dosageWeeks: { week: string; dose: string }[];
}

export const products: Product[] = [
  {
    id: "semaglutide",
    slug: "semaglutide",
    name: "Semaglutida",
    category: "Control de Peso y Metabolismo",
    categorySlug: "weight-loss",
    tagline: "Análogo GLP-1 de última generación para control glucémico y pérdida de peso.",
    description:
      "Análogo del péptido-1 similar al glucagón (GLP-1) diseñado para el control glucémico y la pérdida de peso. Desarrollado originalmente para diabetes tipo 2, ha demostrado resultados excepcionales en la reducción de peso corporal.",
    mechanism:
      "Actúa como agonista del receptor GLP-1, retrasando el vaciamiento gástrico, reduciendo el apetito a nivel central y mejorando la sensibilidad a la insulina.",
    benefits: [
      "Pérdida de peso significativa (15-20%)",
      "Control glucémico mejorado",
      "Reducción del apetito sostenida",
      "Mejora en marcadores cardiovasculares",
      "Administración semanal subcutánea",
    ],
    protocol:
      "Dosis inicial: 0.25 mg/semana subcutánea. Aumentar cada 4 semanas según tolerancia hasta 2.4 mg/semana.",
    sideEffects: [
      "Náuseas (común)",
      "Vómitos ocasionales",
      "Diarrea o estreñimiento",
      "Dolores de cabeza",
    ],
    evidence:
      "Ensayos clínicos SUSTAIN y STEP (más de 50,000 pacientes). Aprobado por FDA y EMA para obesidad.",
    keywords: ["semaglutida", "semaglutide", "comprar semaglutide", "GLP-1 México", "péptidos para adelgazar"],
    metaTitle: "Semaglutida México | Comprar Semaglutide para Médicos | GBH",
    metaDescription:
      "Semaglutida de grado farmacéutico. Distribuidor oficial GBH México. Para profesionales de la salud con cédula vigente.",
    features: [
      {
        icon: "FlaskConical",
        title: "Pureza >99%",
        description: "Certificación de lote con análisis completo de pureza.",
      },
      {
        icon: "Syringe",
        title: "Administración Semanal",
        description: "Una inyección subcutánea por semana, fácil de integrar en protocolos.",
      },
      {
        icon: "ShieldCheck",
        title: "Perfil de Seguridad Validado",
        description: "Más de 10 años de datos clínicos y uso aprobado por FDA.",
      },
      {
        icon: "TrendingDown",
        title: "Eficacia Comprobada",
        description: "15-20% de pérdida de peso corporal en ensayos clínicos.",
      },
    ],
    dosageWeeks: [
      { week: "Semana 1-4", dose: "0.25 mg/semana" },
      { week: "Semana 5-8", dose: "0.5 mg/semana" },
      { week: "Semana 9-12", dose: "1 mg/semana" },
      { week: "Semana 13-16", dose: "2 mg/semana" },
      { week: "Semana 17+", dose: "2.4 mg/semana (máximo)" },
    ],
  },
  {
    id: "tirzepatide",
    slug: "tirzepatide",
    name: "Tirzepatida",
    category: "Control de Peso y Metabolismo",
    categorySlug: "weight-loss",
    tagline: "Doble agonista GLP-1/GIP — la nueva generación de tratamiento para obesidad.",
    description:
      "Análogo dual de GLP-1 y GIP (polipéptido insulinotrópico dependiente de glucosa) que representa la nueva generación de agonistas de incretina para tratamiento de obesidad y diabetes.",
    mechanism:
      "Actúa como agonista dual de los receptores GLP-1 y GIP, potenciando la señalización de incretinas para un control metabólico superior al de los agonistas simples.",
    benefits: [
      "Pérdida de peso superior (hasta 22.5%)",
      "Control glucémico excepcional",
      "Mayor saciedad que agonistas simples",
      "Mejora en sensibilidad a la insulina",
      "Administración semanal subcutánea",
    ],
    protocol:
      "Dosis inicial: 2.5 mg/semana subcutánea. Aumentar cada 4 semanas hasta 15 mg/semana según tolerancia.",
    sideEffects: [
      "Náuseas (común)",
      "Vómitos ocasionales",
      "Diarrea o estreñimiento",
      "Dolores de cabeza",
    ],
    evidence:
      "Ensayos SURPASS y SURMOUNT (más de 20,000 pacientes). Eficacia superior a semaglutida. Aprobado por FDA.",
    keywords: ["tirzepatida", "tirzepatide", "comprar tirzepatide", "agonista dual GLP-1", "tirzepatida México"],
    metaTitle: "Tirzepatida México | Comprar Tirzepatide para Médicos | GBH",
    metaDescription:
      "Tirzepatida dual GLP-1/GIP de grado farmacéutico. Distribuidor oficial GBH México.",
    features: [
      {
        icon: "FlaskConical",
        title: "Pureza >99%",
        description: "Certificación de lote con análisis completo de pureza.",
      },
      {
        icon: "Zap",
        title: "Doble Mecanismo",
        description: "Activa GLP-1 y GIP simultáneamente para máximo control metabólico.",
      },
      {
        icon: "TrendingDown",
        title: "Hasta 22.5% Pérdida",
        description: "Resultados superiores a monoterapia GLP-1 en ensayos clínicos.",
      },
      {
        icon: "Syringe",
        title: "Una vez por semana",
        description: "Inyección subcutánea semanal, cómoda para el paciente.",
      },
    ],
    dosageWeeks: [
      { week: "Semana 1-4", dose: "2.5 mg/semana" },
      { week: "Semana 5-8", dose: "5 mg/semana" },
      { week: "Semana 9-12", dose: "7.5 mg/semana" },
      { week: "Semana 13-16", dose: "10 mg/semana" },
      { week: "Semana 17+", dose: "15 mg/semana (máximo)" },
    ],
  },
  {
    id: "retatrutide",
    slug: "retatrutide",
    name: "Retatrutida",
    category: "Control de Peso y Metabolismo",
    categorySlug: "weight-loss",
    tagline: "Triple agonista GLP-1/GIP/Glucagón — resultados sin precedentes en Fase 2.",
    description:
      "Triple agonista de receptores GLP-1, GIP y glucagón en investigación avanzada. Representa la próxima generación de péptidos para obesidad con resultados sin precedentes en ensayos clínicos.",
    mechanism:
      "Activa simultáneamente los receptores GLP-1, GIP y glucagón, optimizando el control del apetito, termogénesis y metabolismo de glucosa simultáneamente.",
    benefits: [
      "Pérdida de peso sin precedentes (hasta 24% en Fase 2)",
      "Triple mecanismo de acción",
      "Mejora simultánea en control glucémico",
      "Potencial termogénico vía receptor de glucagón",
      "Administración semanal",
    ],
    protocol: "Dosis en investigación: 12 mg/semana subcutánea. Consultar protocolo de estudio clínico.",
    sideEffects: [
      "Náuseas y trastornos gastrointestinales",
      "Fatiga",
      "Reacciones en sitio de inyección",
    ],
    evidence: "Ensayo Fase 2 publicado en NEJM 2023. Fase 3 en curso.",
    keywords: ["retatrutida", "retatrutide", "triple agonista", "obesidad México", "retatrutida investigación"],
    metaTitle: "Retatrutida México | Retatrutide Investigacional | GBH",
    metaDescription:
      "Retatrutida triple agonista GLP-1/GIP/Glucagón. Disponible para investigadores y profesionales de salud.",
    features: [
      {
        icon: "FlaskConical",
        title: "Triple Acción",
        description: "Activa 3 receptores simultáneamente para máximo efecto.",
      },
      {
        icon: "Atom",
        title: "Fase 2 NEJM",
        description: "Datos publicados en New England Journal of Medicine 2023.",
      },
      {
        icon: "TrendingDown",
        title: "24% Pérdida de Peso",
        description: "Resultados sin precedentes en la historia de pharmacología anti-obesidad.",
      },
      {
        icon: "Lab",
        title: "Para Investigadores",
        description: "Disponible para profesionales con protocolo clínico vigente.",
      },
    ],
    dosageWeeks: [
      { week: "Fase 2 (investigación)", dose: "12 mg/semana" },
      { week: "Fase 3 (próximamente)", dose: "Por confirmar" },
    ],
  },
  {
    id: "tesamorelin",
    slug: "tesamorelin",
    name: "Tesamorelina",
    category: "Optimización Hormona de Crecimiento",
    categorySlug: "gh-optimization",
    tagline: "Análogo GHRH aprobado por FDA para reducción de grasa visceral y antiaging.",
    description:
      "Análogo sintético del factor liberador de hormona de crecimiento (GHRH) aprobado por FDA para reducción de grasa visceral en pacientes con VIH y para aplicaciones en medicina estética y antiaging.",
    mechanism:
      "Estimula la secreción endógena de hormona de crecimiento al unirse al receptor GHRH en la pituitaria, promoviendo lipólisis y regeneración tisular.",
    benefits: [
      "Reducción de grasa visceral (hasta 15-20%)",
      "Aumento de IGF-1 dentro de rango fisiológico",
      "Mejora en composición corporal",
      "Efectos regenerativos en piel y órganos",
      "Seguridad comprobada en uso a largo plazo",
    ],
    protocol:
      "1 mg/día subcutánea (FDA approved for HIV-lipodystrophy). Dosis antiaging: 0.5-1 mg/día.",
    sideEffects: [
      "Mialgias",
      "Reacciones en sitio de inyección",
      "Edema leve",
      "Parestesias ocasionales",
    ],
    evidence:
      "Aprobado por FDA desde 2010. Múltiples estudios en lipodistrofia y antiaging. Seguridad validada en más de 10 años.",
    keywords: ["tesamorelina", "tesamorelin", "GHRH", "hormona crecimiento México", "péptidos antiaging"],
    metaTitle: "Tesamorelina México | GHRH Análogo | GBH",
    metaDescription:
      "Tesamorelina GHRH análogo de grado farmacéutico. Para profesionales de medicina estética y antiaging.",
    features: [
      {
        icon: "FlaskConical",
        title: "Aprobado FDA 2010",
        description: "Más de 14 años de uso clínico validado.",
      },
      {
        icon: "TrendingDown",
        title: "Grasa Visceral -20%",
        description: "Reducción significativa en estudios clínicos.",
      },
      {
        icon: "RefreshCw",
        title: "GH Endógena",
        description: "Estimula producción propia del cuerpo, sin supresión.",
      },
      {
        icon: "Sparkles",
        title: "Antiaging Comprobado",
        description: "Efectos regenerativos en piel, órganos y composición corporal.",
      },
    ],
    dosageWeeks: [
      { week: "Dosis estándar", dose: "1 mg/día subcutánea" },
      { week: "Antiaging", dose: "0.5-1 mg/día" },
      { week: "Duración ciclo", dose: "8-12 semanas" },
    ],
  },
  {
    id: "ipamorelin-cjc",
    slug: "ipamorelin-cjc",
    name: "Ipamorelina + CJC-1295",
    category: "Optimización Hormona de Crecimiento",
    categorySlug: "gh-optimization",
    tagline: "Combo sinérgico de secretagogos GH para optimización hormonal.",
    description:
      "Combinación sinérgica de dos secretagogos de GH. CJC-1295 proporciona pulsos sostenidos de GH mientras ipamorelina estimula la liberación específica sin efectos colaterales significativos.",
    mechanism:
      "CJC-1295 (sin DAC) libera GH en pulsos extendidos. Ipamorelina actúa selectivamente en receptores de grelina para estimular GH sin estimular apetito. Juntos: GH pulsátil fisiológica.",
    benefits: [
      "Elevación de GH e IGF-1 en rango joven",
      "Mejora en recuperación y regeneración",
      "Optimización de composición corporal",
      "Mejora en calidad de sueño",
      "Perfil de seguridad favorable (sin supresión de GH endógena)",
    ],
    protocol:
      "CJC-1295: 100-200 mcg 1-2x día. Ipamorelina: 100-200 mcg 1-2x día. Ciclo: 8-12 semanas.",
    sideEffects: [
      "Retención de líquidos leve (temporal)",
      "Adormecimiento de extremidades (ocasional)",
      "Somnolencia post-inyección",
    ],
    evidence:
      "Estudios en población sana demuestran elevación de IGF-1 sin efectos adversos graves. Ampliamente usado en clínicas de longevidad.",
    keywords: ["ipamorelina", "cjc-1295", "secretagogo GH", "antiaging México", "péptidos hormona crecimiento"],
    metaTitle: "Ipamorelina + CJC-1295 México | Secretagogos GH | GBH",
    metaDescription: "Combo Ipamorelina CJC-1295 para optimización de hormona de crecimiento. Distribuidor GBH.",
    features: [
      {
        icon: "Layers",
        title: "Combo Sinérgico",
        description: "Dos mecanismos complementarios para máxima secreción de GH.",
      },
      {
        icon: "Zap",
        title: "GH Pulsátil",
        description: "Replicación del patrón natural de liberación nocturna.",
      },
      {
        icon: "Moon",
        title: "Mejor Sueño",
        description: "Usuarios reportan mejora significativa en calidad de descanso.",
      },
      {
        icon: "ShieldCheck",
        title: "Sin Supresión",
        description: "No suprime la producción endógena de GH.",
      },
    ],
    dosageWeeks: [
      { week: "CJC-1295", dose: "100-200 mcg 1-2x día" },
      { week: "Ipamorelina", dose: "100-200 mcg 1-2x día" },
      { week: "Ciclo recomendado", dose: "8-12 semanas" },
    ],
  },
  {
    id: "ghk-cu",
    slug: "ghk-cu",
    name: "GHK-Cu Cobre Tripéptido",
    category: "Regeneración y Skin Health",
    categorySlug: "regeneration",
    tagline: "El péptido de cobre más estudiado en medicina regenerativa.",
    description:
      "El GHK-Cu es un tripéptido natural derivado de la proteólisis del fibrinógeno que actúa como modulador de la respuesta de reparación tisular. Es uno de los péptidos más estudiados en medicina regenerativa.",
    mechanism:
      "Se une al cobre libre (II) formando un complejo que activa vías de señalización celular para proliferación, migración y producción de colágeno y elastina en fibroblastos.",
    benefits: [
      "Estimulación de producción de colágeno tipo I y III",
      "Aceleración de cicatrización de heridas",
      "Propiedades antiinflamatorias",
      "Mejora en firmeza y elasticidad cutánea",
      "Protección contra daño oxidativo",
      "Reactivación de células madre epiteliales",
    ],
    protocol:
      "Tópico: 2-5 mL de solución 2-3 veces al día. Subcutáneo (uso médico): 1-2 mg 2-3x semana.",
    sideEffects: [
      "Enrojecimiento transitorio (tópico)",
      "Prurito leve",
      "Manchas oscuras temporales en piel",
    ],
    evidence:
      "Más de 20,000 estudios. Revisión en Dermato-Endocrinology 2012. Evidencia robusta para aplicación tópica en fotoenvejecimiento y cicatrización.",
    keywords: ["ghk-cu", "cobre tripéptido", "medicina regenerativa", "colágeno piel", "ghk cu México"],
    metaTitle: "GHK-Cu México | Cobre Tripéptido Piel | GBH",
    metaDescription:
      "GHK-Cu cobre tripéptido para regeneración cutánea. Disponible para profesionales de medicina estética.",
    features: [
      {
        icon: "Sparkles",
        title: "20,000+ Estudios",
        description: "Uno de los péptidos más estudiados en la literatura médica.",
      },
      {
        icon: "Droplets",
        title: "Colágeno I y III",
        description: "Estimula producción de ambos tipos fundamentales de colágeno.",
      },
      {
        icon: "Wind",
        title: "Antiinflamatorio",
        description: "Reduce markers inflamatorios en piel dañada.",
      },
      {
        icon: "Sun",
        title: "Anti-Fotoenvejecimiento",
        description: "Protección y reparación frente a daño UV crónico.",
      },
    ],
    dosageWeeks: [
      { week: "Tópico", dose: "2-5 mL, 2-3x día" },
      { week: "Subcutáneo (médico)", dose: "1-2 mg, 2-3x semana" },
    ],
  },
  {
    id: "melanotan-2",
    slug: "melanotan-2",
    name: "Melanotano-2 (MT-2)",
    category: "Regeneración y Skin Health",
    categorySlug: "regeneration",
    tagline: "Análogo sintético de α-MSH para bronceado natural y protección solar.",
    description:
      "Análogo sintético de la hormona estimulante de melanocitos (α-MSH) que induce melanogénesis, proporcionando bronceado natural sin exposición solar excesiva. También estudiado por efectos en libido y función eréctil.",
    mechanism:
      "Activa receptores de melanocortina (MC1R) en melanocitos, incrementando la producción de eumelanina para protección solar natural. También actúa en MC3/MC4 para efectos en apetito y función sexual.",
    benefits: [
      "Bronceado natural y uniforme",
      "Reducción del riesgo de daño solar (SPF natural)",
      "Posible mejora en función sexual y libido",
      "Reducción de apetito (efecto secundario MC4)",
      "Mejora en estado de ánimo",
    ],
    protocol:
      "Dosis de carga: 0.25-0.5 mg/día subcutánea hasta obtener color deseado (2-4 semanas). Mantenimiento: 2-3x semana.",
    sideEffects: [
      "Oscurecimiento de lunares existentes",
      "Náuseas (común, transitorio)",
      "Rubor facial",
      "Manchas oscuras en freckles existentes",
      "Priapismo (raro, en hombres)",
    ],
    evidence:
      "Desarrollado originalmente en Universidad de Arizona. Usado off-label para protección solar y disfunción eréctil. No aprobado por FDA para estos usos.",
    keywords: ["melanotan-2", "mt-2", "bronceado", "melanina", "peptides México"],
    metaTitle: "Melanotano-2 México | MT-2 Bronceado | GBH",
    metaDescription: "Melanotan-2 para bronceado seguro y protección solar natural. Disponible para profesionales.",
    features: [
      {
        icon: "Sun",
        title: "SPF Natural",
        description: "Incrementa melanina proporcionando protección solar equivalente.",
      },
      {
        icon: "Sparkles",
        title: "Bronceado Uniforme",
        description: "Resultado natural sin exposición solar excesiva.",
      },
      {
        icon: "Heart",
        title: "Efecto Libido",
        description: "Activación MC4 puede mejorar función sexual.",
      },
      {
        icon: "Thermometer",
        title: "Temperatura Cutánea",
        description: "Aumento temporal de temperatura en zona de inyección.",
      },
    ],
    dosageWeeks: [
      { week: "Carga (2-4 semanas)", dose: "0.25-0.5 mg/día SC" },
      { week: "Mantenimiento", dose: "2-3x semana" },
    ],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter((p) => p.categorySlug === categorySlug);
}