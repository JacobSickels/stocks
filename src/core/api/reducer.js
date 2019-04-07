import { ApiAction } from "./actions";

export default (state = {}, action) => {
  switch (action.type) {
    case ApiAction.SET_STOCK:
      return { ...state, [action.payload.symbol]: action.payload };

    case ApiAction.SET_STOCK_LOGO:
      return { ...state, logo: action.payload.url };

    case ApiAction.SET_STOCK_SYMBOLS:
      return { ...state, symbols: action.payload };

    default:
      return state;
  }
};
