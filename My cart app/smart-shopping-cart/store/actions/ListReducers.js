//actions to add items for to-buy list

export const ADD_TOBUY_LIST = "ADD_TOBUY_LIST"; //action identifier for
//actions to remove items from to-buy list
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";

//func for action
export const addToBuyList = (product) => {
  return { type: ADD_TOBUY_LIST, product: product };
};

//action for removing
export const removeFromList = (productId) => {
  return { type: REMOVE_FROM_CART, pid: productId };
};
