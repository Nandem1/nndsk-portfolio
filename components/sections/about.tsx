"use client";

import { motion } from "motion/react";
import { Music, Gamepad2, Lightbulb, Code } from "lucide-react";

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
        
        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* Avatar/Foto */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="flex-shrink-0"
          >
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-muted to-muted/50 border border-border overflow-hidden">
              {/* Placeholder - Reemplazar con tu foto cuando la tengas */}
              <div className="w-full h-full flex items-center justify-center bg-muted">
                <span className="text-2xl font-medium text-muted-foreground">n</span>
              </div>
              {/* Cuando tengas tu foto, descomenta esto y comenta el div de arriba:
              <img 
                src="/tu-foto.jpg" 
                alt="nndsk" 
                className="w-full h-full object-cover"
              />
              */}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="flex-1 prose prose-neutral dark:prose-invert max-w-none"
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
            
            <p className="text-base text-muted-foreground leading-relaxed mb-6">
              Cuando no estoy programando, disfruto explorando nuevas tecnologías, planificando y creando prototipos para futuros proyectos. Ademas, disfruto mucho la musica y los videojuegos.
            </p>

            {/* Iconos de intereses */}
            <div className="flex flex-wrap gap-4 mt-6">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Music className="w-4 h-4" />
                <span>Música</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Gamepad2 className="w-4 h-4" />
                <span>Videojuegos</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Lightbulb className="w-4 h-4" />
                <span>Prototipos</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Code className="w-4 h-4" />
                <span>Tecnologías</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

