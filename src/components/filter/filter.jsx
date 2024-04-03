import React, { useState } from "react";
import Button from "../button/button";
import styles from "./filter.module.css";

const Filter = ({ setFilter }) => {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (filter) => {
    setFilter(filter);
    setActiveButton(filter);
  };

  return (
    <div className={styles.filter}>
      <Button
        text="Все"
        setFilter={() => handleButtonClick("all")}
        isActive={activeButton === "all"}
      />
      <Button
        text="Выполненные"
        setFilter={() => handleButtonClick("completed")}
        isActive={activeButton === "completed"}
      />
      <Button
        text="Невыполненные"
        setFilter={() => handleButtonClick("uncompleted")}
        isActive={activeButton === "uncompleted"}
      />
    </div>
  );
};

export default Filter;
