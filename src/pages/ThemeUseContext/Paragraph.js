import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import clsx from "clsx";
import styles from "./style.module.css";

function Paragraph() {
  const context = useContext(ThemeContext);
  return (
    <p
      className={clsx({
        [styles.paragraphLight]: context.theme === "light",
        [styles.paragraphDark]: context.theme === "dark",
      })}
    >
      React Hooks là một tính năng được giới thiệu trong React 16.8, cho phép
      bạn sử dụng các tính năng của React trong các functional components thay
      vì trong các class component.
    </p>
  );
}

export default Paragraph;
