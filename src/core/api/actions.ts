import { createAction, ActionType } from "typesafe-actions";

export const getStock = createAction(
  "[API] get stock",
  resolve => (stockId: string) => resolve({ stockId })
);

export const getStockSeries = createAction(
  "[API] get stock series",
  resolve => (stockId: string) => resolve({ stockId })
);

export const getStockSymbols = createAction("[API] get stock symbols");

type Stock = { symbol: string };
export const setStock = createAction(
  "[API] set stock",
  resolve => (stock: Stock) => resolve(stock)
);

type Logo = { url: string };
export const setStockLogo = createAction(
  "[API] set stock logo",
  resolve => (logo: Logo) => resolve(logo)
);

type Symbols = {};
export const setStockSymbols = createAction(
  "[API] set stock symbols",
  resolve => (stocks: Symbols) => resolve(stocks)
);

type Series = {};
export const setStockSeries = createAction(
  "[API] set stock series",
  resolve => (stockSeries: Series) => resolve(stockSeries)
);

const apiAction = {
  getStock,
  getStockSeries,
  getStockSymbols,
  setStock,
  setStockLogo,
  setStockSymbols,
  setStockSeries
};

export type ApiAction = ActionType<typeof apiAction>;
