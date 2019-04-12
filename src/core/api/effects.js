import { filter, switchMap } from "rxjs/operators";
import { combineEpics } from "redux-observable";
import {
  ApiAction,
  setStock,
  setStockSymbols,
  setStockLogo,
  setStockSeries
} from "./actions";

import { networkGet } from "../network/actions";

export const getStockEffect = action$ =>
  action$.pipe(
    filter(action => action.type === ApiAction.GET_STOCK),
    switchMap(({ payload: { stockId } }) => [
      networkGet(`/stock/${stockId}/quote`, {}, setStock),
      networkGet(`/stock/${stockId}/logo`, {}, setStockLogo)
    ])
  );

export const getStockSymbolsEffect = action$ =>
  action$.pipe(
    filter(action => action.type === ApiAction.GET_STOCK_SYMBOLS),
    switchMap(() => [
      networkGet(`/ref-data/symbols?filter=symbol,name`, {}, setStockSymbols)
    ])
  );

export const getStockSeriesEffect = action$ =>
  action$.pipe(
    filter(action => action.type === ApiAction.GET_STOCK_SERIES),
    switchMap(({ payload: { stockId } }) => [
      networkGet(`/stock/${stockId}/time-series`, {}, setStockSeries)
    ])
  );

export default combineEpics(
  getStockEffect,
  getStockSymbolsEffect,
  getStockSeriesEffect
);
