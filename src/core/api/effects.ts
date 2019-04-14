import { filter, switchMap } from "rxjs/operators";
import { combineEpics, Epic } from "redux-observable";
import {
  setStock,
  setStockSymbols,
  setStockLogo,
  setStockSeries,
  getStock,
  getStockSymbols,
  getStockSeries
} from "./actions";

import { networkGet } from "../network/actions";
import { isActionOf } from "typesafe-actions";
import { RootState } from "../RootReducer";
import { Action } from "redux";

export const getStockEffect: Epic<Action, Action, RootState, any> = action$ =>
  action$.pipe(
    filter(isActionOf(getStock)),
    switchMap(({ payload: { stockId } }) => [
      networkGet(`/stock/${stockId}/quote`, {}, setStock),
      networkGet(`/stock/${stockId}/logo`, {}, setStockLogo)
    ])
  );

export const getStockSymbolsEffect: Epic<
  Action,
  Action,
  RootState,
  any
> = action$ =>
  action$.pipe(
    filter(isActionOf(getStockSymbols)),
    switchMap(() => [
      networkGet(`/ref-data/symbols?filter=symbol,name`, {}, setStockSymbols)
    ])
  );

export const getStockSeriesEffect: Epic<
  Action,
  Action,
  RootState,
  any
> = action$ =>
  action$.pipe(
    filter(isActionOf(getStockSeries)),
    switchMap(({ payload: { stockId } }) => [
      networkGet(`/stock/${stockId}/time-series`, {}, setStockSeries)
    ])
  );

export default combineEpics(
  getStockEffect,
  getStockSymbolsEffect,
  getStockSeriesEffect
);
