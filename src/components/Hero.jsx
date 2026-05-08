import { useEffect, useRef, useState } from "react";
import styles from "./Hero.module.css";
import { useLanguage } from "../context/LanguageContext.jsx";

const COLOR_MAP = {
  kw: "#a78bfa", // keywords: while, const, catch, import, from, true
  fn: "#22c55e", // functions / valores positivos
  str: "#f59e0b", // strings
  op: "#94a3b8", // operadores y estructura
  cm: "#475569", // comentarios
  plain: "#e2e8f0",
};

const TIMING = {
  PAUSE_AFTER_TYPING: 2800,
  ERASE_DELAY: 120,
  CLEAR_DELAY: 300,
};

const TYPING_SPEED_MAP = {
  cm: 28,
  op: 40,
  default: 55,
};

const SNIPPETS = [
  [
    { t: "cm", v: "// siempre hay un problema que resolver\n" },
    { t: "kw", v: "while" },
    { t: "op", v: "( " },
    { t: "str", v: "problem" },
    { t: "op", v: " ) {\n  " },
    { t: "fn", v: "solve" },
    { t: "op", v: "()\n}" },
  ],
  [
    { t: "kw", v: "catch" },
    { t: "op", v: "( " },
    { t: "str", v: "bug" },
    { t: "op", v: " ) {\n  rodrigo." },
    { t: "fn", v: "fix" },
    { t: "op", v: "()\n}" },
  ],
  [
    { t: "kw", v: "import" },
    { t: "op", v: " { " },
    { t: "fn", v: "logic" },
    { t: "op", v: ", " },
    { t: "fn", v: "curiosity" },
    { t: "op", v: " }\n" },
    { t: "kw", v: "from" },
    { t: "str", v: ' "rodrigo"' },
  ],
];

// Componente separado para los dots navigator
function DotsNavigator({ current, snippetCount, onSelect }) {
  return (
    <div className={`flex gap-2 mt-5 ${styles.dotsNav}`}>
      {Array.from({ length: snippetCount }).map((_, i) => (
        <button
          key={i}
          aria-label={`Snippet ${i + 1}`}
          onClick={() => onSelect(i)}
          className={styles.dot}
          style={{
            background: i === current ? "var(--primary, #22c55e)" : "transparent",
            outline: `1px solid ${i === current ? "var(--primary, #22c55e)" : "rgba(255,255,255,0.2)"}`,
          }}
        />
      ))}
    </div>
  );
}

