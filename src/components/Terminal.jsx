import { useEffect, useMemo, useRef, useState } from "react";
import { useLanguage } from "../context/LanguageContext.jsx";
import ScrollReveal from "./ScrollReveal.jsx";
import styles from "./Terminal.module.css";
import { useSection } from "../context/SectionContext.jsx";

export default function Terminal() {
  const { setActiveSection } = useSection();
  const { t, lang } = useLanguage();
  const terminalRef = useRef(null);
  const [activeCommand, setActiveCommand] = useState("stack");
  const [isBooted, setIsBooted] = useState(false);

  const commandOptions = useMemo(
    () => [
      { id: "stack", label: lang === "es" ? "stack" : "stack" },
      { id: "proyectos", label: lang === "es" ? "proyectos" : "projects" },
      { id: "help", label: "help" },
    ],
    [lang]
  );

  const bootCommand = (commandId) => {
    setActiveCommand(commandId);
    setActiveSection(commandId);
  };

  return (
    <header
      className="mx-auto max-w-3xl px-4 sm:px-6 sticky top-4 z-50"
    >
      <div
        ref={terminalRef}
        className="flex flex-row items-center justify-between px-4 py-3 gap-3
        bg-white/80 backdrop-blur-xs dark:bg-slate-950/80
        overflow-hidden rounded-2xl border text-slate-900 shadow-lg
        dark:text-slate-100 border-slate-200 dark:border-white/10 
        dark:shadow-[0_0_0_1px_rgba(255,255,255,0.02)]"
      >

        <div className="flex gap-1.5 items-center">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-300/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
          <span className="font-mono gap-3 text-slate-700 text-[13px] tracking-[0.18em] ml-2
           dark:text-slate-300">rodrigo@dev:~</span>
        </div>


        <div className="font-mono gap-3 text-slate-700 text-[13px] tracking-[0.18em]
           dark:text-slate-300">
          <span>
            $ cat {" "}
            {activeCommand === "stack"
              ? `${t.skillsCommand}.md`
              : activeCommand === "proyectos"
                ? `${t.projectsCommand}.md`
                : `${t.helpCommand}.md`}

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
                onClick={() => bootCommand(command.id)}
                className={`px-2 py-1 text-[11px] tracking-[0.18em] transition-colors ${isActive
                  ? "border-emerald-600 dark:border-emerald-400/60 text-emerald-700 dark:text-emerald-300"
                  : "border-slate-300 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:border-emerald-600 dark:hover:border-emerald-400/30 hover:text-emerald-700 dark:hover:text-emerald-300"
                  }`}
              >
                {command.label}
              </button>
            );
          })}
        </div>
      </div>

    </header>
  );
}
