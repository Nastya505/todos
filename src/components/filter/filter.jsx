import React from "react";
import Button from "../button/button";
import styles from "./filter.module.css";

const Filter = ({ filter, setFilter }) => {
    
  const handleButtonClick = (filter) => {
    setFilter(filter);
  };

  return (
    <div className={styles.filter}>
      <Button
        text="Все"
        setFilter={() => handleButtonClick("all")}
        isActive={filter === "all"}
      />
      <Button
        text="Выполненные"
        setFilter={() => handleButtonClick("completed")}
        isActive={filter === "completed"}
      />
      <Button
        text="Невыполненные"
        setFilter={() => handleButtonClick("uncompleted")}
        isActive={filter === "uncompleted"}
      />
    </div>
  );
};

export default Filter;
