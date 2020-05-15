// import { createSelector } from 'reselect';

export const loading = state => state.loading;
export const getListInvoice = state => state.listMethods.invoice;
export const getListWithdraw = state => state.listMethods.withdraw;
export const getInvoice = state => state.currencyInvoice;
export const getWithdraw = state => state.currencyWithdraw;
export const getSellList = state => state.sellList;
export const getBuyList = state => state.buyList;
export const getInputInvoice = state => state.inputInvoice;
export const getInputWithdraw = state => state.inputWithdraw;
export const getCalculationData = state => state.calculationData

// export const getUsersSelector = createSelector(getUsers, users => {
//   return users;
// });