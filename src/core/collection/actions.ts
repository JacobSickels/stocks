import { createAction, ActionType } from "typesafe-actions";

export const getRecentStock = createAction(
  "[COLLECTION] get stock",
  resolve => (stockId: string) => resolve({ stockId })
);

export const addToCollection = createAction(
  "[COLLECTION] add stock",
  resolve => (stockId: string, stock: any) => resolve({ stock, stockId })
);

export const removeFromCollection = createAction(
  "[COLLECTION] remove stock",
  resolve => (stockId: string) => resolve({ stockId })
);

const collectionAction = {
  getRecentStock,
  addToCollection,
  removeFromCollection
};

export type CollectionAction = ActionType<typeof collectionAction>;
