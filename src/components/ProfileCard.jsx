import { useLanguage } from "../context/LanguageContext.jsx";
import styles from "./ProfileCard.module.css";

export default function ProfileCard() {
  const { t } = useLanguage();

  return (
    <section className="mx-auto w-full max-w-2xl px-4 sm:px-6">
      <div className="space-y-4">
        <p className="text-[11px] uppercase tracking-[0.35em] text-secondary-text/80">
          Hola, soy Rodrigo
        </p>
        <div className="animate-fade-in-up">
          <div className={`${styles.card} relative overflow-hidden rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 dark:border-white/10 dark:bg-card-bg/90 dark:shadow-[0_16px_50px_rgba(0,0,0,0.22)]`}>
            <div className={styles.border} />

            <div className="relative space-y-6">
              {/* Terminal-style header */}
              <div className="border-b border-slate-200 pb-3 dark:border-white/10">
                <div className="font-mono text-xs text-slate-500 dark:text-muted">
                  <span className="text-primary">rodrigo</span>
                  <span className="text-slate-400 dark:text-white/40">@</span>
                  <span className="text-primary">dev</span>
                  <span className="text-slate-400 dark:text-white/40"> ~ $</span>
                  <span className="ml-2 text-slate-600 dark:text-text">cat perfil.sys</span>
                </div>
              </div>

              <div className="flex items-center justify-between gap-4">
                <span className="font-mono text-xs uppercase tracking-widest text-primary">Perfil profesional</span>
                <span className="font-mono text-xs text-slate-400 dark:text-sky-400/60">#RC.DEV</span>
              </div>

              <p className="text-sm leading-8 text-slate-700 dark:text-secondary-text md:text-[15px]">
                {t.profileDesc}
              </p>

              <div className="space-y-2 pt-2">
                <a
                  href="https://github.com/rodrigocapredev"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 rounded-lg border border-slate-300 bg-slate-50 px-3 py-2.5 font-mono text-xs tracking-[0.12em] text-slate-700 transition-colors hover:border-primary hover:bg-primary/5 hover:text-primary dark:border-emerald-500/15 dark:bg-white/0 dark:text-emerald-400 dark:hover:border-emerald-400/35 dark:hover:bg-emerald-400/5"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  <span className="truncate">github.com/rodrigocapredev</span>
                  <span className="ml-auto opacity-60">↗</span>
                </a>

                <a
                  href="https://linkedin.com/in/rodrigo-capre"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 rounded-lg border border-slate-300 bg-slate-50 px-3 py-2.5 font-mono text-xs tracking-[0.12em] text-slate-700 transition-colors hover:border-accent hover:bg-accent/5 hover:text-accent dark:border-sky-400/15 dark:bg-white/0 dark:text-sky-300 dark:hover:border-sky-300/35 dark:hover:bg-sky-300/5"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  <span className="truncate">linkedin.com/in/rodrigo-capre</span>
                  <span className="ml-auto opacity-60">↗</span>
                </a>
              </div>

              <div className="border-t border-slate-200 pt-4 text-center dark:border-white/10">
                <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-slate-600 dark:text-secondary-text/60">
                  Status: <span className="text-primary dark:text-success">● open_to_work</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}