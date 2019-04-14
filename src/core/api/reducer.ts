import { getType } from "typesafe-actions";
import {
  setStock,
  setStockSeries,
  setStockLogo,
  setStockSymbols,
  ApiAction
} from "./actions";

const defaultState: Record<string, any> = {
  logo: "",
  series: ""
};

export default (state = defaultState, action: ApiAction) => {
  switch (action.type) {
    case getType(setStock):
      return { ...state, [action.payload.symbol]: action.payload };

    case getType(setStockSeries):
      return { ...state, series: action.payload };

    case getType(setStockLogo):
      return { ...state, logo: action.payload.url };

    case getType(setStockSymbols):
      return { ...state, symbols: action.payload };

    default:
      return state;
  }
};
