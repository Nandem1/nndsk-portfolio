import type { Experience, TechStack, Project } from "./types";

export const experiences: Experience[] = [
  {
    id: "1",
    company: "Mercado House SPA",
    position: "Fullstack Developer",
    startDate: "2025-04",
    endDate: "Presente",
    duration: "8 meses",
    description: [
      "Definicion y orquestacion de infraestructura tecnologica inicial",
      "Desarrollo de aplicaciones web, escritorio y móvil modernas",
      "Manejo de base de datos PostgreSQL",
      "Manejo de sistema de control de versiones Git",
      "API RESTful con Node.js y Express",
      "Arquitectura de microservicios con Go",
    ],
    technologies: ["Next.js", "TypeScript", "Node.js", "Go", "PostgreSQL", "Git", "Linux"],
  },
  {
    id: "2",
    company: "Mercado House SPA",
    position: "Asistente de Sistemas",
    startDate: "2024-03",
    endDate: "2025-04",
    duration: "1 año y 1 mes",
    description: [
      "Ingreso de facturas al sistema ERP Defontana",
      "Calculo de precios de ventas, carteleria y mantenibilidad de sala de ventas",
      "Soporte tecnico a usuarios y POS",
      "Control de vencimientos y elaboracion de promociones",
      "Contabilizacion y deshecho de mercaderia como merma"
    ],
    technologies: ["Defontana", "Excel", "Word", "Power Point", "Visual Basic"],
  },
  {
    id: "3",
    company: "Grupo Alcosafe",
    position: "Key Account Manager",
    startDate: "2020-09",
    endDate: "2022-09",
    duration: "2 años",
    description: [
      "Manejo de cartera de clientes y negocios",
      "Llamadas de venta y seguimiento de ventas en frio",
      "Manejo de stock y control de inventario",
    ],
    technologies: ["Excel", "Power Point", "Word", "KameERP"],
  }
];

export const techStack: TechStack[] = [
  {
    category: "Frontend",
    technologies: [
      { name: "React" },
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "Tailwind CSS" }
    ],
  },
  {
    category: "Backend",
    technologies: [
      { name: "Node.js" },
      { name: "Python" },
      { name: "Go" },
      { name: "Express" },
    ],
  },
  {
    category: "Bases de Datos",
    technologies: [
      { name: "PostgreSQL" },
    ],
  },
  {
    category: "Herramientas & DevOps",
    technologies: [
      { name: "Git" },
      { name: "Linux" },
    ],
  },
];

export const aiStack: TechStack[] = [
  {
    category: "Herramientas de Desarrollo",
    technologies: [
      { name: "Cursor IDE" },
    ],
  },
  {
    category: "Debugging & Análisis",
    technologies: [
      { name: "DeepSeek" },
    ],
  },
  {
    category: "Solicitudes Complejas",
    technologies: [
      { name: "Claude" },
      { name: "ChatGPT" },
    ],
  },
  {
    category: "Diseño Frontend",
    technologies: [
      { name: "Gemini" },
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

