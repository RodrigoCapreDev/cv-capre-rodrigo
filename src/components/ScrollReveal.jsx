import React, { useEffect, useRef, useState } from "react";

export default function ScrollReveal({ children, delay = 0 }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Cuando el elemento es visible, activamos el estado
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, 200);
          observer.disconnect(); // Dejamos de observar para que no se anime de nuevo al subir
        }
      },
      { threshold: 0.1 } // Se activa cuando el 10% del elemento es visible
    );

    if (element) {
      observer.observe(element);
    }

    // 2. SAFETY CHECK (Doble seguridad):
    // Si por alguna razón el observer falla al cargar rápido, verificamos manualmente.
    const checkForVisibility = () => {
      if (element) {
        const rect = element.getBoundingClientRect();
        // Si el elemento está visible en la ventana
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
           setTimeout(() => setIsVisible(true), 200);
        }
      }
    };

    setTimeout(checkForVisibility, 100);

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transform transition-all duration-1000 ease-out ${
        isVisible
          ? "opacity-100 translate-y-0 filter-blur-0"
          : "opacity-0 translate-y-20 filter-blur-sm" /* Empieza invisible y 20px más abajo */
      }`}
    >
      {children}
    </div>
  );
}
