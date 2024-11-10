import { useRef, useState } from "react";
import clsx from "clsx";
import styles from "./Styles.module.css";

function Content() {
  const [count, setCount] = useState(60);
  const timerID = useRef();

  const handleStart = () => {
    if (!timerID.current) {
      timerID.current = setInterval(() => {
        setCount((prev) => prev - 1);
      }, 1000);
    }
  };

  const handleStop = () => {
    clearInterval(timerID.current);
    timerID.current = null;
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.count}>{count}</h1>
      <div className={styles.buttonContainer}>
        <button className={clsx(styles.button)} onClick={handleStart}>
          Start
        </button>
        <button className={clsx(styles.button)} onClick={handleStop}>
          Stop
        </button>
      </div>
    </div>
  );
}

export default Content;
