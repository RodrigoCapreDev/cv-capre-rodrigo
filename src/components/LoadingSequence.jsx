import { useEffect, useState } from 'react';
import styles from './LoadingSequence.module.css';

const SEQUENCE = [
  { cmd: true, text: 'initializing portfolio...', delay: 0 },
  { cmd: false, text: '✓ loading skills', delay: 1200 },
  { cmd: false, text: '✓ rendering projects', delay: 2400 },
  { cmd: false, text: '✓ fetching socials', delay: 3600 },
  { cmd: true, text: '', delay: 4800 },
];

export default function LoadingSequence({ onComplete }) {
  const [lines, setLines] = useState([]);

  useEffect(() => {
    const timers = SEQUENCE.map((line, i) =>
      setTimeout(() => {
        setLines(prev => [...prev, i]);
        if (i === SEQUENCE.length - 1) {
          setTimeout(() => onComplete?.(), 800);
        }
      }, line.delay)
    );

    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <div className={styles.terminal}>
      <div className={styles.header}>RODRIGO@PORTFOLIO ~</div>
      {lines.map((i) => (
        <div key={i} className={styles.line}>
          {SEQUENCE[i].cmd ? (
            <>
              <span className={styles.prompt}>$</span>
              <span className={styles.text}>{SEQUENCE[i].text}</span>
            </>
          ) : (
            <span className={styles.output}>{SEQUENCE[i].text}</span>
          )}
        </div>
      ))}
    </div>
  );
}