import { useEffect, useMemo, useRef, useState } from "react";
import { useLanguage } from "../context/LanguageContext.jsx";
import ScrollReveal from "./ScrollReveal.jsx";
import styles from "./Terminal.module.css";
import { useSection } from "../context/SectionContext.jsx";
import { useTheme } from "../context/ThemeContext.jsx";
import { TiThMenu } from "react-icons/ti";
import { FaGear } from "react-icons/fa6";
import { MdLightbulbOutline } from "react-icons/md";
import ResponsiveMenu from "./ResponsiveMenu.jsx";

export default function Terminal() {
  const { setActiveSection, activeSection, handleScrollTo } = useSection();
  const { t, lang, toggleLanguage } = useLanguage();
  const terminalRef = useRef(null);
  const [isBooted, setIsBooted] = useState(false);
  const [activeCommand, setActiveCommand] = useState(activeSection);
  const { theme, toggle } = useTheme();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen((prev) => !prev);
  };
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
        className="w-full flex flex-row items-center justify-between px-4 py-3 gap-2
        bg-white/80 backdrop-blur-xs dark:bg-slate-950/80
        overflow-visible rounded-2xl border text-slate-900 shadow-lg
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
          className="hidden md:block font-mono gap-3 text-slate-700 text-[13px] tracking-[0.18em]
          dark:text-slate-300 "
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

        <div className="flex flex-row gap-2 hidden md:block">
          {commandOptions.map((command) => {
            const isActive = activeCommand === command.id;

            return (
              <button
                key={command.id}
                type="button"
                onClick={handleScrollTo.bind(null, command.id)}
                className={`px-2 py-1 text-[11px] tracking-[0.18em] transition-colors ${
                  isActive
                    ? "border-emerald-600 dark:border-emerald-400/60 text-emerald-700 dark:text-emerald-300"
                    : "border-slate-300 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:border-emerald-600 dark:hover:border-emerald-400/30 hover:text-emerald-700 dark:hover:text-emerald-300"
                }`}
              >
                {command.label}
              </button>
            );
          })}
        </div>
        <div className="hidden md:flex items-center gap-1">
          <button
            type="button"
            aria-label={lang === "es" ? "Cambiar a inglés" : "Switch language"}
            aria-pressed={lang === "es"}
            onClick={toggleLanguage}
            title={lang === "es" ? "Alternar idioma" : "Toggle language"}
            className="items-center justify-center px-2 py-1 text-sm font-mono "
          >
            <span
              className={
                lang === "es"
                  ? "text-emerald-700 dark:text-emerald-300"
                  : "text-slate-700 dark:text-slate-300"
              }
              aria-hidden="true"
            >
              {lang === "es" ? "ES" : "EN"}
            </span>
            <span className="sr-only">
              {lang === "es" ? "Español seleccionado" : "English selected"}
            </span>
          </button>
          <button
            type="button"
            aria-label={lang === "es" ? "Alternar tema" : "Toggle theme"}
            aria-pressed={theme === "dark"}
            onClick={toggle}
            title={lang === "es" ? "Alternar tema" : "Toggle theme"}
            className="inline-flex items-center justify-center px-2 py-1 
            backdrop-blur-xs text-slate-900
            dark:text-slate-100"
          >
            <MdLightbulbOutline />
            <span
              className={
                theme === "dark"
                  ? "sr-only text-yellow-400"
                  : "sr-only text-slate-700"
              }
            />
          </button>
        </div>

        <div className="md:hidden">
          <TiThMenu onClick={handleOpen} />
        </div>
      </div>

      <div className="md:hidden">
        <ResponsiveMenu open={open} setOpen={setOpen} />
      </div>
    </header>
  );
}
