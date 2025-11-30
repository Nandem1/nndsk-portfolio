"use client";

import { motion } from "motion/react";
import type { TechStack } from "@/lib/types";
import { getTechIcon, normalizeTechName } from "@/lib/tech-icons";

interface TechStackSectionProps {
  title: string;
  stacks: TechStack[];
}

export function TechStackSection({ title, stacks }: TechStackSectionProps) {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-2xl font-medium text-foreground mb-12"
        >
          {title}
        </motion.h2>
        
        <div className="space-y-12">
          {stacks.map((stack, index) => (
            <motion.div
              key={stack.category}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="space-y-4"
            >
              <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                {stack.category}
              </h3>
              
              <div className="flex flex-wrap gap-3">
                {stack.technologies.map((tech, techIndex) => {
                  const normalizedName = normalizeTechName(tech.name);
                  const Icon = getTechIcon(normalizedName);
                  
                  return (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 0.3, 
                        delay: index * 0.05 + techIndex * 0.02 
                      }}
                      whileHover={{ 
                        scale: 1.02,
                      }}
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md hover:bg-muted/50 transition-colors"
                    >
                      {Icon ? (
                        <Icon className="w-4 h-4 text-muted-foreground" />
                      ) : (
                        <div className="w-4 h-4 rounded bg-muted flex items-center justify-center">
                          <span className="text-[10px] font-medium text-muted-foreground">
                            {tech.name.charAt(0).toUpperCase()}
                          </span>
                        </div>
                      )}
                      <span className="text-sm text-foreground">
                        {tech.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

