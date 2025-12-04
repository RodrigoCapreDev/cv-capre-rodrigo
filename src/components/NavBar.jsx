import { useState, useEffect } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);
  // tema: true = dark, false = light
  const [dark, setDark] = useState(() => {
    if (typeof window === "undefined") return false;
    const saved = localStorage.getItem("theme");
    if (saved) return saved === "dark";
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  const toggleTheme = () => setDark((v) => !v);

  const links = [
    { label: "Sobre mí", href: "#about" },
    { label: "Educación", href: "#education" },
    { label: "Experiencia", href: "#experience" },
    { label: "Proyectos", href: "#projects" },
    { label: "Habilidades", href: "#skills" },
    { label: "Contacto", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-primary border-b border-muted">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <a href="#" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold">
              RC
            </div>
            <div className="hidden sm:block">
              <div className="text-lg font-semibold text-text dark:text-white">
                Rodrigo Capre
              </div>
              <div className="text-sm text-secondary dark:text-muted">
                Frontend Developer
              </div>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex md:items-center md:space-x-6">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-text dark:text-white hover:text-accent dark:hover:text-accent transition"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={toggleTheme}
              aria-label="Toggle color mode"
              className="p-2 rounded-md text-text dark:text-white hover:bg-background dark:hover:bg-background"
            >
              {dark ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 3.5a.75.75 0 01.75-.75h0a.75.75 0 010 1.5H10.75A.75.75 0 0110 3.5zM10 16.25a.75.75 0 01.75-.75h0a.75.75 0 010 1.5H10.75a.75.75 0 01-.75-.75zM3.5 10a.75.75 0 01-.75-.75v0a.75.75 0 011.5 0V9.25A.75.75 0 013.5 10zM16.25 10a.75.75 0 01-.75-.75v0a.75.75 0 011.5 0V9.25a.75.75 0 01-.75.75zM5.22 5.22a.75.75 0 010-1.06.75.75 0 011.06 0l-.03.03a.75.75 0 01-1.03 1.03l-.0-.0zM14.78 14.78a.75.75 0 010-1.06.75.75 0 011.06 0l-.03.03a.75.75 0 01-1.03 1.03zM5.22 14.78a.75.75 0 010-1.06.75.75 0 011.06 0l-.03.03a.75.75 0 01-1.03 1.03zM14.78 5.22a.75.75 0 010-1.06.75.75 0 011.06 0l-.03.03a.75.75 0 01-1.03 1.03zM10 6.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M17.293 13.293A8 8 0 116.707 2.707a7 7 0 0010.586 10.586z" />
                </svg>
              )}
            </button>

            <a
              href="/CV-Rodrigo-Capre.pdf"
              className="px-3 py-2 rounded-md bg-primary text-white text-sm hover:opacity-90 transition"
            >
              Descargar CV
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
              className="p-2 rounded-md text-text dark:text-white hover:bg-background dark:hover:bg-background"
            >
              {open ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu panel */}
      <div className={`md:hidden ${open ? "block" : "hidden"} px-4 pb-4`}>
        <div className="space-y-3">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block text-text dark:text-white font-medium py-2 px-2 rounded hover:bg-background dark:hover:bg-background"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={toggleTheme}
            aria-label="Toggle color mode"
            className="w-full flex items-center justify-center gap-2 py-2 px-2 rounded hover:bg-background dark:hover:bg-background"
          >
            {dark ? "Modo claro" : "Modo oscuro"}
          </button>
          <a
            href="/CV-Rodrigo-Capre.pdf"
            className="block text-center mt-2 px-4 py-2 bg-primary text-white rounded"
          >
            Descargar CV
          </a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
