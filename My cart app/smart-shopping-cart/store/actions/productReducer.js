//action module for fetching db
//not used

import axios from "axios";

//types for fetching db from API
export const FETCH_PRODUCT_REQUEST = "FETCH_PRODUCT_REQUEST";
export const FETCH_PRODUCT_SUCCESS = "FETCH_PRODUCT_SUCCESS";
export const FETCH_PRODUCT_FAILURE = "FETCH_PRODUCT_FAILURE";

const fetchProductRequest = () => {
  return { type: FETCH_PRODUCT_REQUEST };
};

const fetchProductSuccess = (products) => {
  return {
    type: FETCH_PRODUCT_SUCCESS,
    payload: products,
  };
};

const fetchProductFailure = (error) => {
  return {
    type: FETCH_PRODUCT_FAILURE,
    payload: error,
  };
};

//action for getting product details from database
export const fetchFromDataBase = () => {
  return (dispatch) => {
    dispatch(fetchProductRequest());
    axios
      .get("http://192.168.8.101:3000/products")
      .then((response) => {
        const fetchProducts = response.data;
        dispatch(fetchProductSuccess(fetchProducts));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchProductFailure(errorMsg));
      });
  };
};
