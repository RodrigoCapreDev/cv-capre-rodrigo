import React from "react";
import { useSection } from "../context/SectionContext.jsx";
import { useLanguage } from "../context/LanguageContext.jsx";
import { useTheme } from "../context/ThemeContext.jsx";

export default function ResponsiveMenu({ open, setOpen }) {
  const { handleScrollTo } = useSection();
  const { lang, toggleLanguage } = useLanguage();
  const { theme, toggle } = useTheme();

  const handleNavigate = (sectionKey) => {
    handleScrollTo(sectionKey);
    setOpen(false);
  };

  const handleToggleTheme = () => {
    toggle();
    setOpen(false);
  };

  const handleToggleLanguage = () => {
    toggleLanguage();
    setOpen(false);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full h-screen bg-slate-900/90 backdrop-blur-sm z-50 flex flex-col items-center justify-center gap-8 transition-transform duration-300 ease-in-out ${open ? "translate-y-0" : "-translate-y-full"}`}
    >
      <button type="button" className="text-2xl text-white font-mono" onClick={() => handleNavigate("profile")}>
        Profile
      </button>
      <button type="button" className="text-2xl text-white font-mono" onClick={() => handleNavigate("stack")}>
        Stack
      </button>
      <button type="button" className="text-2xl text-white font-mono" onClick={() => handleNavigate("projects")}>
        Projects
      </button>

      <div className="mt-4 flex items-center gap-3 rounded-full border border-white/10 bg-slate-950/50 px-3 py-2">
        <button
          type="button"
          onClick={handleToggleTheme}
          aria-label={theme === "dark" ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
          className="inline-flex h-11 min-w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 px-4 text-sm font-mono text-white"
        >
          {theme === "dark" ? "☀" : "☾"}
        </button>
        <button
          type="button"
          onClick={handleToggleLanguage}
          aria-label={lang === "es" ? "Cambiar a inglés" : "Cambiar a español"}
          className="inline-flex h-11 min-w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 px-4 text-sm font-mono text-white"
        >
          {lang === "es" ? "ES" : "EN"}
        </button>
      </div>
    </div>
  );
}