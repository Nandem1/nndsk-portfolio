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
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-semibold tracking-tight text-foreground mb-12 text-center"
        >
          Proyectos
        </motion.h2>
        
        {featuredProjects.length > 0 && (
          <div className="space-y-8 mb-16">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 hover:border-foreground/20 transition-all duration-300 hover:shadow-xl hover:shadow-foreground/5"
              >
                {/* Efecto de brillo sutil en hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-foreground/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10 flex flex-col lg:flex-row gap-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-foreground mb-3">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-3 mb-6">
                      {project.technologies.map((tech) => {
                        const normalizedName = normalizeTechName(tech);
                        const Icon = getTechIcon(normalizedName);
                        
                        return (
                          <motion.div
                            key={tech}
                            whileHover={{ scale: 1.05, y: -2 }}
                            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-background border border-border text-foreground text-xs font-medium transition-all duration-200 hover:border-foreground/40 hover:bg-accent/50 hover:shadow-md"
                          >
                            {Icon && (
                              <Icon className="w-4 h-4" />
                            )}
                            <span>{tech}</span>
                          </motion.div>
                        );
                      })}
                    </div>
                    
                    <div className="flex gap-4">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-background border border-border text-muted-foreground hover:text-foreground hover:border-foreground/40 hover:bg-accent/50 transition-all duration-200 hover:shadow-md"
                        >
                          <Github className="w-4 h-4" />
                          <span className="text-sm font-medium">Código</span>
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-background border border-border text-muted-foreground hover:text-foreground hover:border-foreground/40 hover:bg-accent/50 transition-all duration-200 hover:shadow-md"
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span className="text-sm font-medium">Ver proyecto</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
        
        {otherProjects.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 hover:border-foreground/20 transition-all duration-300 hover:shadow-lg hover:shadow-foreground/5"
              >
                {/* Efecto de brillo sutil en hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-foreground/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => {
                      const normalizedName = normalizeTechName(tech);
                      const Icon = getTechIcon(normalizedName);
                      
                      return (
                        <motion.div
                          key={tech}
                          whileHover={{ scale: 1.05 }}
                          className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-background border border-border text-foreground text-xs font-medium transition-all duration-200 hover:border-foreground/40 hover:bg-accent/50"
                        >
                          {Icon && (
                            <Icon className="w-3 h-3" />
                          )}
                          <span>{tech}</span>
                        </motion.div>
                      );
                    })}
                  </div>
                  
                  <div className="flex gap-3">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-background border border-border text-muted-foreground hover:text-foreground hover:border-foreground/40 hover:bg-accent/50 transition-all duration-200"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span className="text-xs font-medium">Código</span>
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-background border border-border text-muted-foreground hover:text-foreground hover:border-foreground/40 hover:bg-accent/50 transition-all duration-200"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span className="text-xs font-medium">Ver</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

