
"use client";

import React from "react";
import styles from "./button.module.scss";

type ButtonProps = {
  name: string;
  type?: "button" | "submit" | "reset";
  color?: "primary" | "secondary" | "gray";
  onClick?: () => void;
};

const Button = ({
  name,
  type = "button",
  color = "primary",
  onClick,
}:ButtonProps) => {
  return (
    <button
      type={type}
      className={`${styles.button} ${styles[color]}`}
      onClick={onClick}
    >
      {name}
    </button>
  );
};

export default Button;
