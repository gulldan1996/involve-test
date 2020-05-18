import { ACTION_TYPE } from "./actions";

const initialState = {
  loading: false,
  listMethods: null,
  currencyInvoice: null,
  currencyWithdraw: null,
  sellList: false,
  buyList: false,
  calculationData: {
    base: "",
    amount: 0,
    invoicePayMethod: 0,
    withdrawPayMethod: 0,
  },
  inputInvoice: "",
  inputWithdraw: "",
  calculateLoading: false,
  confirmData: false,
  success: null,
  exchangeLoading: false,
};

export function rootReducer(state = initialState, action) {
  switch (action.type) {
    // Load list methods
    case ACTION_TYPE.LOADING_LIST_METHODS: {
      const { list } = action;
      return {
        ...state,
        listMethods: list,
        loading: true,
      };
    }
    // load first element and write and after rewrite
    case ACTION_TYPE.GET_CURRENCY_INVOICE: {
      const { invoice } = action;
      return {
        ...state,
        currencyInvoice: invoice,
        calculationData: {
          ...state.calculationData,
          invoicePayMethod: invoice.id,
        },
        sellList: false,
      };
    }
    // load first element and write and after rewrite
    case ACTION_TYPE.GET_CURRENCY_WITHDRAW: {
      const { withdraw } = action;
      return {
        ...state,
        currencyWithdraw: withdraw,
        calculationData: {
          ...state.calculationData,
          withdrawPayMethod: withdraw.id,
        },
        buyList: false,
      };
    }
    // toggle list open and close
    case ACTION_TYPE.HANDLE_BUY_LIST: {
      const { bool } = action;
      return {
        ...state,
        buyList: bool,
      };
    }
    // input handler
    case ACTION_TYPE.HANDLER_INPUT: {
      const { base, amount } = action;
      if (base === "invoice") {
        return {
          ...state,
          inputInvoice: amount,
          calculationData: {
            ...state.calculationData,
            base: base,
            amount: amount,
          },
        };
      }
      if (base === "withdraw") {
        return {
          ...state,
          inputWithdraw: amount,
          calculationData: {
            ...state.calculationData,
            base: base,
            amount: amount,
          },
        };
      }
      return {
        ...state,
      };
    }
    // toggle list open and close
    case ACTION_TYPE.HANDLE_SELL_LIST: {
      const { bool } = action;
      return {
        ...state,
        sellList: bool,
      };
    }
    // first make a fetch and write fetch data
    case ACTION_TYPE.CALCULATION_DATA: {
      const { data } = action;
      if (state.calculationData.base === "withdraw") {
        return {
          ...state,
          inputInvoice: data.amount,
        };
      } else {
        return {
          ...state,
          inputWithdraw: data.amount,
        };
      }
    }
    // open spinner
    case ACTION_TYPE.CALCULATE_LOADING: {
      const { bool } = action;
      return {
        ...state,
        calculateLoading: bool,
      };
    }
    // open button spinner
    case ACTION_TYPE.CONFIRM_DATA_TOGGLE: {
      const { bool } = action;
      return {
        ...state,
        confirmData: bool,
      };
    }
    // write request data in component
    case ACTION_TYPE.SUCCESS: {
      const { req } = action;
      return {
        ...state,
        success: req,
      };
    }
    // open button spinner and opacity
    case ACTION_TYPE.EXCHANGE_LOADING_TOGGLE: {
      const { bool } = action;
      return {
        ...state,
        exchangeLoading: bool,
      };
    }
    default:
      return state;
  }
}