export default function Hero() {
  const { t, lang, toggleLanguage } = useLanguage();
  const typedRef = useRef(null);
  
  // Estado reactivo para el snippet actual
  const [currentSnippet, setCurrentSnippet] = useState(0);
  
  // Referencia para el timer (no necesita setState)
  const timerRef = useRef(null);
  
  // Referencia para el estado de la máquina de estados
  const stateRef = useRef({
    tokenIdx: 0,
    charIdx: 0,
    phase: "typing", // "typing" | "pause" | "erasing"
  });

  useEffect(() => {
    const state = stateRef.current;
    const snip = SNIPPETS[currentSnippet];

    function tick() {
      if (!typedRef.current) return;

      if (state.phase === "typing") {
        if (state.tokenIdx >= snip.length) {
          state.phase = "pause";
          timerRef.current = setTimeout(tick, TIMING.PAUSE_AFTER_TYPING);
          return;
        }

        const tok = snip[state.tokenIdx];
        const color = COLOR_MAP[tok.t] || COLOR_MAP.plain;

        let span;
        if (state.charIdx === 0 || tok.v[state.charIdx - 1] === "\n") {
          span = document.createElement("span");
          span.style.color = color;
          span.dataset.currentToken = "true";
          typedRef.current.appendChild(span);
        } else {
          const spans = typedRef.current.querySelectorAll("[data-current-token]");
          span = spans[spans.length - 1] || document.createElement("span");
        }

        const ch = tok.v[state.charIdx];
        if (ch === "\n") {
          span.innerHTML += "<br>";
        } else if (ch === " ") {
          span.innerHTML += "&nbsp;";
        } else {
          span.textContent += ch;
        }

        state.charIdx++;
        if (state.charIdx >= tok.v.length) {
          delete span.dataset.currentToken;
          state.charIdx = 0;
          state.tokenIdx++;
        }

        const speed = TYPING_SPEED_MAP[tok.t] ?? TYPING_SPEED_MAP.default;
        timerRef.current = setTimeout(tick, speed);
      } else if (state.phase === "pause") {
        state.phase = "erasing";
        timerRef.current = setTimeout(tick, TIMING.ERASE_DELAY);
      } else if (state.phase === "erasing") {
        if (typedRef.current) typedRef.current.innerHTML = "";
        setCurrentSnippet((prev) => (prev + 1) % SNIPPETS.length);
        state.tokenIdx = 0;
        state.charIdx = 0;
        state.phase = "typing";
        timerRef.current = setTimeout(tick, TIMING.CLEAR_DELAY);
      }
    }

    // Reset state cuando cambia el snippet
    state.tokenIdx = 0;
    state.charIdx = 0;
    state.phase = "typing";
    if (typedRef.current) typedRef.current.innerHTML = "";

    tick();

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [currentSnippet]);

  const handleSnippetSelect = (index) => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setCurrentSnippet(index);
    stateRef.current = { tokenIdx: 0, charIdx: 0, phase: "typing" };
    if (typedRef.current) typedRef.current.innerHTML = "";
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-between pt-16 pb-8 px-6 md:px-12 bg-background text-text overflow-hidden">
      {/* FONDO */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-background"></div> {/* Capa base */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--primary),transparent_70%)] opacity-10"></div>
      </div>

      {/* HEADER TÉCNICO */}
      <div className="relative z-10 w-full flex justify-between items-start border-b border-white/10 pb-6 font-mono text-xs md:text-sm tracking-wide text-muted">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2 text-primary font-bold">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            {t.systemOnline}
          </div>
          <span className="text-text font-bold tracking-widest text-lg md:text-xl">
            RODRIGO CAPRE
          </span>
        </div>

        <div className="text-right hidden md:block">
          <button
            onClick={toggleLanguage}
            className="font-mono text-xs text-muted hover:text-white transition-colors text-right mb-1"
          >
            [ {t.langLabel}:{" "}
            <span
              className={
                lang === "es" ? "text-primary font-bold" : "opacity-50"
              }
            >
              ES
            </span>{" "}
            /{" "}
            <span
              className={
                lang === "en" ? "text-primary font-bold" : "opacity-50"
              }
            >
              EN
            </span>{" "}
            ]
          </button>
          <div>
            ROLE: <span className="text-text">{t.role}</span>
          </div>
          <div>
            LEVEL: <span className="text-text">{t.level}</span>
          </div>
        </div>
      </div>

      {/* CONTENIDO CENTRAL */}
      <div className="relative z-10 my-auto w-full">
        {/* Snippet animado */}
        <div className="mb-4">
          <div
            className="font-mono font-bold leading-relaxed text-[7vw] md:text-[4vw] xl:text-[2.8rem] min-h-[6.5em] break-words whitespace-pre-line"
            style={{ color: "#e2e8f0", minHeight: "6.5em" }}
          >
            <span ref={typedRef} />
            <span className={styles.cursor} />
          </div>

        {/* Dots de navegación */}
          <DotsNavigator 
            current={currentSnippet} 
            snippetCount={SNIPPETS.length} 
            onSelect={handleSnippetSelect}
          />
        </div>

        <div
          className="mt-8 border-t border-white/10 pt-8 animate-enter-left"
          style={{ animationDelay: "0.5s", animationFillMode: "backwards" }}
        >
          <div className="font-mono text-xs text-primary uppercase tracking-widest mb-4">
            {t.labelProfile}
          </div>

          <div className="text-lg md:text-xl font-light leading-relaxed text-text/80">
            {t.profileDesc}
          </div>
        </div>
      </div>

      <div className="relative z-10 flex justify-between items-end mt-4">
        <a
          href="#proyectos"
          className="group flex items-center gap-4 font-mono text-sm cursor-pointer text-muted hover:text-primary transition-colors"
        >
          <span className="text-xl group-hover:translate-y-1 transition-transform text-primary">
            ↓
          </span>
          {t.cta}
        </a>
      </div>
    </section>
  );
}
