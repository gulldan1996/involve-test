import React from "react";
import "./Details.scss";
import { connect } from "react-redux";
import { confirmDataToggle } from "../../redux/actions";
import {
  getConfirmData,
  getWithdraw,
  getInvoice,
  getInputInvoice,
  getInputWithdraw,
  getCalculationData,
  getSuccess,
} from "../../redux/selectors";
import { Redirect, Link } from "react-router-dom";
import Spinner from "../Spinner/Spinner";

const Details = ({
  withdraw,
  inputWithdraw,
  invoice,
  inputInvoice,
  confirmDataToggle,
  calculateData,
  confirmData,
  success,
}) => {
  if (!inputWithdraw && !inputInvoice) {
    return <Redirect to="/Home" />;
  }
  return (
    <div className="card-details details">
      <h2 className="details__title">Details</h2>
      <div className="details-position">
        <div className="details-position__line">
          <p className="details-position__name">Sell</p>
          <p className="details-position__value">
            {invoice !== null ? (
              `${inputInvoice} ${invoice.name}`
            ) : (
              <Redirect to="/Home" />
            )}
          </p>
        </div>
        <div className="details-position__line">
          <p className="details-position__name">Buy</p>
          <p className="details-position__value">
            {withdraw !== null ? (
              `${inputWithdraw} ${withdraw.name}`
            ) : (
              <Redirect to="/Home" />
            )}
          </p>
        </div>
      </div>
      <div className="details-btn">
        <Link to="home">
          <button className="details-btn__cancel">Cancel</button>
        </Link>
        <button
          className="details-btn__confirm"
          onClick={() => confirmDataToggle(calculateData)}
        >
          {confirmData ? (
            <Spinner style={{ right: 50 }} success={success} />
          ) : (
            "Confirm"
          )}
          <Redirect to={success !== null ? "/Success" : "/Details"} />
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  confirmData: getConfirmData(state),
  withdraw: getWithdraw(state),
  inputWithdraw: getInputWithdraw(state),
  invoice: getInvoice(state),
  inputInvoice: getInputInvoice(state),
  calculateData: getCalculationData(state),
  success: getSuccess(state),
});

const mapDispatchToProps = (dispatch) => ({
  confirmDataToggle: (calculateData) =>
    dispatch(confirmDataToggle(calculateData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Details);
