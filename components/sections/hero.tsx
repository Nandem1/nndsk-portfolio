"use client";

import { motion } from "motion/react";
import { ThemeToggle } from "@/components/theme-toggle";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="absolute top-6 right-6">
        <ThemeToggle />
      </div>
      
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-foreground mb-6">
            nndsk
          </h1>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto"
        >
          Desarrollador Full Stack especializado en aplicaciones web modernas e IA
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#experience"
            className="inline-flex h-12 items-center justify-center rounded-full bg-foreground px-6 text-background transition-colors hover:bg-foreground/90"
          >
            Ver Experiencia
          </a>
          <a
            href="#projects"
            className="inline-flex h-12 items-center justify-center rounded-full border border-border px-6 transition-colors hover:bg-accent"
          >
            Ver Proyectos
          </a>
        </motion.div>
      </div>
    </section>
  );
}

