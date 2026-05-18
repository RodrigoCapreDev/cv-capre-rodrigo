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

  useEffect(() => {
    const element = terminalRef.current;
    if (!element) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsBooted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      className="mx-auto w-full mt-16 max-w-2xl px-4 sm:px-6"
      id="skills"
    >
      <ScrollReveal>
        <div
          ref={terminalRef}
          className="overflow-hidden rounded-2xl border bg-white text-slate-900 shadow-lg dark:bg-slate-950 dark:text-slate-100 border-slate-200 dark:border-white/10 dark:shadow-[0_0_0_1px_rgba(255,255,255,0.02)]"
        >
          <div className="flex items-center justify-between gap-4 border-b bg-slate-50 dark:bg-white/[0.04] px-4 py-3 sm:px-6 border-slate-200 dark:border-white/10">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-300/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
              </div>
              <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-slate-600 dark:text-slate-300 sm:text-[11px]">
                TERMINAL / COMMANDS
              </span>
            </div>
          </div>

          <div className="px-4 py-5 sm:px-6 sm:py-6">
            <div className="space-y-4 font-mono text-sm leading-7 sm:text-[0.95rem]">
              <div className="flex items-start gap-3 text-slate-700 dark:text-slate-200">
                <span className="text-emerald-600 dark:text-emerald-400">$</span>
                <span className="text-slate-600 dark:text-slate-300">cat {" "}</span>
                <span className="text-slate-900 dark:text-slate-100">

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

              {isBooted && (
                <div className="flex flex-wrap gap-2">
                  {commandOptions.map((command) => {
                    const isActive = activeCommand === command.id;

                    return (
                      <button
                        key={command.id}
                        type="button"
                        onClick={() => bootCommand(command.id)}
                        className={`rounded-md border px-3 py-1.5 text-[11px] uppercase tracking-[0.18em] transition-colors ${isActive
                            ? "border-emerald-600 dark:border-emerald-400/60 bg-emerald-100 dark:bg-emerald-400/10 text-emerald-700 dark:text-emerald-300"
                            : "border-slate-300 dark:border-white/10 bg-slate-100 dark:bg-white/[0.03] text-slate-700 dark:text-slate-300 hover:border-emerald-600 dark:hover:border-emerald-400/30 hover:text-emerald-700 dark:hover:text-emerald-300"
                          }`}
                      >
                        {command.label}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
