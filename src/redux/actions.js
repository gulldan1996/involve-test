export const ACTION_TYPE = {
  LOADING_LIST_METHODS: "LOADING_LIST_METHODS",
  GET_CURRENCY_INVOICE: "GET_CURRENCY_INVOICE",
  HANDLE_SELL_LIST: "HANDLE_SELL_LIST",
  HANDLE_BUY_LIST: "HANDLE_BUY_LIST",
  GET_CURRENCY_WITHDRAW: "GET_CURRENCY_WITHDRAW",
  CALCULATION_DATA: "CALCULATION_DATA",
  HANDLER_INPUT: "HANDLER_INPUT",
};

export const loadingListMethods = (list) => ({
  type: ACTION_TYPE.LOADING_LIST_METHODS,
  list,
});

export const getCurrencyInvoice = (invoice) => ({
  type: ACTION_TYPE.GET_CURRENCY_INVOICE,
  invoice,
});

export const getCurrencyWithdraw = (withdraw) => ({
  type: ACTION_TYPE.GET_CURRENCY_WITHDRAW,
  withdraw,
});

export const handleSellList = (bool) => ({
  type: ACTION_TYPE.HANDLE_SELL_LIST,
  bool,
});

export const handleBuyList = (bool) => ({
  type: ACTION_TYPE.HANDLE_BUY_LIST,
  bool,
});

export const handlerInput = (base, amount) => ({
  type: ACTION_TYPE.HANDLER_INPUT,
  base,
  amount,
});

const calculationData = data => {
  return ({
  type: ACTION_TYPE.CALCULATION_DATA,
  data
})}

export const fetchCalculationData = (base, amount, invoice, withdraw) => dispatch => {
  if(base && amount && invoice && withdraw) {
    fetch(
      `https://involve-it.com/test_front/api/payMethods/calculate?base=${base}&amount=${amount}&invoicePayMethod=${invoice}&withdrawPayMethod=${withdraw}`
    )
      .then((res) => res.json())
      .then((data) => dispatch(calculationData(data)));
  }
};

