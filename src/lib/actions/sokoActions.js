import { ADDED_TO_CART } from "./types.js";


export const addToCart = (product) => (dispatch) => {
  console.log('Product added to cart...', product);
  dispatch({
    type: ADDED_TO_CART,
    payload: product,
  });
};