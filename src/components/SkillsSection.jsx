import { useEffect, useMemo, useRef, useState } from "react";
import { useLanguage } from "../context/LanguageContext.jsx";
import ScrollReveal from "./ScrollReveal.jsx";
import styles from "./Skills.module.css";

export default function SkillsSection() {
  const { t, lang } = useLanguage();
  const skillAreas = t.skillAreas ?? [];

  return (
    <section
      className="mx-auto w-full mt-16 max-w-2xl px-4 sm:px-6"
      id="skills"
    >
      <ScrollReveal>
        <div className="rounded-2xl border border-black/10 bg-background/85 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] dark:border-white/10 dark:bg-card-bg/80">
          <div className="px-4 py-5 sm:px-6 sm:py-6">
            <div className="flex items-start gap-4 pb-2">
              <div className="flex-1 space-y-3">

                <h2 className="flex border-b border-black/10 dark:border-white/10 pb-4 items-baseline gap-3 text-3xl md:text-[2.75rem] font-medium tracking-[0.03em] text-text">
                  <span className="leading-none">{t.skillsTitle}</span>
                </h2>

                <p className="max-w-xl border-l border-primary/25 pl-3 font-mono text-sm leading-7 text-secondary-text sm:text-base">
                  {t.skillsSubtitle}
                </p>
              </div>
            </div>

            <div className="mt-6 space-y-4">
              {skillAreas.map((item) => (
                <div
                  key={item.code}
                  className="group sm:p-6 
                  hover:bg-primary hover:border hover:rounded-lg
                  dark:border dark:rounded-lg dark:border-background
                  dark:hover:border-primary/35 dark:hover:bg-background dark:hover:text-primary"
                >
                  <div className="flex items-start justify-between gap-4 border-b border-dashed border-black/10 pb-3 dark:border-white/10">
                    <div className="min-w-0">
                      {/*<div className="font-mono text-[11px] tracking-[0.24em] text-muted">
                        {item.code}
                      </div>*/}
                      <h3 className="mt-1 font-mono text-sm uppercase tracking-[0.18em] text-text sm:text-[15px]">
                        {item.label}
                      </h3>
                    </div>
                    {/*<span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-primary shadow-[0_0_8px_currentColor]" />*/}
                  </div>

                  <p className="mt-4 max-w-xl font-mono text-sm leading-6 text-secondary-text">
                    {item.summary}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-md border border-black/10 bg-background/70 px-2.5 py-1 font-mono text-[11px] uppercase tracking-[0.16em] text-text/90 dark:border-white/10"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 flex items-center justify-between border-t border-dashed border-black/10 pt-3 font-mono text-[10px] tracking-[0.22em] text-muted dark:border-white/10">
                    <span>
                      {lang === "es" ? "ESTADO: LISTO" : "STATUS: READY"}
                    </span>
                    <span>OK_</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-7 flex flex-col items-center justify-center gap-2 border-t border-black/10 pt-4 text-center font-mono text-[11px] uppercase tracking-[0.24em] text-muted dark:border-white/10 sm:flex-row sm:gap-3">
              <span>{t.skillsSignal}</span>
              <span className="text-primary/80">// {t.skillsFocus}</span>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
} 