import React, { useEffect } from "react";
import "./Buy.scss";
import { connect } from "react-redux";
import {
  getListWithdraw,
  loading,
  getWithdraw,
  getBuyList,
  getInputWithdraw,
  getCalculateLoading,
} from "../../../redux/selectors";
import {
  getCurrencyWithdraw,
  handleBuyList,
  handlerInput,
} from "../../../redux/actions";
import OutsideClickHandler from "react-outside-click-handler";
import InputCurrency from "../InputCurrency/InputCurrency";

const Buy = ({
  listWithdraw,
  loading,
  withdraw,
  getCurrencyWithdraw,
  getBuyList,
  handleBuyList,
  getInputWithdraw,
  handlerInput,
  getCalculateLoading,
}) => {
  useEffect(() => {
    getCurrencyWithdraw(listWithdraw[0]);
  }, [loading, getCurrencyWithdraw, listWithdraw]);

  return (
    <div className="buy">
      <h2 className="buy-title">Buy</h2>
      <OutsideClickHandler
        onOutsideClick={() => {
          handleBuyList(false);
        }}
      >
        <div
          className={
            getBuyList ? "buy-currency buy-currency--dec" : "buy-currency"
          }
          onClick={() => handleBuyList(!getBuyList)}
        >
          {withdraw !== null ? withdraw.name : null}
        </div>

        {getBuyList ? (
          <ul className="buy-currency__list">
            {listWithdraw.map((item) => (
              <li
                onClick={() => getCurrencyWithdraw(item)}
                key={item.id}
                className="buy-currency__item"
              >
                {item.name}
              </li>
            ))}
          </ul>
        ) : null}
      </OutsideClickHandler>
      <div className="buy-input">
        <InputCurrency
          base="withdraw"
          value={getInputWithdraw}
          handlerInput={handlerInput}
          placeholder="00.00"
          calculateLoading={getCalculateLoading}
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  listWithdraw: getListWithdraw(state),
  withdraw: getWithdraw(state),
  loading: loading(state),
  getBuyList: getBuyList(state),
  getInputWithdraw: getInputWithdraw(state),
  getCalculateLoading: getCalculateLoading(state),
});

const mapDispatchToProps = (dispatch) => ({
  getCurrencyWithdraw: (withdraw) => dispatch(getCurrencyWithdraw(withdraw)),
  handleBuyList: (bool) => dispatch(handleBuyList(bool)),
  handlerInput: (base, amount) => dispatch(handlerInput(base, amount)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Buy);
