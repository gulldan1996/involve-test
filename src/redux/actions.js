export const ACTION_TYPE = {
  LOADING_LIST_METHODS: "LOADING_LIST_METHODS",
  GET_CURRENCY_INVOICE: "GET_CURRENCY_INVOICE",
  HANDLE_SELL_LIST: "HANDLE_SELL_LIST",
  HANDLE_BUY_LIST: "HANDLE_BUY_LIST",
  GET_CURRENCY_WITHDRAW: "GET_CURRENCY_WITHDRAW",
  CALCULATION_DATA: "CALCULATION_DATA",
  HANDLER_INPUT: "HANDLER_INPUT",
  CALCULATE_LOADING: "CALCULATE_LOADING",
  CONFIRM_DATA_TOGGLE: "CONFIRM_DATA_TOGGLE",
  SUCCESS: "SUCCESS",
  EXCHANGE_LOADING_TOGGLE: "EXCHANGE_LOADING_TOGGLE",
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

const calculationData = (data) => ({
  type: ACTION_TYPE.CALCULATION_DATA,
  data,
});

const calculateLoading = (bool) => ({
  type: ACTION_TYPE.CALCULATE_LOADING,
  bool,
});

const exchangeLoading = (bool, redirect) => ({
  type: ACTION_TYPE.EXCHANGE_LOADING_TOGGLE,
  bool,
  redirect,
});

export const fetchCalculationData = (
  base,
  amount,
  invoice,
  withdraw,
  btn
) => async (dispatch) => {
  if (base && amount && invoice && withdraw) {
    if (btn === "btn") {
      await dispatch(exchangeLoading(true));
      await fetch(
        `https://involve-it.com/test_front/api/payMethods/calculate?base=${base}&amount=${amount}&invoicePayMethod=${invoice}&withdrawPayMethod=${withdraw}`
      )
        .then((res) => res.json())
        .then((data) => dispatch(calculationData(data)));
      await dispatch(exchangeLoading(true, "redirect"));
      await dispatch(exchangeLoading(false));
    } else {
      await dispatch(calculateLoading(true));
      await fetch(
        `https://involve-it.com/test_front/api/payMethods/calculate?base=${base}&amount=${amount}&invoicePayMethod=${invoice}&withdrawPayMethod=${withdraw}`
      )
        .then((res) => res.json())
        .then((data) => dispatch(calculationData(data)));
      await dispatch(calculateLoading(false));
    }
  }
};

const confirmDataLoading = (bool) => {
  return {
    type: ACTION_TYPE.CONFIRM_DATA_TOGGLE,
    bool,
  };
};

const success = (req) => {
  return {
    type: ACTION_TYPE.SUCCESS,
    req,
  };
};

export const confirmDataToggle = (calculateData) => async (dispatch) => {
  const { base, amount, invoicePayMethod, withdrawPayMethod } = calculateData;
  dispatch(confirmDataLoading(true));
  await fetch("https://involve-it.com/test_front/api/bids", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ amount, base, invoicePayMethod, withdrawPayMethod }),
  })
    .then((res) => res.json())
    .then((req) =>
      req.message === "Success"
        ? dispatch(success(req))
        : dispatch(success(req))
    );
  dispatch(confirmDataLoading(false));
};
