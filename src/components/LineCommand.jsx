import { useEffect, useRef, useState } from "react";
import styles from "./Terminal.module.css";

export default function LineCommand({
  text = "",
  speed = 30,
  start = true,
  loop = false,
  prefix = "$ ",
  onComplete = () => {},
}) {
  const [display, setDisplay] = useState("");
  const [isComplete, setIsComplete] = useState(false);
  const indexRef = useRef(0);
  const mounted = useRef(false);

  useEffect(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
    };
  }, []);

  useEffect(() => {
    let timer;
    if (!start || !text) return;

    function tick() {
      if (!mounted.current) return;
      if (indexRef.current < text.length) {
        indexRef.current += 1;
        setDisplay(text.slice(0, indexRef.current));
        timer = setTimeout(tick, speed);
      } else {
        setIsComplete(true);
        if (onComplete) onComplete();
        if (loop) {
          timer = setTimeout(() => {
            indexRef.current = 0;
            setDisplay("");
            setIsComplete(false);
            tick();
          }, 1000);
        }
      }
    }

    // reset indices when text changes
    indexRef.current = 0;
    setDisplay("");
    timer = setTimeout(tick, speed);

    return () => clearTimeout(timer);
  }, [text, speed, start, loop]);

  return (
    <div className="font-mono text-sm flex justify-between items-center me-4 ml-2">
      <div className="flex items-center gap-2">
        <span className="text-slate-500">{prefix}</span>
        <span aria-live="polite">{display}</span>
        {!isComplete && <span className={styles.terminalCursor} aria-hidden="true">▍</span>}
      </div>
    </div>
  );
}
