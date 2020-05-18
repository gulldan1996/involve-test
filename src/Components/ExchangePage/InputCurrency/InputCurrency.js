import React from "react";
import "./InputCurrency.scss";
import Spinner from "../../Spinner/Spinner";

const InputCurrency = ({
  base,
  value,
  handlerInput,
  placeholder,
  calculateLoading,
}) => {
  return (
    <div className="input-container">
      <input
        className="input"
        type="number"
        value={value}
        onChange={(val) => handlerInput(base, val.target.value)}
        placeholder={placeholder}
      />
      {calculateLoading ? <Spinner /> : null}
    </div>
  );
};

export default InputCurrency;
