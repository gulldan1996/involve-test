import React, { useEffect } from "react";
import "./ExchangePage.scss";
import { connect } from "react-redux";
import Sell from "./Sell/Sell";
import Buy from "./Buy/Buy";
import ButtonExchange from "./ButtonExchange/ButtonExchange";
import {
  getCalculationData,
  getConfirmData,
  getCalculateLoading,
  getExchangeLoading,
} from "../../redux/selectors";
import { fetchCalculationData, confirmDataToggle } from "../../redux/actions";

const ExchangePage = ({
  getCalculationData,
  fetchCalculationData,
  confirmDataToggle,
  confirmData,
  calculateLoading,
  exchangeLoading,
  exchangeRedirect,
}) => {
  const {
    base,
    amount,
    invoicePayMethod,
    withdrawPayMethod,
  } = getCalculationData;

  useEffect(() => {
    fetchCalculationData(base, amount, invoicePayMethod, withdrawPayMethod);
  }, [base, amount, invoicePayMethod, withdrawPayMethod, fetchCalculationData]);

  return (
    <div
      className={
        exchangeLoading
          ? "card-exchange card-exchange-opacity"
          : "card-exchange"
      }
    >
      <div className="card-position">
        <Sell />
        <Buy />
      </div>
      <div className="card-btn">
        <ButtonExchange
          confirmDataToggle={confirmDataToggle}
          confirmData={confirmData}
          base={base}
          amount={amount}
          fetchCalculationData={fetchCalculationData}
          invoicePayMethod={invoicePayMethod}
          withdrawPayMethod={withdrawPayMethod}
          calculateLoading={calculateLoading}
          exchangeLoading={exchangeLoading}
          exchangeRedirect={exchangeRedirect}
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  getCalculationData: getCalculationData(state),
  confirmData: getConfirmData(state),
  calculateLoading: getCalculateLoading(state),
  exchangeLoading: getExchangeLoading(state),
  exchangeRedirect: state.exchangeRedirect,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCalculationData: (b, a, i, w, btn) =>
    dispatch(fetchCalculationData(b, a, i, w, btn)),
  confirmDataToggle: (bool) => dispatch(confirmDataToggle(bool)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExchangePage);
