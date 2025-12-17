import { React } from "react";
import { useLanguage } from "../context/LanguageContext.jsx";

export default function Hero() {
  const { t, lang, toggleLanguage } = useLanguage(); // Sacamos los datos

  return (
    <section className="relative min-h-screen flex flex-col justify-between pt-24 pb-12 px-6 md:px-12 bg-background text-text overflow-hidden">
      {/* FONDO (Igual que antes) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-background"></div> {/* Capa base */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
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
          <button
            onClick={toggleLanguage}
            className="font-mono text-xs text-muted hover:text-white transition-colors text-right mb-1"
          >
            [ {t.langLabel}:{" "}
            <span className={lang === "es" ? "text-primary font-bold" : "opacity-50"}>
              ES
            </span>{" "}
            /{" "}
            <span className={lang === "en" ? "text-primary font-bold" : "opacity-50"}>
              EN
            </span>{" "}
            ]
          </button>
          <div>ROLE: <span className="text-text">{t.role}</span></div>
          <div>LEVEL: <span className="text-text">{t.level}</span></div>
        </div>
      </div>

      {/* CONTENIDO CENTRAL */}
      <div className="relative z-10 my-auto w-full">
        <h1 className="font-['Archivo_Black'] text-text leading-[0.85] tracking-tighter select-none flex flex-col w-full">
          <div className="self-start animate-enter-left">
            <div className="text-[13vw] md:text-[11vw] xl:text-[9rem] leading-none text-white mix-blend-difference">
              {t.title1}
            </div>
          </div>
          <div className="self-end text-right animate-enter-right">
            <div className="text-[13vw] md:text-[11vw] xl:text-[9rem] leading-none text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent opacity-90">
              {t.title2}
            </div>
          </div>
        </h1>

        <div
          className="mt-16 grid grid-cols-1 md:grid-cols-12 gap-8 border-t border-white/10 pt-8 animate-enter-left"
          style={{ animationDelay: "0.5s", animationFillMode: "backwards" }}
        >
          <div className="md:col-span-2 font-mono text-xs text-primary uppercase tracking-widest mt-1">
            {t.labelProfile}
          </div>

          <div className="md:col-span-6 text-lg md:text-xl font-light leading-relaxed text-text/80">
            {t.profileDesc}
          </div>

          <div className="md:col-span-4 font-mono text-xs flex flex-col justify-between gap-4 text-muted">
            <div className="group">
              <div className="flex justify-between border-b border-white/10 pb-1 mb-1 group-hover:border-primary transition-colors">
                <span>{t.stackCore}</span>
                <span className="text-text">PYTHON / JS / C#</span>
              </div>
            </div>
            {/* ... resto de stacks ... */}
          </div>
        </div>
      </div>

      <div className="relative z-10 flex justify-between items-end mt-4">
        <a
          href="#proyectos"
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
