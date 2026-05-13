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
      className="p-2 rounded-md bg-card-bg text-text hover:bg-primary/10 transition"
      title={theme === 'dark' ? 'Cambiar a claro' : 'Cambiar a oscuro'}
    >
      {theme === 'dark' ? '🌙' : '☀️'}
    </button>
  );
}