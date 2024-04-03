import React from "react";
import Todo from "../todo/todo";
import styles from "./todos.module.css";

const Todos = ({ todos, setTodos}) => {
  return (
    <div className={styles.todos}>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          id={todo.id}
          title={todo.title}
          completed={todo.completed}
          setTodos={setTodos}
        />
      ))}
    </div>
  );
};

export default Todos;
