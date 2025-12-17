import { useLayoutEffect } from 'react';

export default function ScrollToTop() {
  useLayoutEffect(() => {
    // 1. Desactivar la restauración automática del navegador
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // 2. Forzar el scroll a 0,0 instantáneamente antes de que el navegador pinte
    window.scrollTo(0, 0);

    // 3. (Opcional) Si usas React Router en el futuro, aquí escucharías cambios de ruta
  }, []);

  return null;
}