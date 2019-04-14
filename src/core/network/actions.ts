import { AxiosRequestConfig } from "axios";
import { createAction, ActionType } from "typesafe-actions";

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

const networkAction = {
  setNetworkResponse,
  networkGet
};

export type NetworkAction = ActionType<typeof networkAction>;
