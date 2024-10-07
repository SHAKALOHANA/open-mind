import React from "react";
import "./Buttonfloating.css";

export const FloatingButton = ({ onClick }) => {
  const handleButtonClick = () => {
    onClick(true);
  };

  return (
    <button className="floating-button" onClick={handleButtonClick}>
      질문 작성하기
    </button>
  );
};
