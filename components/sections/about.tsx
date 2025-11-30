"use client";

import { motion } from "motion/react";

export function About() {
  return (
    <section id="about" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-2xl font-medium text-foreground mb-8"
        >
          Sobre mí
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="prose prose-neutral dark:prose-invert max-w-none"
        >
          <p className="text-base text-foreground leading-relaxed mb-4">
            Hola, soy nndsk. Desarrollador Full Stack apasionado por crear soluciones digitales 
            que combinan tecnología moderna con experiencia de usuario excepcional.
          </p>
          
          <p className="text-base text-foreground leading-relaxed mb-4">
            Me especializo en el desarrollo de aplicaciones web modernas, trabajando con 
            tecnologías como React, Next.js, Node.js y Go. También me interesa mucho el mundo 
            de la IA y cómo puede mejorar el desarrollo de software.
          </p>
          
          <p className="text-base text-muted-foreground leading-relaxed">
            Cuando no estoy programando, disfruto explorando nuevas tecnologías, planificando y creando prototipos para futuros proyectos. Ademas, disfruto mucho la musica y los videojuegos.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

