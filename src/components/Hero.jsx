import { useLanguage } from "../context/LanguageContext.jsx";
import TypedSnippet from "./TypedSnippet.jsx";
import ProfileCard from "./ProfileCard.jsx";
import ThemeToggle from "./ThemeToggle.jsx";
//import HeroSkillsPanel from "./HeroSkillsPanel.jsx";

export default function Hero() {
  const { t, lang, toggleLanguage } = useLanguage();

  return (
    <section className="relative min-h-screen flex flex-col justify-between pt-16 pb-8 px-8 md:px-16 bg-background text-text overflow-hidden">
      {/* FONDO */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-background"></div> {/* Capa base */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--primary),transparent_70%)] opacity-10"></div>
      </div>

      {/* HEADER TÉCNICO */}
      <div className="relative z-10 w-full flex justify-between items-start border-b border-white/10 pb-6 font-mono text-xs md:text-sm tracking-wide text-muted">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2 text-primary font-bold">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            {t.systemOnline}
          </div>
          <span className="text-text font-bold tracking-widest text-lg md:text-xl">
            RODRIGO CAPRE
          </span>
        </div>

        <div className="text-right hidden md:block">
          <div>
            <ThemeToggle />
          </div>

          <button
            onClick={toggleLanguage}
            className="font-mono text-xs text-muted hover:text-white transition-colors text-right mb-1"
          >
            [ {t.langLabel}:{" "}
            <span
              className={
                lang === "es" ? "text-primary font-bold" : "opacity-50"
              }
            >
              ES
            </span>{" "}
            /{" "}
            <span
              className={
                lang === "en" ? "text-primary font-bold" : "opacity-50"
              }
            >
              EN
            </span>{" "}
            ]
          </button>
          <div>
            ROLE: <span className="text-text">{t.role}</span>
          </div>
          <div>
            LEVEL: <span className="text-text">{t.level}</span>
          </div>
        </div>
      </div>

      {/* CONTENIDO CENTRAL */}
      <div className="relative z-10 my-auto grid grid-cols-1 md:grid-cols-2 gap-12 pt-4 animate-enter-left">
        <div className="md:col-span-1">
          <TerminalAnimation />
        </div>

        <div className="md:col-span-1">
          <ProfileCard />
        </div>

        {/*<div className="md:col-span-1">
          <HeroSkillsPanel />
        </div>*/}
      </div>

      <div className="relative z-10 flex justify-between items-end mt-4">
        <a
          href="#skills"
          className="group flex items-center gap-4 font-mono text-sm cursor-pointer text-muted hover:text-primary transition-colors"
        >
          <span className="text-xl group-hover:translate-y-1 transition-transform text-primary">
            ↓
          </span>
          {t.cta}
        </a>
      </div>
    </section>
  );
}
