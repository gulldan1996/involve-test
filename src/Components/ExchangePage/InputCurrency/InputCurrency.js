import React from "react";
import "./InputCurrency.scss";

const InputCurrency = ({ base, value, handlerInput, placeholder }) => {
  return (
    <input
      className="input"
      type="number"
      value={value}
      onChange={(val) => handlerInput(base, val.target.value)}
      placeholder={placeholder}
    />
  );
};

export default InputCurrency;
