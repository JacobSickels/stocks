import { filter, switchMap } from "rxjs/operators";
import { combineEpics, Epic } from "redux-observable";
import { addToCollection, getRecentStock } from "./actions";
import { networkGet } from "../network/actions";
import { isActionOf } from "typesafe-actions";
import { Action } from "redux";
import { RootState } from "../RootReducer";

export const getCollectionStockEffect: Epic<
  Action,
  Action,
  RootState,
  any
> = action$ =>
  action$.pipe(
    filter(isActionOf(getRecentStock)),
    switchMap(({ payload: { stockId } }) => {
      return [
        networkGet(
          `stock/${stockId}/chart/1d`,
          { params: { chartLast: 1 } },
          (response: any) => addToCollection(stockId, response[0])
        )
      ];
    })
  );

export default combineEpics(getCollectionStockEffect);
