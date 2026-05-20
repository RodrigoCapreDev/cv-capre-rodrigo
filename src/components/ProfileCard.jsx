import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../context/LanguageContext.jsx";
import styles from "./ProfileCard.module.css";
import LineCommand from "./LineCommand.jsx";


const fadeUp = {
  hidden: { opacity: 0, y: 8 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.3, ease: "easeOut" },
  }),
};

export default function ProfileCard() {
  const { t } = useLanguage();
  const [showMoreInfo, setShowMoreInfo] = useState(false);
  const [showLinks, setShowLinks] = useState(false);

  const handleMoreInfo = () => {
    setShowMoreInfo(true);
  }

  return (
    <section className="min-h-[85vh] w-full max-w-2xl flex flex-col justify-center items-center gap-6
    mx-auto px-4 sm:px-6">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="space-y-3"
      >
        <p className="font-mono text-md tracking-[0.22em] text-text uppercase pb-2">
          Hola, soy Rodrigo
        </p>
        <p className="text-md text-secondary-text leading-relaxed mb-5 
        dark:text-secondary-text">
          {t.profileDesc}
        </p>
      </motion.div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={1}
        className="flex flex-row gap-4"
      >
        <button
          onClick={() => { setShowMoreInfo(true); setShowLinks(false); }}
          className={`${styles.glowBtn} px-4 py-2 w-40 font-mono text-xs tracking-[0.14em]
                bg-background/80 text-secondary-text border border-primary rounded-md
                transition-all duration-200
                shadow-[0_0_12px_rgba(var(--primary-rgb),0.12)]
                hover:bg-primary/10 hover:-translate-y-0.5
                hover:shadow-[0_0_28px_rgba(var(--primary-rgb),0.4)]`}
        >
          {t.profileMoreInfo ?? "Más info"}
        </button>

        <a
          href="/cv.pdf"
          target="_blank"
          rel="noreferrer"
          className={`${styles.glowBtn} px-4 py-2 w-40 font-mono text-xs tracking-[0.14em] text-center
                bg-background/80 text-secondary-text border border-secondary rounded-md
                transition-all duration-200
                shadow-[0_0_12px_rgba(var(--secondary-rgb),0.12)]
                hover:bg-secondary/10 hover:-translate-y-0.5
                hover:shadow-[0_0_28px_rgba(var(--secondary-rgb),0.4)]`}>
          {t.cv ?? "Mi CV"} ↓
        </a>
      </motion.div>

      <AnimatePresence>
        {showMoreInfo && (
          <motion.div
            key="more-info"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="space-y-3 w-full"
          >
            <div className="w-full pt-2 pb-2 mb-4 border-b border-black/10 rounded-md bg-background/50 text-center">
              <LineCommand
                text="> cat more_info.md"
                speed={60}
                prefix="$ "
                loop={false}
                onComplete={() => setShowLinks(true)}
              />
            </div>

            <AnimatePresence>
              {showLinks && (
                <motion.div
                  key="links"
                  className="space-y-2"
                  initial="hidden"
                  animate="visible"
                >
                  {[
                    {
                      href: "https://github.com/rodrigocapredev",
                      label: "github.com/rodrigocapredev",
                      color: "primary",
                      icon: (
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                        </svg>
                      ),
                    },
                    {
                      href: "https://linkedin.com/in/rodrigo-capre",
                      label: "linkedin.com/in/rodrigo-capre",
                      color: "secondary",
                      icon: (
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      ),
                    },
                  ].map((link, i) => (
                    <motion.a
                      key={link.href}
                      variants={fadeUp}
                      custom={i}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className={`flex items-center gap-3 px-3 py-2.5 rounded-md
                        border font-mono text-xs tracking-[0.12em]
                        transition-colors duration-150
                        ${link.color === "primary"
                          ? "border-black/10 dark:border-white/10 text-secondary-text hover:border-primary/50 hover:text-primary hover:bg-primary/5 dark:hover:border-primary/30 dark:hover:bg-primary/5"
                          : "border-black/10 dark:border-white/10 text-secondary-text hover:border-secondary/50 hover:text-secondary hover:bg-secondary/5 dark:hover:border-secondary/30 dark:hover:bg-secondary/5"
                        }`}
                    >
                      {link.icon}
                      <span className="truncate">{link.label}</span>
                      <span className="ml-auto opacity-40">↗</span>
                    </motion.a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>



      <div className={`${styles.card} relative overflow-hidden 
          rounded-xl bg-white
          shadow-sm transition-all duration-300 hover:shadow-md 
          hover:-translate-y-0.5 
          dark:border-white/10 dark:bg-card-bg/90 dark:shadow-[0_16px_50px_rgba(0,0,0,0.22)]`}>
        <div className={styles.border} />


        {/* Terminal-style header */}
        {/*
              <div className="border-b border-slate-200 pb-3 dark:border-white/10">
                <div className="font-mono text-xs text-slate-500 dark:text-muted">
                  <span className="text-primary">rodrigo</span>
                  <span className="text-slate-400 dark:text-white/40">@</span>
                  <span className="text-primary">dev</span>
                  <span className="text-slate-400 dark:text-white/40"> ~ $</span>
                  <span className="ml-2 text-slate-600 dark:text-text">cat perfil.sys</span>
                </div>
              </div>

              {/*
              <div className="flex items-center justify-between gap-4">
                <span className="font-mono text-xs uppercase tracking-widest text-primary">Perfil profesional</span>
                <span className="font-mono text-xs text-slate-400 dark:text-sky-400/60">#RC.DEV</span>
              </div>*/}

        {/*
              <div className="border-t border-slate-200 pt-4 text-center dark:border-white/10">
                <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-slate-600 dark:text-secondary-text/60">
                  Status: <span className="text-primary dark:text-success">● open_to_work</span>
                </div>
              </div>*/}
      </div>
    </section >
  );
}