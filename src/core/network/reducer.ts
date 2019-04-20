import { NetworkAction, addSnackbar, removeSnackbar } from "./actions";
import { getType } from "typesafe-actions";

interface State {
  snacks: Array<any>;
}

const defaultState = {
  snacks: []
};

export default (state: State = defaultState, action: NetworkAction): State => {
  switch (action.type) {
    case getType(addSnackbar):
      return {
        ...state,
        snacks: [
          ...state.snacks,
          {
            key: new Date().getTime() + Math.random(),
            ...action.payload.snack,
            options: {
              ...action.payload.snack.options,
              anchorOrigin: { vertical: "top", horizontal: "center" }
            }
          }
        ]
      };

    case getType(removeSnackbar):
      return {
        ...state,
        snacks: state.snacks.filter(snack => snack.key !== action.payload.key)
      };

    default:
      return state;
  }
};
