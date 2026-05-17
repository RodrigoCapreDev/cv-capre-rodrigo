import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../context/LanguageContext.jsx";
import styles from "./TerminalAnimation.module.css";

const LINES = [
  { cmd: true,  text: "whoami" },
  { cmd: false, style: "outName",   text: "rodrigo capre" },
  { cmd: true,  text: "cat role.txt" },
  { cmd: false, style: "outRole",   text: "fullstack developer" },
  { cmd: true,  text: "echo $STATUS" },
  { cmd: false, style: "outStatus", text: "open_to_work" },
  { cmd: true,  text: "" },
];

const DELAYS = [0, 600, 1100, 1700, 2200, 2800, 3400];
const LOOP_INTERVAL = 6000;

export default function TerminalAnimation() {
  const [visible, setVisible] = useState([]);
  const [showCursor, setShowCursor] = useState(false);
  const timersRef = useRef([]);

  function clearTimers() {
    timersRef.current.forEach(clearTimeout);
    timersRef.current = [];
  }

  function run() {
    setVisible([]);
    setShowCursor(false);

    LINES.forEach((line, i) => {
      const t = setTimeout(() => {
        if (!line.text && line.cmd) {
          setShowCursor(true);
          return;
        }
        setVisible(prev => [...prev, i]);
      }, DELAYS[i]);
      timersRef.current.push(t);
    });

    const loop = setTimeout(() => {
      clearTimers();
      run();
    }, LOOP_INTERVAL);
    timersRef.current.push(loop);
  }

  useEffect(() => {
    run();
    return clearTimers;
  }, []);

  return (
    <div className={styles.terminal}>
      <div className={styles.header}>RODRIGO@PORTFOLIO ~</div>

      {LINES.map((line, i) => {
        if (!visible.includes(i)) return null;
        if (!line.text && line.cmd) return null;

        return (
          <div key={i} className={styles.line}>
            {line.cmd ? (
              <>
                <span className={styles.prompt}>$</span>
                <span className={styles.cmdText}>{line.text}</span>
              </>
            ) : (
              <span className={styles[line.style]}>{line.text}</span>
            )}
          </div>
        );
      })}

      {showCursor && (
        <div className={styles.cursorLine}>
          <span className={styles.prompt}>$</span>
          <span className={styles.cursor} />
        </div>
      )}
    </div>
  );
}