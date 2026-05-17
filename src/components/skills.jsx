import { useLanguage } from "../context/LanguageContext.jsx";
import ScrollReveal from "./ScrollReveal.jsx";
import styles from "./Skills.module.css";

const SKILLS = [
  {
    category: "stackCore",
    label: "CORE",
    skills: ["PYTHON", "JS", "C#", "SQL"],
  },
  {
    category: "stackWeb",
    label: "WEB",
    skills: ["REACT", "HTML", "DJANGO"],
  },
  {
    category: "stackInfra",
    label: "DEVOPS / INFRA",
    skills: ["GIT", "GITHUB", "DOCKER", "AZURE", "LINUX"],
  },
];

export default function Skills() {
  const { t } = useLanguage();

  return (
    <section
      className="mx-auto w-full mt-12 max-w-2xl px-4 sm:px-6"
      id="skills"
    >
      <div className="w-full border rounded-xl bg-white dark:bg-background dark:border-white/10 mb-8 pb-4 !gap-0 flex items-center px-4 py-2 animate-fade-in-up">
        <span className="text gap-0">{'>'} $ ls {t.skillsTitle}</span>
        <span className={styles.terminalCursor} aria-hidden="true">▍</span>
      </div>

      <ScrollReveal>
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-white/10 pb-4">
          <div>
            <div className={styles.glitchWrapper}>
              <h2
                className={`${styles.glitchTitle} font-['Archivo_Black'] text-4xl md:text-5xl uppercase`}
                data-text={t.skillsTile}
              >
                {t.skillsTile}
              </h2>
              <p className="font-mono text-primary text-sm tracking-widest mt-2">
                // {t.skillsSubtitle}
              </p>
            </div>
            {/*}
            <h2 className="font-['Archivo_Black'] text-4xl md:text-5xl uppercase text-white bg-clip-text">
              {t.skillsTile}
            </h2>
            <p className="font-mono text-primary text-sm tracking-widest mt-2">
              // {t.skillsSubtitle}
            </p>*/}
          </div>
          <div className="font-mono text-xs text-muted hidden md:block">
            DIR: /ROOT/SKILLS
          </div>

          <div className="absolute -bottom-12 left-8 w-px h-12 bg-gradient-to-b from-primary/50 to-transparent md:hidden"></div>
        </div>

        {/* CONTENIDO */}
        <div className="relative z-10 w-full">
          {/* GRID DE SKILLS (MÓDULOS TIPO TERMINAL) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
            {SKILLS.map((item, idx) => (
              <div
                key={idx}
                className="group border border-white/10 bg-white/[0.02] p-6 rounded-md hover:border-primary hover:bg-primary/5 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
                style={{
                  animationDelay: `${idx * 0.1}s`,
                  animationFillMode: "backwards",
                }}
              >
                {/* HEADER DE LA CARD */}
                <div className="flex items-center gap-3 mb-6">
                  {/* Punto de estado con resplandor neón */}
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_currentColor] text-primary"></span>
                  <span className="font-mono text-xs tracking-[0.2em] text-white/50 group-hover:text-primary/70 transition-colors">
                    {item.label}
                  </span>
                </div>

                {/* CUERPO DE LA CARD */}
                <div className="flex flex-wrap gap-x-4 gap-y-2">
                  {(Array.isArray(item.skills)
                    ? item.skills
                    : [item.skills]
                  ).map((s, i) => (
                    <span
                      key={i}
                      className="font-mono text-[0.95rem] font-light text-white/80"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                {/* FOOTER DE LA CARD (Con borde punteado) */}
                <div className="mt-8 pt-4 border-t border-dashed border-white/10 flex justify-between items-center">
                  <span className="font-mono text-[10px] text-white/20 group-hover:text-primary/40 transition-colors">
                    STATUS: OK_
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* DESCRIPCIÓN TÉCNICA (PANELES) */}
          <div className={styles.panelsContainer}>
            {/* PANEL 1: BACKEND */}
            <div className={styles.panelCard}>
              <div className={styles.panelHeader}>
                <span className={styles.panelArrow}>{">"}</span>
                <h3 className={styles.panelTitle}>BACKEND && ARCHITECTURE</h3>
              </div>
              <p className={styles.panelText}>
                Enfocado en la construcción de APIs escalables con Django REST
                Framework y la optimización de procesos mediante lógica de
                ingeniería.
              </p>
            </div>

            {/* PANEL 2: SYSTEMS */}
            <div className={styles.panelCard}>
              <div className={styles.panelHeader}>
                <span className={styles.panelArrow}>{">"}</span>
                <h3 className={styles.panelTitle}>SYSTEMS && DEPLOYMENT</h3>
              </div>
              <p className={styles.panelText}>
                Experiencia en virtualización y orquestación de entornos
                productivos utilizando Docker, Nginx y servicios Cloud para
                despliegues robustos.
              </p>
            </div>
          </div>
        </div>

        {/* CTA HACIA PROYECTOS */}
        <div className="relative z-10 flex justify-between items-end mt-10">
          <a
            href="#proyectos"
            className="group flex items-center gap-3 font-mono text-xs cursor-pointer text-muted hover:text-primary transition-colors"
          >
            <span className="text-lg group-hover:translate-y-1 transition-transform text-primary">
              ↓
            </span>
            [ EXECUTE_PROJECTS ]
          </a>
        </div>
      </ScrollReveal>
    </section>
  );
}
