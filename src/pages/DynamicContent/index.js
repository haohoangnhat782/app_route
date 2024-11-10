import { useEffect, useState } from "react";
import clsx from "clsx";
import styles from "./Styles.module.css";

const tabs = ["posts", "comments", "albums"];

function Content() {
  const [posts, setPosts] = useState([]);
  const [type, setType] = useState("posts");

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((res) => res.json())
      .then((posts) => {
        setPosts(posts);
      });
  }, [type]);

  return (
    <div className={styles.container}>
      <div className={styles.tabs}>
        {tabs.map((tab) => (
          <button
            key={tab}
            className={clsx(styles.button, {
              [styles.active]: type === tab,
            })}
            onClick={() => setType(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <ul className={styles.list}>
        {posts.map((item) => (
          <li key={item.id} className={styles.listItem}>
            <div className={styles.card}>
              {Object.entries(item).map(([key, value]) => (
                <div key={key} className={styles.property}>
                  <strong>{key}:</strong> {value}
                </div>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Content;
