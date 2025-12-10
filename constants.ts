import { NavItem, Feature, TeamMember, AssetMap } from './types';

// ==========================================
// GESTIÓN DE RECURSOS (ASSETS)
// ==========================================
// Modifica estas rutas cuando tengas tus imágenes reales.
// Las claves se usan en los componentes para buscar la imagen.
export const ASSETS: AssetMap = {
  logo: "/images/Logo placeholder.jpg", // Logo placeholder
  hero_split: "/images/tensión vs control.jpg", // Imagen conceptual tensión vs control
  product_bottle: "/images/producto VitaSens.jpg", // Foto del producto VitaSens
  market_bg: "https://picsum.photos/id/403/1200/600", // Fondo sección mercado
  founder_silvana: "/images/Silvana.jpg", // Foto Silvana
  founder_nidia: "/images/Nidia.jpg", // Foto Nidia
  founder_sara: "/images/Sara.jpg", // Foto Sara
  founder_yobany: "/images/Yobany.jpg", // Foto Yobany
  founder_taty: "/images/Taty.jpg", // Foto Taty
  avatar1: "https://i.pravatar.cc/150?img=32", // Avatar validación
  avatar2: "https://i.pravatar.cc/150?img=11", // Avatar validación
  avatar3: "https://i.pravatar.cc/150?img=5", // Avatar validación
  avatar4: "https://i.pravatar.cc/150?img=68", // Avatar validación
  trust_badges: "https://via.placeholder.com/80x200/eeeeee/000000?text=Logos+FDA+EFESA",
};

// ==========================================
// CONTENIDO DE TEXTO
// ==========================================

export const NAV_ITEMS: NavItem[] = [
  {
    label: 'El Problema',
    href: '#problema',
    submenu: [
      { title: "La Zona Roja", description: "Incertidumbre e inflamación silenciosa." },
      { title: "Riesgos Silenciosos", description: "Colesterol y glucosa sin control." },
      { title: "Fallas del Mercado", description: "Por qué lo tradicional no funciona." }
    ]
  },
  {
    label: 'Solución',
    href: '#solucion',
    submenu: [
      { title: "Tecnología Clean Label", description: "Extracción mecánica patentada." },
      { title: "Evidencia FDA", description: "Reducción real del riesgo cardiaco." },
      { title: "Revolución Sensorial", description: "Invisible al paladar, fácil de usar." }
    ]
  },
  {
    label: 'Por qué Vitasens',
    href: '#porque',
    submenu: [
      { title: "Vs. Tradicional", description: "Superando a la avena y remedios." },
      { title: "Vs. Fármacos", description: "Sin los efectos secundarios químicos." },
      { title: "Inversión en Salud", description: "Prevención rentable a largo plazo." }
    ]
  },
];

export const HERO_CONTENT = {
  headline: "Tómalo fácil.\nSiembra el hábito.\nCuida el latido.",
  subheadline: "La ciencia de la longevidad y el bienestar preventivo.",
  description: "VitaSens no es solo fibra; es una respuesta científica, validada y necesaria frente a los riesgos silenciosos de la vida moderna.",
  cta_waitlist: "Unirse a la\nEspera",
  social_proof_text: "Únete a 13M de colombianos conscientes.",
  validation_text: "Validado por +120 Profesionales de la Salud"
};

export const FEATURES: Feature[] = [
  {
    title: "Tecnología Clean Label",
    description: "Proceso mecánico patentado. Sin químicos agresivos, pureza garantizada.",
    icon: "Leaf"
  },
  {
    title: "Evidencia FDA",
    description: "Health Claims autorizados. 3g diarios reducen efectivamente el riesgo cardiovascular.",
    icon: "Activity"
  },
  {
    title: "Revolución Sensorial",
    description: "Invisible al paladar. Sin viscosidad ni sabor, eliminando la barrera del rechazo.",
    icon: "Droplets"
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Silvana",
    role: "Fundadora & Visión",
    bio: "Experta en identificar la tensión del mercado y transformarla en soluciones de bienestar.",
    imageKey: "founder_silvana"
  },
  {
    name: "Nidia",
    role: "Estrategia de Mercado",
    bio: "Lidera la conexión con los 'Preventivos Proactivos' y la red de validadores médicos.",
    imageKey: "founder_nidia"
  },
  {
    name: "Sara",
    role: "Operaciones & Distribución",
    bio: "Arquitecta de la estrategia omnicanal y protección de márgenes.",
    imageKey: "founder_sara"
  },
  {
    name: "Yobany",
    role: "Dirección Financiera",
    bio: "Gestión 'Asset-Light' y eficiencia operativa para maximizar el retorno.",
    imageKey: "founder_yobany"
  },
  {
    name: "Taty",
    role: "Relación con Inversores",
    bio: "Estructuración de capital y cierre de alianzas estratégicas.",
    imageKey: "founder_taty"
  }
];

export const MARKET_DATA = [
  { name: 'TAM', value: 11200, color: '#D1D5DB' },
  { name: 'SAM', value: 379, color: '#9CA3AF' },
  { name: 'SOM', value: 8, color: '#7C3AED' },
];

export const COMPARISON_DATA = [
  {
    metric: "Tecnología de Extracción",
    vitasens: "Mecánica Patentada",
    metamucil: "Química",
    avena: "Molienda Simple"
  },
  {
    metric: "Concentración Beta-Glucano",
    vitasens: "Alta Pureza (>20%)",
    metamucil: "N/A (Psyllium)",
    avena: "Baja (<5%)"
  },
  {
    metric: "Experiencia Sensorial",
    vitasens: "Invisible / Sin sabor",
    metamucil: "Sabor Artificial / Gel",
    avena: "Textura grumosa"
  },
  {
    metric: "Dosis Efectiva",
    vitasens: "3g (1 scoop)",
    metamucil: "12g",
    avena: "60g"
  },
  {
    metric: "Adherencia",
    vitasens: "Alta (Fácil de usar)",
    metamucil: "Media",
    avena: "Baja (Requiere preparación)"
  }
];