import React, { useEffect } from "react";
import "./ExchangePage.scss";
import { connect } from "react-redux";
import Sell from "./Sell/Sell";
import Buy from "./Buy/Buy";
import ButtonExchange from "./ButtonExchange/ButtonExchange";
import { getCalculationData } from "../../redux/selectors";
import { fetchCalculationData } from "../../redux/actions";

const ExchangePage = ({ getCalculationData, fetchCalculationData }) => {
  const { base, amount, invoicePayMethod, withdrawPayMethod } = getCalculationData;

  useEffect(() => {
    fetchCalculationData(base, amount, invoicePayMethod, withdrawPayMethod)
  }, [base, amount, invoicePayMethod, withdrawPayMethod])

  return (
  <div className="card">
    <div className="card-exchange">
      <div className="card-position">
        <Sell />
        <Buy />
      </div>
      <div className="card-btn">
        <ButtonExchange />
      </div>
    </div>
  </div>
)};

const mapStateToProps = (state) => ({
  getCalculationData: getCalculationData(state)
});

const mapDispatchToProps = (dispatch) => ({
  fetchCalculationData: (b, a, i, w) => dispatch(fetchCalculationData(b, a, i, w))
});

export default connect(mapStateToProps, mapDispatchToProps)(ExchangePage);
