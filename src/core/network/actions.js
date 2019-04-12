export const NetworkAction = {
  GET: "[NETWORK] get",
  RESPONSE: "[NETWORK] response"
};

export const setNetworkResponse = response => ({
  type: NetworkAction.RESPONSE,
  payload: { response }
});

export const networkGet = (path, params, successAction) => ({
  type: NetworkAction.GET,
  payload: { path, params, successAction }
});
