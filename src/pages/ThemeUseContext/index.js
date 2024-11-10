import { ThemeContext } from "./ThemeContext";
import Content from "./Content";
import { useContext } from "react";
import styles from "./style.module.css";

function Theme() {
  const context = useContext(ThemeContext);
  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={context.toggleTheme}>
        Toggle Theme
      </button>
      <Content />
    </div>
  );
}

export default Theme;
