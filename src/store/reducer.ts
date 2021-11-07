import * as actionTypes from "./actionTypes";

const initialState = {
  isBookPage: false,
  isLoginPage: true,
  refreshGet: false,
  isEditingBook: 0,
};

export const reducer = (
  state = initialState,
  action: { type: string; value: any }
) => {
  switch (action.type) {
    case actionTypes.UPDATE_ISLOGINPAGE:
      return { ...state, isLoginPage: action.value };
    case actionTypes.UPDATE_ISBOOKLISTPAGE:
      return { ...state, isBookPage: action.value };
    case actionTypes.UPDATE_GETBOOKS:
      return { ...state, refreshGet: action.value };
    case actionTypes.UPDATE_EDITBOOK:
      return { ...state, isEditingBook: action.value };
    default:
      return state;
  }
};
