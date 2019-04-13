import { filter, switchMap } from "rxjs/operators";
import { combineEpics } from "redux-observable";
import { CollectionAction, addToCollection } from "./actions";
import { networkGet } from "../network/actions";

export const getCollectionStockEffect = action$ =>
  action$.pipe(
    filter(action => action.type === CollectionAction.GET_STOCK),
    switchMap(({ payload: { stockId } }) => {
      return [
        networkGet(
          `stock/${stockId}/chart/1d`,
          { params: { chartLast: 1 } },
          response => addToCollection(response[0], stockId)
        )
      ];
    })
  );

export default combineEpics(getCollectionStockEffect);
