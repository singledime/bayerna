import React from "react";
import "./styles.css";

export default function SingleTitle({ text, filled, onClick }) {
  return (
    <button
      onClick={onClick}
      className={filled ? "title-card-filled" : "title-card"}
    >
      {text}
    </button>
  );
}
