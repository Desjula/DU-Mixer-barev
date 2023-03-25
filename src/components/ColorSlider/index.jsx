import React from "react";
import "./style.css";

const ColorSlider = ({ baseColor, colorName, onValueChange, value }) => {
  const handleChange = (event) => {
    onValueChange(parseInt(event.target.value));
  };

  return (
    <>
      <label htmlFor={baseColor}>{colorName}</label>
      <input
        type="range"
        className={`slider slider--${baseColor}`}
        id={`${baseColor}Slider`}
        min="0"
        max="255"
        value={value}
        onChange={handleChange}
      />
    </>
  );
};

export default ColorSlider;
