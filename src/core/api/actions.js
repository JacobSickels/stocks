export const ApiAction = {
  GET_STOCK: "[API] get stock",
  GET_STOCK_SYMBOLS: "[API] get stock symbols",
  SET_STOCK: "[API] set stock",
  SET_STOCK_SYMBOLS: "[API] set stock symbols",
  SET_STOCK_LOGO: "[API] set stock logo"
};

export const getStock = stockId => ({
  type: ApiAction.GET_STOCK,
  payload: { stockId }
});

export const getStockSymbols = () => ({
  type: ApiAction.GET_STOCK_SYMBOLS
});

export const setStock = stock => ({
  type: ApiAction.SET_STOCK,
  payload: stock
});

export const setStockLogo = logo => ({
  type: ApiAction.SET_STOCK_LOGO,
  payload: logo
});

export const setStockSymbols = stocks => ({
  type: ApiAction.SET_STOCK_SYMBOLS,
  payload: stocks
});
