import { AxiosRequestConfig } from "axios";
import { createAction, ActionType } from "typesafe-actions";
import { resolve } from "path";

type Response = {};
export const setNetworkResponse = createAction(
  "[NETWORK] response",
  resolve => (response: Response) => resolve({ response })
);

// export const networkGet = (path, params, successAction) => ({
//   type: NetworkAction.GET,
//   payload: { path, params, successAction }
// });

export const networkGet = createAction(
  "[NETWORK] get",
  resolve => (path: string, params: AxiosRequestConfig, successAction: any) =>
    resolve({ path, params, successAction })
);

export const addSnackbar = createAction(
  "[NETWORK] add snackbar",
  resolve => (snack: any) => resolve({ snack })
);

export const removeSnackbar = createAction(
  "[NETWORK] remove snackbar",
  resolve => (key: string) => resolve({ key })
);

const networkAction = {
  setNetworkResponse,
  networkGet,
  addSnackbar,
  removeSnackbar
};

export type NetworkAction = ActionType<typeof networkAction>;
