import * as actionTypes from "./actionTypes";

export const toggleLoginPage = (value: boolean) => {
  return {
    type: actionTypes.UPDATE_ISLOGINPAGE,
    value,
  };
};

export const toggleBookPage = (value: boolean) => {
  return {
    type: actionTypes.UPDATE_ISBOOKLISTPAGE,
    value,
  };
};

export const setRefreshGet = (value: boolean) => {
  return {
    type: actionTypes.UPDATE_GETBOOKS,
    value,
  };
};

export const setEditingBook = (value: number) => {
  return {
    type: actionTypes.UPDATE_EDITBOOK,
    value,
  };
};
