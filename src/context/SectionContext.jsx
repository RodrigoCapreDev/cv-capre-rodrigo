import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";

const SectionContext = createContext(null);
export const useSection = () => useContext(SectionContext);

export function SectionProvider({ children }) {
  const [activeSection, setActiveSection] = useState("profile");

  const sectionIds = ["profile", "stack", "projects"];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Si la sección cruza nuestro umbral visible, la seteamos como activa
          if (entry.isIntersecting) {
            console.log("Sección visible:", entry.target.id);
            setActiveSection(entry.target.id);
          }
        });
      },
      // rootMargin es la magia acá. "-50% 0px -50% 0px" significa que
      // la intersección se detecta justo en el medio exacto de la pantalla.
      { rootMargin: "-50% 0px -50% 0px" },
    );

    let timeoutId;

    const onLoaded = () => {
      timeoutId = setTimeout(() => {
        sectionIds.forEach((id) => {
          const element = document.getElementById(id);
          if (element) observer.observe(element);
        });
      }, 100); // pequeño delay para asegurar que el DOM esté listoF
      console.log(
        "Secuencia de carga completa, iniciando observación de secciones",
      );
    };

    window.addEventListener("loadingSequenceComplete", onLoaded);
    //onLoaded();

    return () => {
      window.removeEventListener("loadingSequenceComplete", onLoaded);
      sectionIds.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          if (timeoutId) clearTimeout(timeoutId);

          observer.unobserve(element);
        }
      });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleScrollTo = useCallback((sectionKey) => {
    const id = sectionKey;
    const el = document.getElementById(id);
    if (!el) return;

    const HEADER_OFFSET = 60; // ajustar si tu header sticky tiene otra altura
    const top = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;

    window.scrollTo({ top, behavior: "smooth" });
    setActiveSection(id);
  }, []);

  return (
    <SectionContext.Provider
      value={{ activeSection, setActiveSection, handleScrollTo }}
    >
      {children}
    </SectionContext.Provider>
  );
}
