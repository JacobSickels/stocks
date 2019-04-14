import {
  CollectionAction,
  addToCollection,
  removeFromCollection
} from "./actions";
import { getType } from "typesafe-actions";

interface State {
  stocks: Array<any>;
}

const defaultState = {
  stocks: []
};

export default (
  state: State = defaultState,
  action: CollectionAction
): State => {
  switch (action.type) {
    case getType(addToCollection):
      const stocks = state.stocks.filter(
        ({ stockId }) => stockId !== action.payload.stockId
      );
      return {
        ...state,
        stocks: [
          ...stocks,
          { ...action.payload.stock, stockId: action.payload.stockId }
        ]
      };

    case getType(removeFromCollection):
      const filter = state.stocks.filter(
        ({ stockId }) => stockId !== action.payload.stockId
      );
      return { ...state, stocks: filter };

    default:
      return state;
  }
};
