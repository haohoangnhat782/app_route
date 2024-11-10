import React, { useState } from "react";
import clsx from "clsx";
import styles from "./style.module.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [active, setActive] = useState("home");

  return (
    <div className={styles.sidebarContainer}>
      <h2 className={styles.title}>ReactJS</h2>
      <nav>
        <Link
          to="/login"
          className={clsx(styles.link, {
            [styles.active]: active === "Form",
          })}
          onClick={() => setActive("Form")}
        >
          Form
        </Link>
        <Link
          to="/DynamicContent"
          className={clsx(styles.link, {
            [styles.active]: active === "DynamicContent",
          })}
          onClick={() => setActive("DynamicContent")}
        >
          Dynamic Content
        </Link>
        <Link
          to="/todolist"
          className={clsx(styles.link, {
            [styles.active]: active === "todolist",
          })}
          onClick={() => setActive("todolist")}
        >
          ToDo List
        </Link>
        <Link
          to="/theme"
          className={clsx(styles.link, {
            [styles.active]: active === "theme",
          })}
          onClick={() => setActive("theme")}
        >
          Theme
        </Link>

        <Link
          to="/CountdownTimer"
          className={clsx(styles.link, {
            [styles.active]: active === "CountdownTimer",
          })}
          onClick={() => setActive("CountdownTimer")}
        >
          Countdown Timer
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
