import * as actionTypes from "./actionTypes";

const initialState = {
  isBookListPage: false,
  isLoginPage: true,
  isRefreshGet: false,
};

export const reducer = (
  state = initialState,
  action: { type: string; value: boolean }
) => {
  switch (action.type) {
    case actionTypes.UPDATE_ISLOGINPAGE:
      return action.value;
    case actionTypes.UPDATE_ISBOOKLISTPAGE:
      return action.value;
    case actionTypes.UPDATE_GETBOOKS:
      return action.value;
    default:
      return state;
  }
};
