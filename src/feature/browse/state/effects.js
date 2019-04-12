import { filter, switchMap } from "rxjs/operators";
import { combineEpics } from "redux-observable";
import { ApiAction, setStock, setStockSymbols } from "./actions";
import { networkGet } from "../network/actions";

export const getStockEffect = action$ =>
  action$.pipe(
    filter(action => action.type === ApiAction.GET_STOCK),
    switchMap(({ payload: { stockId } }) => [
      networkGet(`/stock/${stockId}/quote`, setStock)
    ])
  );

export default combineEpics(getStockEffect, getStockSymbolsEffect);
