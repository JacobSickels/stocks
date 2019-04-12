import { CollectionAction } from "./actions";

const defaultState = {
  stocks: []
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case CollectionAction.ADD_STOCK:
      const stocks = state.stocks.filter(
        ({ stockId }) => stockId !== action.payload.stockId
      );
      return {
        ...state,
        stocks: [...stocks, action.payload]
      };

    case CollectionAction.REMOVE_STOCK:
      const filter = state.stocks.filter(
        ({ stockId }) => stockId !== action.payload.stockId
      );
      return { ...state, stocks: filter };

    default:
      return state;
  }
};
