import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../context/LanguageContext.jsx";
import styles from "./ProfileCard.module.css";
import ProfileLinkButton from "./ProfileLinkButton.jsx";
import { links } from "../data/socialLinks.jsx";
import { useSection } from "../context/SectionContext.jsx";

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
  const { activeSection, setActiveSection, handleScrollTo } = useSection();

  return (
    <section
      id="profile"
      className="min-h-[85vh] w-full max-w-2xl flex flex-col justify-center items-center gap-6
      mx-auto px-4 sm:px-6"
    >
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="space-y-3"
      >
        <p className="font-mono text-md tracking-[0.22em] text-text uppercase pb-2">
          Hola, soy Rodrigo
        </p>
        <p
          className="text-md text-secondary-text leading-relaxed mb-5 
        dark:text-secondary-text"
        >
          {t.profileDesc}
        </p>
      </motion.div>

      <div className="w-full max-w-md mx-auto my-1 h-px bg-gradient-to-r from-transparent via-black/10 to-transparent dark:via-white/10" />

      <AnimatePresence>
        <motion.div
          key="links"
          className="space-x-2 flex flex-row flex-wrap gap-3 justify-center"
          initial="hidden"
          animate="visible"
        >
          {links.map((link) => (
            <ProfileLinkButton
              key={link.id}
              link_id={link.id}
              link_href={link.href}
              link_colorClass={link.colorClass}
              link_variants={link.variants}
              link_icon={link.icon}
              link_label={link.label}
              link_sub={link.sub}
              link_download={link.download}
            />
          ))}
        </motion.div>
      </AnimatePresence>

      <motion.button
        type="button"
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.3, ease: "easeOut" }}
        onClick={() => {
          handleScrollTo("stack");
        }}
        aria-label="Deslizar hacia abajo"
        className="mt-1 w-32 inline-flex flex-col items-center gap-1 
        rounded-lg border border-primary/50 bg-white/60 px-3 py-2 text-[10px] uppercase tracking-[0.3em] 
        text-secondary-text/55 shadow-sm transition-colors hover:border-primary/30 
        hover:text-secondary-text 
        dark:border-white/10 dark:bg-background/60 dark:text-secondary-text/50 
        dark:hover:border-white/30 dark:hover:text-secondary-text"
      >
        <span className="text-base leading-none">↓</span>
      </motion.button>
    </section>
  );
}
