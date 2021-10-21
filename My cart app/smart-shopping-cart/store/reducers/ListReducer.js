//module for reducer to to-buy list

//import required data that is ITEMDETAILS
import ITEMDETAILS from "../../dummydata/ItemDetails";

//model used
import FinalItem from "../../dummydata/Final-ToBuyList";

//action module
import { ADD_TOBUY_LIST, REMOVE_FROM_CART } from "../actions/ListReducers";

//initial state for to-buy list
const initialState = {
  //for addToBuyList
  finalToBuyList: {}, //final to-buy list
  totalBill: 0,
};
//func for reducers
const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TOBUY_LIST:
      const addedProduct = action.product;
      const productPrice = parseInt(addedProduct.price);
      const productTitle = addedProduct.title;
      const productImg = addedProduct.imgUrl;

      let updatedOrNewFinalItem;

      if (state.finalToBuyList[addedProduct.productId]) {
        //already has the item then update existing one
        updatedOrNewFinalItem = new FinalItem(
          state.finalToBuyList[addedProduct.productId].quantity + 1,
          productPrice,
          productTitle,
          state.finalToBuyList[addedProduct.productId].sum + productPrice,
          productImg
        );
      } else {
        updatedOrNewFinalItem = new FinalItem(
          1,
          productPrice,
          productTitle,
          productPrice,
          productImg
        );
      }
      return {
        ...state, //copying  of old state
        finalToBuyList: {
          ...state.finalToBuyList,
          [addedProduct.productId]: updatedOrNewFinalItem,
        }, // merging old state with new state
        totalBill: state.totalBill + productPrice, //updating bill
      };

    case REMOVE_FROM_CART:
      const selectedListItem = state.finalToBuyList[action.pid];
      const currentQty = selectedListItem.quantity;
      let updatedListItems; //variable for updating whenever item gets deleted
      if (currentQty > 1) {
        //need to reduce it, not erase it
        const updatedListItem = new FinalItem(
          selectedListItem.quantity - 1,
          selectedListItem.productPrice,
          selectedListItem.productTitle,
          selectedListItem.sum - selectedListItem.productPrice,
          selectedListItem.img
        );
        updatedListItems = {
          ...state.finalToBuyList,
          [action.pid]: updatedListItem,
        };
      } else {
        updatedListItems = { ...state.finalToBuyList }; //cloning finalToBuyList
        delete updatedListItems[action.pid]; //delete it
      }
      return {
        ...state,
        finalToBuyList: updatedListItems,
        totalBill: state.totalBill - selectedListItem.productPrice,
      };
  }

  return state;
};

export default listReducer;
