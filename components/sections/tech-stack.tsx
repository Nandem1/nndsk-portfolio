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
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-semibold tracking-tight text-foreground mb-16 text-center"
        >
          {title}
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stacks.map((stack, index) => (
            <motion.div
              key={stack.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 hover:border-foreground/20 transition-all duration-300 hover:shadow-xl hover:shadow-foreground/5"
            >
              {/* Efecto de brillo sutil en hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-foreground/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                <h3 className="text-xl font-semibold text-foreground mb-6 pb-3 border-b border-border">
                  {stack.category}
                </h3>
                
                <div className="grid grid-cols-2 gap-3">
                  {stack.technologies.map((tech, techIndex) => {
                    const normalizedName = normalizeTechName(tech.name);
                    const Icon = getTechIcon(normalizedName);
                    
                    return (
                      <motion.div
                        key={tech.name}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: 0.3, 
                          delay: index * 0.1 + techIndex * 0.05 
                        }}
                        whileHover={{ 
                          scale: 1.05,
                          y: -2
                        }}
                        className="relative"
                      >
                        <div className="flex flex-col items-center justify-center p-4 rounded-xl bg-background border border-border text-foreground transition-all duration-200 hover:border-foreground/40 hover:bg-accent/50 hover:shadow-md group/tech">
                          {Icon ? (
                            <Icon className="w-8 h-8 mb-2 text-foreground group-hover/tech:scale-110 transition-transform duration-200" />
                          ) : (
                            <div className="w-8 h-8 mb-2 rounded-full bg-muted flex items-center justify-center">
                              <span className="text-xs font-bold text-foreground/60">
                                {tech.name.charAt(0).toUpperCase()}
                              </span>
                            </div>
                          )}
                          <span className="text-xs font-medium text-center leading-tight">
                            {tech.name}
                          </span>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

