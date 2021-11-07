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

export const refreshGet = (value: boolean) => {
  return {
    type: actionTypes.UPDATE_GETBOOKS,
    value,
  };
};
