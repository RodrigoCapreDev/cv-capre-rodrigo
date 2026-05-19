import React from "react";
import { useLanguage } from "../context/LanguageContext.jsx";
import ScrollReveal from "./ScrollReveal.jsx";
import { SiReact, SiDjango, SiSupabase, SiPostgresql, SiDocker } from "react-icons/si";

export default function Projects() {
  const { t } = useLanguage();

  // Array de proyectos (Aquí mapeamos lo que pusimos en translations)
  const projects = [t.project1, t.project2, t.project3].filter(Boolean); // Filtramos por si hay proyectos vacíos

  return (
    <section
      id="projects"
      className="mx-auto w-full h-full mt-12 max-w-2xl px-4 pt-6 pb-8 sm:px-6"
    >
      {/* HEADER DE LA SECCIÓN */}
      <ScrollReveal>
        <div className="bg-background/85">
          <h2 className="font-mono text-lg tracking-[0.15em] text-text uppercase">
            {t.projectsTitle}
          </h2>
          <div>
            <p className="font-mono text-primary text-sm tracking-widest mt-2">
              // {t.projectsSubtitle}
            </p>
          </div>
        </div>
      </ScrollReveal>

      {/* GRID DE PROYECTOS */}
      <div className="flex flex-col gap-8 mt-6">
        {projects.map((proj, index) => (
          <ScrollReveal key={index} delay={index * 100}>
            <ProjectCard key={index} project={proj} />
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}

// Devuelve iconos coloridos de react-icons para cada tech
function getTechIcon(name) {
  const n = String(name).toLowerCase();
  if (n.includes("react")) {
    return <SiReact className="w-4 h-4" style={{ color: "#61dafb" }} />;
  }
  if (n.includes("django")) {
    return <SiDjango className="w-4 h-4" style={{ color: "#092e20" }} />;
  }
  if (n.includes("supabase")) {
    return <SiSupabase className="w-4 h-4" style={{ color: "#3ecf8e" }} />;
  }
  if (n.includes("lambda") || n.includes("aws")) {
    return (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#ff9900" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 3h12a3 3 0 013 3v12a3 3 0 01-3 3H6a3 3 0 01-3-3V6a3 3 0 013-3zm1 5a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm5 0a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm5 0a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" />
      </svg>
    );
  }
  if (n.includes("postgres")) {
    return <SiPostgresql className="w-4 h-4" style={{ color: "#336791" }} />;
  }
  if (n.includes("docker")) {
    return <SiDocker className="w-4 h-4" style={{ color: "#2496ed" }} />;
  }
  if (n.includes("azure")) {
    return (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#0078d4" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 5h6v6H3V5zm8 0h6v6h-6V5zM3 13h6v6H3v-6zm8 0h6v6h-6v-6z" />
      </svg>
    );
  }
  // fallback: icono neutro
  return <span className="w-4 h-4 rounded-full bg-current opacity-60" />;
}

// SUBCOMPONENTE: LA TARJETA "MODULO DE SISTEMA"
function ProjectCard({ project }) {
  return (
    <div className="relative flex flex-col">
      <h3 className="text-xl font-medium tracking-tight text-text
          group-hover:text-primary transition-colors duration-200 mb-2">
        {project.name}
      </h3>
      <div className="relative flex flex-col border rounded-md border-black/10 
      bg-background overflow-hidden transition-colors duration-200 group
      hover:border-primary/60 hover:bg-primary/[0.03] cursor-default 
      dark:border-white/10 
      dark:hover:border-primary/60">

        {/* Body */}
        <div className="p-5">
          <div className="flex justify-between items-center mb-4">
            <span className="font-mono text-[9px] tracking-[0.22em] text-muted">
              {project.id}
            </span>
            <div className="flex items-center gap-1.5">
              <span className="w-[5px] h-[5px] rounded-full bg-primary animate-pulse" />
              <span className="font-mono text-[9px] tracking-[0.18em] text-primary">
                {project.status}
              </span>
            </div>
          </div>
          <span className="font-mono text-[10px] tracking-[0.14em] px-2 py-1 mb-4 cursor-default
                border rounded-md border-black/10 text-secondary-text
                hover:border-primary/60 transition-colors duration-150 inline-block">
            {project.type}
          </span>

          <p className="text-md text-secondary-text leading-relaxed mb-5">
            {project.desc}
          </p>

          <div className="flex flex-wrap gap-1.5">
            {project.tech.map((tech) => (
              <span key={tech}
                className="flex items-center gap-2 rounded-md border border-black/10 bg-background/70 px-2.5 py-1 
                        font-mono text-[11px] uppercase tracking-[0.16em] text-text/90 
                        hover:-translate-y-0.5 cursor-default
                        dark:border-white/10">
                <span className="flex-shrink-0 text-current">{getTechIcon(tech)}</span>
                <span className="leading-none">{tech}</span>
              </span>
            ))}
          </div>
        </div>


      </div>
      {/* Footer */}
      <div className="mt-3 flex justify-end gap-2">
        <a href={project.github} target="_blank" rel="noreferrer"
          className="flex items-center justify-center gap-2 px-3 py-2
            font-mono text-[11px] tracking-[0.2em] text-text cursor-pointer
            border border-secondary rounded-md
            hover:text-white hover:bg-secondary/80
            dark:border-white/10
            transition-all duration-150"
          aria-label={`Open ${project.name} on GitHub (new tab)`}
        >
          <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.38 7.86 10.9.57.1.78-.25.78-.55 0-.27-.01-1-.02-1.96-3.2.7-3.88-1.42-3.88-1.42-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.25 3.33.95.1-.74.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.18-3.09-.12-.29-.51-1.46.11-3.03 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.99 0 1.99.13 2.92.39 2.2-1.49 3.17-1.18 3.17-1.18.62 1.57.24 2.74.12 3.03.74.8 1.18 1.83 1.18 3.09 0 4.42-2.69 5.4-5.25 5.68.41.36.77 1.08.77 2.18 0 1.57-.01 2.83-.01 3.22 0 .3.21.66.79.55A10.5 10.5 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z"/>
          </svg>
          <span>GITHUB</span>
        </a>
        <a href={project.demo} target="_blank" rel="noreferrer"
          className="flex items-center justify-center ml-2 gap-2 px-3 py-2
            font-mono text-[11px] tracking-[0.2em] text-text cursor-pointer
            border border-primary rounded-md bg-background
            hover:text-white hover:bg-primary/80
            transition-all duration-150"
          aria-label={`Open ${project.name} demo (new tab)`}
        >
          <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 5v14l11-7z"/>
          </svg>
          <span>DEMO</span>
        </a>
      </div>
    </div>
  );
}
