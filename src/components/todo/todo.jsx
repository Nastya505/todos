import React from "react";
import styles from "./todo.module.css";

const Todo = ({id, title, completed, setTodos }) => {

    const [isCompleted, setIsCompleted] = React.useState(completed);

    const handleClick = () => {
        setIsCompleted(!isCompleted);
        setTodos((prevTodos) => {
          return prevTodos.map((todo) => {
            if (todo.id === id) {
              return { ...todo, completed: !isCompleted };
            }
            return todo;
          });
        });
    }
  return (
    <div
      onClick={() => handleClick()}
      className={isCompleted ? styles.todoCompleted : styles.todo}
    >
      <div>{title}</div>
    </div>
  );
};

export default Todo;
