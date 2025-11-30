import type { Experience, TechStack, Project } from "./types";

// Datos de ejemplo - reemplazar con tus datos reales
export const experiences: Experience[] = [
  {
    id: "1",
    company: "Mercado House SPA",
    position: "Fullstack Developer y Encargado de Sistemas",
    startDate: "2024-03",
    endDate: "Presente",
    duration: "1 año",
    description: [
      "Desarrollo de aplicaciones web, escritorio y móvil modernas",
      "Ingreso de mercaderia, calculo y configuracion de precios",
      "Soporte tecnico a usuarios y POS",
    ],
    technologies: ["Next.js", "TypeScript", "Node.js", "Go", "PostgreSQL", "Git", "Linux", "Excel"],
  },
  {
    id: "2",
    company: "Grupo Alcosafe",
    position: "Key Account Manager",
    startDate: "2020-09",
    endDate: "2022-09",
    duration: "2 años",
    description: [
      "Manejo de cartera de clientes y negocios",
      "Llamadas de venta y seguimiento de ventas",
      "Manejo de stock y control de inventario",
    ],
    technologies: ["Excel", "Power Point", "Word", "KameERP", "ERP"],
  }
];

export const techStack: TechStack[] = [
  {
    category: "Frontend",
    technologies: [
      { name: "React" },
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "Tailwind CSS" },
    ],
  },
  {
    category: "Backend",
    technologies: [
      { name: "Node.js" },
      { name: "Python" },
      { name: "PostgreSQL" },
    ],
  },
  // Agregar más categorías aquí
];

export const aiStack: TechStack[] = [
  {
    category: "Herramientas de Desarrollo",
    technologies: [
      { name: "Cursor IDE (Modo Auto)" },
    ],
  },
  {
    category: "Modelos de IA - Debugging & Análisis",
    technologies: [
      { name: "DeepSeek V3.1" },
    ],
  },
  {
    category: "Modelos de IA - Solicitudes Complejas",
    technologies: [
      { name: "Claude Sonnet 4.5" },
      { name: "ChatGPT 5.1 Codex" },
    ],
  },
  {
    category: "Modelos de IA - Diseño Frontend",
    technologies: [
      { name: "Gemini 3 Pro" },
    ],
  },
  {
    category: "En Evaluación",
    technologies: [
      { name: "Composer 1" },
    ],
  },
];

export const projects: Project[] = [
  {
    id: "1",
    title: "Proyecto Ejemplo",
    description: "Descripción del proyecto y sus características principales.",
    technologies: ["React", "TypeScript", "Next.js"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    featured: true,
  },
  // Agregar más proyectos aquí
];

