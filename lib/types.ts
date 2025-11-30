export interface Experience {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate: string | null; // null = actual
  duration: string;
  description: string[];
  technologies: string[];
}

export interface TechStack {
  category: string;
  technologies: {
    name: string;
    icon?: string;
  }[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
  featured?: boolean;
}

