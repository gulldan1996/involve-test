import React from "react";
import "./ButtonExchange.scss";
import { Redirect } from "react-router-dom";
import Spinner from "../../Spinner/Spinner";

const ButtonExchange = ({
  base,
  amount,
  fetchCalculationData,
  invoicePayMethod,
  withdrawPayMethod,
  exchangeLoading,
}) => {
  return (
    <button
      disabled={base && amount ? false : true}
      onClick={() =>
        fetchCalculationData(
          base,
          amount,
          invoicePayMethod,
          withdrawPayMethod,
          "btn"
        )
      }
      className="button-exchange"
    >
      {exchangeLoading ? <Spinner style={{ right: 52 }} /> : "Exchange"}
      <Redirect to={exchangeLoading ? "/Details" : "/Home"} />
    </button>
  );
};

export default ButtonExchange;
