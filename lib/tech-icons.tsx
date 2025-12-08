import { 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiTailwindcss,
  SiNodedotjs,
  SiPython,
  SiPostgresql,
  SiGo,
  SiGit,
  SiLinux,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiDocker,
  SiMongodb,
  SiRedis,
  SiExpress,
  SiFastapi,
  SiDjango,
  SiVuedotjs,
  SiAngular,
  SiSvelte,
  SiGraphql,
  SiApollographql,
  SiPrisma,
  SiSupabase,
  SiFirebase,
  SiVercel,
  SiAmazon,
  SiGooglecloud,
  SiKubernetes,
  SiTerraform,
  SiJenkins,
  SiGithubactions,
  SiJest,
  SiTestinglibrary,
  SiCypress,
  SiEslint,
  SiPrettier,
  SiWebpack,
  SiVite,
  SiNpm,
  SiYarn,
  SiPnpm,
  SiFigma,
  SiAdobexd,
  SiNotion,
  SiSlack,
  SiDiscord,
  SiOpenai,
  SiAnthropic,
  SiGoogle,
  SiWails,
} from "react-icons/si";
import { IconType } from "react-icons";

/**
 * Mapeo de nombres de tecnologías a sus iconos correspondientes
 * Usa Simple Icons (Si) de react-icons para iconos de tecnologías
 */
export const techIconMap: Record<string, IconType> = {
  // Frontend
  "React": SiReact,
  "Next.js": SiNextdotjs,
  "TypeScript": SiTypescript,
  "JavaScript": SiJavascript,
  "Tailwind CSS": SiTailwindcss,
  "HTML5": SiHtml5,
  "CSS3": SiCss3,
  "Vue.js": SiVuedotjs,
  "Angular": SiAngular,
  "Svelte": SiSvelte,
  
  // Backend
  "Node.js": SiNodedotjs,
  "Python": SiPython,
  "Go": SiGo,
  "Express": SiExpress,
  "FastAPI": SiFastapi,
  "Django": SiDjango,
  "Wails": SiWails,
  
  // Bases de datos
  "PostgreSQL": SiPostgresql,
  "MongoDB": SiMongodb,
  "Redis": SiRedis,
  
  // Herramientas y DevOps
  "Git": SiGit,
  "Linux": SiLinux,
  "Docker": SiDocker,
  "Kubernetes": SiKubernetes,
  "Terraform": SiTerraform,
  "Jenkins": SiJenkins,
  "GitHub Actions": SiGithubactions,
  
  // Cloud
  "AWS": SiAmazon,
  "Google Cloud": SiGooglecloud,
  "Vercel": SiVercel,
  
  // Testing
  "Jest": SiJest,
  "Testing Library": SiTestinglibrary,
  "Cypress": SiCypress,
  
  // Herramientas de desarrollo
  "ESLint": SiEslint,
  "Prettier": SiPrettier,
  "Webpack": SiWebpack,
  "Vite": SiVite,
  "npm": SiNpm,
  "Yarn": SiYarn,
  "pnpm": SiPnpm,
  
  // GraphQL
  "GraphQL": SiGraphql,
  "Apollo": SiApollographql,
  
  // ORMs y servicios
  "Prisma": SiPrisma,
  "Supabase": SiSupabase,
  "Firebase": SiFirebase,
  
  // Diseño
  "Figma": SiFigma,
  "Adobe XD": SiAdobexd,
  
  // Colaboración
  "Notion": SiNotion,
  "Slack": SiSlack,
  "Discord": SiDiscord,
  
  // IA (usando iconos genéricos o de las empresas)
  "OpenAI": SiOpenai,
  "Anthropic": SiAnthropic,
  "Google": SiGoogle,
  "Claude": SiAnthropic,
  "ChatGPT": SiOpenai,
  "Gemini": SiGoogle,
  "DeepSeek": SiOpenai, // Usando icono genérico de IA
  // Cursor IDE no tiene icono específico, usará fallback con inicial
};

/**
 * Obtiene el icono para una tecnología específica
 * Si no encuentra el icono, retorna null
 */
export function getTechIcon(techName: string): IconType | null {
  return techIconMap[techName] || null;
}

/**
 * Normaliza el nombre de la tecnología para buscar el icono
 * Maneja variaciones comunes de nombres
 */
export function normalizeTechName(techName: string): string {
  const normalized = techName.trim();
  
  // Mapeo de variaciones comunes
  const variations: Record<string, string> = {
    "nextjs": "Next.js",
    "next.js": "Next.js",
    "typescript": "TypeScript",
    "javascript": "JavaScript",
    "tailwind": "Tailwind CSS",
    "tailwindcss": "Tailwind CSS",
    "nodejs": "Node.js",
    "node.js": "Node.js",
    "wails": "Wails",
    "postgres": "PostgreSQL",
    "postgresql": "PostgreSQL",
    "mongodb": "MongoDB",
    "redis": "Redis",
    "git": "Git",
    "linux": "Linux",
    "docker": "Docker",
    "kubernetes": "Kubernetes",
    "terraform": "Terraform",
    "jenkins": "Jenkins",
    "github actions": "GitHub Actions",
    "aws": "AWS",
    "gcp": "Google Cloud",
    "google cloud": "Google Cloud",
    "vercel": "Vercel",
    "jest": "Jest",
    "cypress": "Cypress",
    "playwright": "Playwright",
    "eslint": "ESLint",
    "prettier": "Prettier",
    "webpack": "Webpack",
    "vite": "Vite",
    "graphql": "GraphQL",
    "apollo": "Apollo",
    "prisma": "Prisma",
    "supabase": "Supabase",
    "firebase": "Firebase",
    "figma": "Figma",
    "notion": "Notion",
    "slack": "Slack",
    "discord": "Discord",
  };
  
  const lower = normalized.toLowerCase();
  return variations[lower] || normalized;
}

