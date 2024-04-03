import React from "react";
import Todo from "../todo/todo";
import styles from "./todos.module.css";

const Todos = ({ todos }) => {
  return (
    <div className={styles.todos}>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          title={todo.title}
          completed={todo.completed}
        />
      ))}
    </div>
  );
};

export default Todos;
