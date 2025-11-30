"use client";

import { motion } from "motion/react";
import type { Project } from "@/lib/types";
import { ExternalLink, Github } from "lucide-react";
import { getTechIcon, normalizeTechName } from "@/lib/tech-icons";

interface ProjectsProps {
  projects: Project[];
}

export function Projects({ projects }: ProjectsProps) {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-2xl font-medium text-foreground mb-12"
        >
          Proyectos
        </motion.h2>
        
        {featuredProjects.length > 0 && (
          <div className="space-y-12 mb-16">
            {featuredProjects.map((project, index) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="space-y-4"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-medium text-foreground mb-2">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  
                  <div className="flex gap-2 shrink-0">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                        aria-label="Ver código en GitHub"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                        aria-label="Ver proyecto en vivo"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => {
                    const normalizedName = normalizeTechName(tech);
                    const Icon = getTechIcon(normalizedName);
                    
                    return (
                      <div
                        key={tech}
                        className="inline-flex items-center gap-1.5 px-2 py-1 rounded hover:bg-muted/50 transition-colors"
                      >
                        {Icon && (
                          <Icon className="w-3.5 h-3.5 text-muted-foreground" />
                        )}
                        <span className="text-xs text-muted-foreground">
                          {tech}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </motion.article>
            ))}
          </div>
        )}
        
        {otherProjects.length > 0 && (
          <div className="space-y-8">
            {otherProjects.map((project, index) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.03 }}
                className="space-y-3"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-medium text-foreground mb-1">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                  
                  <div className="flex gap-2 shrink-0">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 text-muted-foreground hover:text-foreground transition-colors"
                        aria-label="Ver código en GitHub"
                      >
                        <Github className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 text-muted-foreground hover:text-foreground transition-colors"
                        aria-label="Ver proyecto en vivo"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => {
                    const normalizedName = normalizeTechName(tech);
                    const Icon = getTechIcon(normalizedName);
                    
                    return (
                      <div
                        key={tech}
                        className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded hover:bg-muted/50 transition-colors"
                      >
                        {Icon && (
                          <Icon className="w-3 h-3 text-muted-foreground" />
                        )}
                        <span className="text-xs text-muted-foreground">
                          {tech}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </motion.article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

