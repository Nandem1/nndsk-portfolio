"use client";

import { motion } from "motion/react";

export function Hero() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h1 className="text-3xl sm:text-4xl font-medium tracking-tight text-foreground mb-3">
            nndsk
          </h1>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-base sm:text-lg text-muted-foreground mb-6 max-w-2xl mx-auto"
        >
          Desarrollador Full Stack especializado en aplicaciones web modernas e IA
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-3 justify-center"
        >
          <a
            href="#experience"
            className="inline-flex h-9 items-center justify-center rounded-md bg-foreground px-4 text-sm text-background transition-colors hover:bg-foreground/90"
          >
            Ver Experiencia
          </a>
          <a
            href="#projects"
            className="inline-flex h-9 items-center justify-center rounded-md border border-border px-4 text-sm transition-colors hover:bg-accent"
          >
            Ver Proyectos
          </a>
        </motion.div>
      </div>
    </section>
  );
}

