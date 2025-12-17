// src/components/Footer.jsx
import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-background border-t border-white/10 text-muted py-12 px-6 md:px-12 relative overflow-hidden">
      
      {/* Decoración de fondo */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-50"></div>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
        
        {/* Columna Izquierda: Identidad */}
        <div className="flex flex-col gap-2">
          <h2 className="font-['Archivo_Black'] text-2xl text-white tracking-tight">
            RODRIGO CAPRE
          </h2>
          <p className="font-mono text-xs max-w-xs text-text/60">
            // Ingeniería de Software, Arquitectura Cloud & Desarrollo Fullstack.
          </p>
          <div className="mt-4 flex gap-4 font-mono text-xs font-bold text-white">
            <a href="https://www.linkedin.com/in/rodrigo-capre/" className="hover:text-primary transition-colors hover:underline decoration-primary underline-offset-4">LINKEDIN ↗</a>
            <a href="#" className="hover:text-primary transition-colors hover:underline decoration-primary underline-offset-4">GITHUB ↗</a>
            <a href="mailto:tuemail@ejemplo.com" className="hover:text-primary transition-colors hover:underline decoration-primary underline-offset-4">EMAIL ✉</a>
          </div>
        </div>

        {/* Columna Derecha: Copyright & Status */}
        <div className="text-right font-mono text-[10px] md:text-xs text-text/40 flex flex-col gap-1">
          <div>SYSTEM STATUS: <span className="text-primary">OPERATIONAL</span></div>
          <div>LOC: BUENOS AIRES, AR</div>
          <div className="mt-2">© 2025 ALL RIGHTS RESERVED</div>
        </div>

      </div>
    </footer>
  );
}