import React from "react";
import styles from "./todo.module.css";

const Todo = ({ title, completed }) => {
  return (
    <div className={completed ? styles.todoCompleted : styles.todo}>
      <div>{title}</div>
    </div>
  );
};

export default Todo;
