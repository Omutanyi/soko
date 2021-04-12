import { ADDED_TO_CART } from "/home/javier/final_Project/soko/soko/src/lib/actions/types.js";

const initialState = {
  cart: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADDED_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    default:
      return state;
  }
}