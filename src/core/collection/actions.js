export const CollectionAction = {
  GET_STOCK: "[COLLECTION] get stock",
  ADD_STOCK: "[COLLECTION] add stock",
  REMOVE_STOCK: "[COLLECTION] remove stock"
};

export const getRecentStock = stockId => ({
  type: CollectionAction.GET_STOCK,
  payload: { stockId }
});

export const addToCollection = (stock, stockId) => ({
  type: CollectionAction.ADD_STOCK,
  payload: { ...stock, stockId }
});

export const removeFromCollection = stockId => ({
  type: CollectionAction.REMOVE_STOCK,
  payload: { stockId }
});
