import { useReducer, useRef } from "react";
import reducer, { initState } from "./reducer";
import { setJob, addJob, deleteJob } from "./actions";
import clsx from "clsx";
import styles from "./Style.module.css";

function Todolist() {
  const [state, dispatch] = useReducer(reducer, initState);
  const { job, jobs } = state;
  const inputRef = useRef();

  const handleSubmit = () => {
    dispatch(addJob(job));
    dispatch(setJob(""));
    inputRef.current.focus();
  };

  return (
    <div className={clsx(styles.container)}>
      <h2 className={clsx(styles.h2)}>Todo</h2>
      <input
        ref={inputRef}
        value={job}
        placeholder="Enter Job"
        onChange={(e) => dispatch(setJob(e.target.value))}
        className={clsx(styles.input)}
      />
      <button className={clsx(styles.button)} onClick={handleSubmit}>
        Add
      </button>
      <ul className={clsx(styles.list)}>
        {jobs.map((job, index) => (
          <li key={index} className={clsx(styles.listItem)}>
            {job}
            <span
              className={clsx(styles.delete)}
              onClick={() => dispatch(deleteJob(index))}
            >
              &times;
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todolist;
