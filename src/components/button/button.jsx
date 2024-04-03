import React from "react";
import styles from "./button.module.css";

const Button = ({ text, setFilter, isActive }) => {
  return (
    <button
      className={isActive ? styles.active : styles.btn}
      onClick={setFilter}
    >
      {text}
    </button>
  );
};

export default Button;
