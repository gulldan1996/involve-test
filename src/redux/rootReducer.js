import { ACTION_TYPE } from "./actions";

const initialState = {
  loading: false,
  listMethods: null,
  currencyInvoice: null,
  currencyWithdraw: null,
  sellList: false,
  buyList: false,
  calculationData: {
    base: '',
    amount: 0,
    invoicePayMethod: 0,
    withdrawPayMethod: 0
  },
  inputInvoice: '',
  inputWithdraw: '',
};

export function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPE.LOADING_LIST_METHODS: {
      const { list } = action;
      return {
        ...state,
        listMethods: list,
        loading: true
      };
    }
    case ACTION_TYPE.GET_CURRENCY_INVOICE: {
      const { invoice } = action;
      return {
        ...state,
        currencyInvoice: invoice,
        calculationData: {
          ...state.calculationData,
          invoicePayMethod: invoice.id
        },
        sellList: false,
      };
    }
    case ACTION_TYPE.GET_CURRENCY_WITHDRAW: {
      const { withdraw } = action;
      return {
        ...state,
        currencyWithdraw: withdraw,
        calculationData: {
          ...state.calculationData,
          withdrawPayMethod: withdraw.id
        },
        buyList: false,
      };
    }
    case ACTION_TYPE.HANDLE_BUY_LIST: {
      const { bool } = action;
      return {
        ...state,
        buyList: bool
      };
    }
    case ACTION_TYPE.HANDLER_INPUT: {
      const { base, amount } = action;
      if (base === 'invoice') {
        return {
          ...state,
          inputInvoice: amount,
          calculationData: {
            ...state.calculationData,
            base: base,
            amount: amount
          }
        }
      }
      if (base === 'withdraw') {
        return {
          ...state,
          inputWithdraw: amount,
          calculationData: {
            ...state.calculationData,
            base: base,
            amount: amount
          }
        }
      }
      return {
        ...state
      }
    };
    case ACTION_TYPE.HANDLE_SELL_LIST: {
      const { bool } = action;
      return {
        ...state,
        sellList: bool,
      };
    };
    case ACTION_TYPE.CALCULATION_DATA: {
      const { data } = action;
      if (state.calculationData.base === 'withdraw') {
        return {
          ...state,
          inputInvoice: data.amount
        }
      } else {
        return {
          ...state,
          inputWithdraw: data.amount
        }
      }
    }
    default:
      return state;
  }
}
