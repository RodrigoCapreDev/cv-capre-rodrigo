import React, { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";
import { useLanguage } from "../context/LanguageContext";

export default function AsideControls() {
const { t, lang, toggleLanguage } = useLanguage();
const [message, setMessage] = useState("");

const handleLanguageToggle = () => {
  toggleLanguage();
  setMessage(`language --set ${lang === "es" ? "en" : "es"}`);
  setTimeout(() => setMessage(""), 2500);
};

useEffect(() => {
  const observer = new MutationObserver(() => {
    const isDark = document.documentElement.classList.contains("dark");
    setMessage(`theme --mode ${isDark ? "dark" : "light"}`);
    setTimeout(() => setMessage(""), 2500);
  });
  
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
  return () => observer.disconnect();
}, []);

  return (
    <aside className="fixed left-6 top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-6 bg-card-bg/80 backdrop-blur-md rounded-lg border border-secondary/20 p-6 z-50 w-auto min-h-fit">
      <div>
        <span className="text-green-400">$</span> cd /portfolio
        <br />
      </div>
      <div className="flex flex-col gap-4 w-40">
        <div className="w-full">
          <ThemeToggle />
        </div>

        <button
          onClick={handleLanguageToggle}
          className="w-full p-2.5 rounded-lg border border-secondary/30 bg-secondary/5 hover:border-secondary/50 transition-all duration-300 hover:bg-secondary/10 font-mono text-xs text-secondary uppercase tracking-wide"
        >
          [ {lang === "es" ? "ES" : "EN"} ]
        </button>

        <div className="h-6 mt-3 pt-3 border-t border-secondary/20">
          {message && (
            <div className="animate-fade-in-up text-xs font-mono text-text space-x-1">
              <span className="text-primary">$</span> 
              <span>{message}</span>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}
