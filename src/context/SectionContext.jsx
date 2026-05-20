import { createContext, useContext, useState, useEffect } from "react";

const SectionContext = createContext(null);
export const useSection = () => useContext(SectionContext);


const SECTION_TO_ID = {
  profile: "profile",
  stack: "stack",
  proyectos: "projects",
};

export function SectionProvider({ children }) {
  const [activeSection, setActiveSection] = useState("profile");

  useEffect(() => {
    if (!activeSection || typeof window === "undefined") return;

    const scrollToSection = () => {
      const id = SECTION_TO_ID[activeSection] ?? activeSection;
      const el = document.getElementById(id);
      if (!el) return;
      const HEADER_OFFSET = 60; // ajustar si tu header sticky tiene otra altura
      const top =
        el.getBoundingClientRect().top + window.pageYOffset - HEADER_OFFSET;
      window.scrollTo({ top, behavior: "smooth" });
    };

    // intento inmediato + reintento corto si la sección aún no está en el DOM
    scrollToSection();
    const t = setTimeout(scrollToSection, 150);

    return () => clearTimeout(t);
  }, [activeSection]);

  return (
    <SectionContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </SectionContext.Provider>
  );
}
