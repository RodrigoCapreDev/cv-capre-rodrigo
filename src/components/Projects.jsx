import React from "react";
import { useLanguage } from "../context/LanguageContext.jsx";
import ScrollReveal from "./ScrollReveal.jsx";

export default function Projects() {
  const { t } = useLanguage();

  // Array de proyectos (Aquí mapeamos lo que pusimos en translations)
  const projects = [t.project1];

  return (
    <section
      id="proyectos"
      className="min-h-screen bg-background text-text px-6 md:px-12 py-24 relative border-t border-white/10"
    >
      {/* HEADER DE LA SECCIÓN */}
      <ScrollReveal>
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-white/10 pb-4">
          <div>
            <h2 className="font-['Archivo_Black'] text-4xl md:text-6xl uppercase text-white bg-clip-text">
              {t.projectsTitle}
            </h2>
            <p className="font-mono text-primary text-sm tracking-widest mt-2">
              // {t.projectsSubtitle}
            </p>
          </div>
          <div className="font-mono text-xs text-muted hidden md:block">
            DIR: /ROOT/PROJECTS
          </div>

          <div className="absolute -bottom-12 left-8 w-px h-12 bg-gradient-to-b from-primary/50 to-transparent md:hidden"></div>
        </div>
      </ScrollReveal>

      {/* GRID DE PROYECTOS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((proj, index) => (
          <ScrollReveal key={index} delay={index * 100}>
            <ProjectCard key={index} project={proj} />
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}

// SUBCOMPONENTE: LA TARJETA "MODULO DE SISTEMA"
function ProjectCard({ project }) {
  return (
    <div className="group relative bg-card-bg border border-white/5 hover:border-primary transition-colors duration-300 flex flex-col h-full">
      {/* 1. CABECERA TÉCNICA (ID y Estado) */}
      <div className="flex justify-between items-center p-4 border-b border-white/10 bg-white/5 group-hover:bg-primary/10 transition-colors">
        <span className="font-mono text-xs text-primary font-bold tracking-wider">
          {project.id}
        </span>
        <div className="flex items-center gap-2">
          {/* Luz de estado */}
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_rgba(5,150,105,0.6)]"></span>
          <span className="font-mono text-[10px] text-primary uppercase font-bold">
            {project.status}
          </span>
        </div>
      </div>

      {/* 2. CUERPO (Contenido) */}
      <div className="p-6 flex-grow flex flex-col justify-between">
        <div>
          <h3 className="font-['Archivo_Black'] text-2xl md:text-3xl leading-tight mb-2 text-white group-hover:text-primary transition-colors">
            {project.name}
          </h3>
          <div className="font-mono text-xs text-gray-400 mb-4 border-l-2 border-primary/50 pl-2">
            {project.type}
          </div>
          <p className="font-light text-sm text-muted leading-relaxed mb-6">
            {project.desc}
          </p>
        </div>

        {/* Tags de Tecnologías */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech, i) => (
            <span
              key={i}
              className="px-2 py-1 bg-secondary/50 text-[10px] font-mono border border-white/10 text-secondary-text uppercase group-hover:border-primary group-hover:text-primary transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* 3. FOOTER (Botones de Acción Brutalistas) */}
      <div className="grid grid-cols-2 border-t border-white/20 divide-x divide-white/20">
        <a
          href="#"
          target="_blank"
          className="py-4 text-muted text-center font-mono text-xs font-bold hover:bg-white hover:text-black transition-colors uppercase flex items-center justify-center gap-2"
        >
          <span>GITHUB</span> ↗
        </a>
        <a
          href="#"
          target="_blank"
          className="py-4 text-center font-mono text-xs font-bold bg-accent hover:bg-primary hover:text-black transition-colors uppercase flex items-center justify-center gap-2"
        >
          <span>{project.linkDemo}</span> ▶
        </a>
      </div>

      {/* EFECTO DECORATIVO: Esquina cortada o detalle técnico */}
      <div className="absolute top-0 right-0 w-4 h-4 border-l border-b border-white/20 group-hover:border-primary transition-colors"></div>
    </div>
  );
}
