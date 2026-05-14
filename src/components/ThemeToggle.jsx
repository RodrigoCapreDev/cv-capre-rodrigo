import React, { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [theme, setTheme] = useState(() => {
    try {
      const s = localStorage.getItem('theme');
      if (s === 'dark' || s === 'light') return s;
      if (typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark';
    } catch (e) { }
    return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
  });

  useEffect(() => {
    // sincroniza visual si alguien cambia el DOM por fuera
    const obs = new MutationObserver(() => {
      setTheme(document.documentElement.classList.contains('dark') ? 'dark' : 'light');
    });
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => obs.disconnect();
  }, []);

  function toggle() {
    if (typeof window !== 'undefined' && typeof window.toggleTheme === 'function') {
      window.toggleTheme();
      setTheme(document.documentElement.classList.contains('dark') ? 'dark' : 'light');
      return;
    }
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    setTheme(isDark ? 'dark' : 'light');
  }

  return (
    <button
      onClick={toggle}
      aria-pressed={theme === 'dark'}
      className="group relative w-full p-2.5 rounded-lg border border-secondary/30 bg-white/5 backdrop-blur-sm text-text hover:border-primary/50 transition-all duration-300 hover:bg-primary/10 font-mono text-xs tracking-widest uppercase"
      title={theme === 'dark' ? 'Cambiar a claro' : 'Cambiar a oscuro'}
    >
      <span className="flex items-center justify-center gap-1.5">
        {theme === 'dark' ? (
          <>
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
            <span className="text-primary">◐ DARK</span>
          </>
        ) : (
          <>
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent"></span>
            <span className="text-accent">◑ LIGHT</span>
          </>
        )}
      </span>
      <div className="absolute inset-0 rounded-lg bg-primary/0 group-hover:bg-primary/5 transition-colors pointer-events-none"></div>
    </button>
  );
}