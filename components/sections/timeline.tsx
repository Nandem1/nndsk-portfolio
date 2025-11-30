"use client";

import { motion } from "motion/react";
import type { Experience } from "@/lib/types";

interface TimelineProps {
  experiences: Experience[];
}

export function Timeline({ experiences }: TimelineProps) {
  return (
    <section id="experience" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-2xl font-medium text-foreground mb-12"
        >
          Experiencia
        </motion.h2>
        
        <div className="relative">
          {/* Línea vertical de la timeline */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-border" />
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="relative pl-14"
              >
                {/* Punto en la timeline */}
                <div className="absolute left-5 top-1.5 w-2 h-2 rounded-full bg-foreground border-2 border-background" />
                
                <div className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                    <h3 className="text-lg font-medium text-foreground">
                      {exp.position}
                    </h3>
                    <span className="text-xs text-muted-foreground">
                      {exp.duration}
                    </span>
                  </div>
                  
                  <p className="text-sm text-muted-foreground font-medium">
                    {exp.company}
                  </p>
                  
                  <p className="text-xs text-muted-foreground">
                    {exp.startDate} - {exp.endDate || "Presente"}
                  </p>
                  
                  <ul className="mt-3 space-y-1.5">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-foreground mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-xs rounded bg-muted text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

