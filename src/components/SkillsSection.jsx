import { useEffect, useMemo, useRef, useState } from "react";
import { useLanguage } from "../context/LanguageContext.jsx";
import ScrollReveal from "./ScrollReveal.jsx";
import styles from "./Skills.module.css";

export default function SkillsSection() {
  const { t, lang } = useLanguage();
  const skillAreas = t.skillAreas ?? [];

  return (
    <section
      className="mx-auto w-full mt-12 max-w-2xl px-4 pt-6 pb-8 sm:px-6"
      id="stack"
    >
      <ScrollReveal>
        <div className="bg-background/85">
          <h2 className="font-mono text-lg tracking-[0.15em] text-text uppercase">
            {t.skillsTitle}
          </h2>

          <div className="mt-6 space-y-4">
            {skillAreas.map((item) => (
              <div
                key={item.code}
                className="group p-5 sm:p-6 border border-black/10 rounded-lg transition-all duration-200
                            hover:border-primary/30 hover:bg-primary/[0.03] cursor-default
                            dark:border-white/[0.06] dark:bg-white/[0.01]
                            dark:hover:border-primary/30 dark:hover:bg-primary/[0.03]">
                <div className="flex items-start justify-between gap-4 border-b border-dashed border-black/10 pb-3 dark:border-white/10">
                  <div className="min-w-0">
                    <h3 className="mt-1 font-mono text-sm uppercase tracking-[0.18em] text-text sm:text-[15px]">
                      {item.label}
                    </h3>
                  </div>
                </div>

                <p className="mt-4 max-w-xl font-mono text-sm leading-6 text-secondary-text">
                  {item.summary}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md border border-black/10 bg-background/70 px-2.5 py-1 
                        font-mono text-[11px] uppercase tracking-[0.16em] text-text/90 
                        hover:border-primary/40 hover:text-primary transition-colors duration-150 cursor-default
                        dark:border-white/10"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-7 flex flex-col items-center justify-center gap-2 border-t border-black/10 pt-4 text-center font-mono text-[11px] uppercase tracking-[0.24em] text-muted dark:border-white/10 sm:flex-row sm:gap-3">
            <span>{t.skillsSignal}</span>
            <span className="text-primary/80">// {t.skillsFocus}</span>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
} 