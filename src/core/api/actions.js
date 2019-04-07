export const ApiAction = {
  GET_STOCK: "[API] get stock",
  SET_STOCK: "[API] set stock"
};

export const getStock = stockId => ({
  type: ApiAction.GET_STOCK,
  payload: { stockId }
});

export const setStock = stock => ({
  type: ApiAction.SET_STOCK,
  payload: stock
});
