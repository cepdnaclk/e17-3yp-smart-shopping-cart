//reducer module for fetching db
//not used

//action module
import {
  FETCH_PRODUCT_REQUEST,
  FETCH_PRODUCT_SUCCESS,
  FETCH_PRODUCT_FAILURE,
} from "../actions/productReducer";

const initialState = {
  //for fetching db
  loading: false,
  listItems: [],
  error: "",
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_PRODUCT_SUCCESS:
      return {
        loading: false,
        listItems: action.payload,
        error: "",
      };
    case FETCH_PRODUCT_FAILURE:
      return {
        loading: false,
        listItems: [],
        error: action.payload,
      };
    default:
      return { ...state };
  }
};

export default productReducer;
