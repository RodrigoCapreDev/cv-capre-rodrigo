import { useEffect, useMemo, useRef, useState } from "react";
import { useLanguage } from "../context/LanguageContext.jsx";
import ScrollReveal from "./ScrollReveal.jsx";
import styles from "./Terminal.module.css";
import { useSection } from "../context/SectionContext.jsx";
import { useTheme } from "../context/ThemeContext.jsx";

export default function Terminal() {
  const { setActiveSection, activeSection, handleScrollTo } = useSection();
  const { t, lang, toggleLanguage } = useLanguage();
  const terminalRef = useRef(null);
  const [isBooted, setIsBooted] = useState(false);
  const [activeCommand, setActiveCommand] = useState(activeSection);
  const { theme, toggle } = useTheme();

  const commandOptions = useMemo(
    () => [
      { id: "profile", label: lang === "es" ? "perfil" : "profile" },
      { id: "stack", label: lang === "es" ? "stack" : "stack" },
      { id: "projects", label: lang === "es" ? "proyectos" : "projects" },
    ],
    [lang],
  );

  useEffect(() => {
    activeCommand !== activeSection && setActiveCommand(activeSection);
  }, [activeSection]);

  return (
    <header className="mx-auto max-w-3xl px-4 sm:px-6 sticky top-4 z-50 relative">
      <div
        ref={terminalRef}
        className="w-full flex flex-row items-center justify-between px-4 py-3 gap-3
        bg-white/80 backdrop-blur-xs dark:bg-slate-950/80
        overflow-hidden rounded-2xl border text-slate-900 shadow-lg
        dark:text-slate-100 border-slate-200 dark:border-white/10 
        dark:shadow-[0_0_0_1px_rgba(255,255,255,0.02)]"
      >
        <div className="flex gap-1.5 items-center">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-300/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
          <span
            className="font-mono gap-3 text-slate-700 text-[13px] tracking-[0.18em] ml-2
           dark:text-slate-300"
          >
            rodrigo@dev:~
          </span>
        </div>

        <div
          className="font-mono gap-3 text-slate-700 text-[13px] tracking-[0.18em]
           dark:text-slate-300"
        >
          <span>
            $ cat{" "}
            {activeCommand === "profile"
              ? `${t.profileCommand}.md`
              : activeCommand === "stack"
                ? `${t.stackCommand}.md`
                : `${t.projectsCommand}.md`}
            <span className={styles.terminalCursor} aria-hidden="true">
              ▍
            </span>
          </span>
        </div>

        <div className="flex gap-2">
          {commandOptions.map((command) => {
            const isActive = activeCommand === command.id;

            return (
              <button
                key={command.id}
                type="button"
                onClick={handleScrollTo.bind(null, command.id)}
                className={`px-2 py-1 text-[11px] tracking-[0.18em] transition-colors ${isActive
                  ? "border-emerald-600 dark:border-emerald-400/60 text-emerald-700 dark:text-emerald-300"
                  : "border-slate-300 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:border-emerald-600 dark:hover:border-emerald-400/30 hover:text-emerald-700 dark:hover:text-emerald-300"
                  }`}
              >
                {command.label}
              </button>);
          })}
        </div>
      </div>

      <button
        type="button"
        aria-label={lang === "es" ? "Alternar tema" : "Toggle theme"}
        aria-pressed={theme === "dark"}
        onClick={toggle}
        title={lang === "es" ? "Alternar tema" : "Toggle theme"}
        className="absolute -right-12 top-1/2 -translate-y-1/2 inline-flex items-center justify-center px-3 py-2 
        bg-white/80 backdrop-blur-xs dark:bg-slate-950/80
        overflow-hidden rounded-2xl border text-slate-900
        dark:text-slate-100 border-slate-200 dark:border-white/10"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
          <g fill="currentColor">
            <circle cx="12" cy="8.5" r="4" />
            <rect x="10" y="16" width="4" height="3" rx="0.5" />
          </g>
          <path d="M12 2a6 6 0 00-4 10.2V14a2 2 0 002 2h4a2 2 0 002-2v-1.8A6 6 0 0012 2z" stroke="currentColor" strokeWidth="0.6" opacity="0.9" />
        </svg>
        <span className={theme === "dark" ? "sr-only text-yellow-400" : "sr-only text-slate-700"} />
      </button>

      <button
        type="button"
        aria-label={lang === "es" ? "Cambiar a inglés" : "Switch language"}
        aria-pressed={lang === "es"}
        onClick={toggleLanguage}
        title={lang === "es" ? "Alternar idioma" : "Toggle language"}
        className="absolute -right-32 top-1/2 -translate-y-1/2 inline-flex items-center justify-center gap-2 px-3 py-2 rounded-full bg-white/90 dark:bg-slate-800/80 shadow-sm border border-slate-200 dark:border-white/10 text-sm font-mono focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false" className={lang === "es" ? "text-emerald-600" : "text-slate-700"}>
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="12" cy="12" r="3" fill="currentColor" />
        </svg>
        <span className={lang === "es" ? "text-emerald-700 dark:text-emerald-300" : "text-slate-700 dark:text-slate-300"} aria-hidden="true">{lang === "es" ? "ES" : "EN"}</span>
        <span className="sr-only">{lang === "es" ? "Español seleccionado" : "English selected"}</span>
      </button>
    </header>

  );
}
