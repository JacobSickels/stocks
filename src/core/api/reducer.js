import { ApiAction } from "./actions";

export default (state = {}, action) => {
  switch (action.type) {
    case ApiAction.SET_STOCK:
      return { ...state, [action.payload.symbol]: action.payload };

    default:
      return state;
  }
};
