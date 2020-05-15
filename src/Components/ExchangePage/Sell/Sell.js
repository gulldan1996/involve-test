import React, { useEffect } from "react";
import "./Sell.scss";
import { connect } from "react-redux";
import {
  getListInvoice,
  loading,
  getInvoice,
  getSellList,
  getInputInvoice
} from "../../../redux/selectors";
import { getCurrencyInvoice, handleSellList, handlerInput } from "../../../redux/actions";
import InputCurrency from "../InputCurrency/InputCurrency";
import OutsideClickHandler from "react-outside-click-handler";

const Sell = ({
  listInvoice,
  invoice,
  getCurrencyInvoice,
  getSellList,
  handleSellList,
  handlerInput,
  getInputInvoice
}) => {
  useEffect(() => {
    getCurrencyInvoice(listInvoice[0]);
  }, []);

  return (
    <div className="sell">
      <h2 className="sell-title">Sell</h2>
      <OutsideClickHandler
        onOutsideClick={() => {
          handleSellList(false);
        }}
      >
        <div
          className={
            getSellList ? "sell-currency sell-currency--dec" : "sell-currency"
          }
          onClick={() => handleSellList(!getSellList)}
        >
          {invoice !== null ? invoice.name : null}
        </div>
        {getSellList ? (
          <ul className="sell-currency__list">
            {listInvoice.map((item) => (
              <li
                onClick={() => getCurrencyInvoice(item)}
                key={item.id}
                className="sell-currency__item"
              >
                {item.name}
              </li>
            ))}
          </ul>
        ) : null}
      </OutsideClickHandler>
      <div className="sell-input">
        <InputCurrency
          base="invoice"
          value={getInputInvoice}
          handlerInput={handlerInput}
          placeholder="00.00"
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  listInvoice: getListInvoice(state),
  invoice: getInvoice(state),
  loading: loading(state),
  getSellList: getSellList(state),
  getInputInvoice: getInputInvoice(state)
});

const mapDispatchToProps = (dispatch) => ({
  getCurrencyInvoice: (invoice) => dispatch(getCurrencyInvoice(invoice)),
  handleSellList: (bool) => dispatch(handleSellList(bool)),
  handlerInput: (base, amount) => dispatch(handlerInput(base, amount))
});

export default connect(mapStateToProps, mapDispatchToProps)(Sell);
