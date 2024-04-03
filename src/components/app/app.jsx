import React, { useMemo } from "react";
import Todos from "../todos/todos";
import Filter from "../filter/filter";

import styles from "./app.module.css";

function App() {
  const [todos, setTodos] = React.useState([]);
  const [filter, setFilter] = React.useState("all");

  const getTodos = async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/1/todos"
      );
    const data = await response.json();
    setTodos(data);
  };
  
  React.useEffect(() => {
    getTodos();
  }, []);
  
  const filteredTodos = useMemo(() => {
    return todos.filter((todo) => {
    if (filter === "all") {
      return true;
    }
    if (filter === "completed") {
      return todo.completed;
    }
    if (filter === "uncompleted") {
      return !todo.completed;
    }
  });
}, [todos, filter]);


  return (
    <div className={styles.app}>
      <Filter filter={filter} setFilter={setFilter} />
      <Todos todos={filteredTodos} setTodos={setTodos} />
    </div>
  );
}

export default App;
