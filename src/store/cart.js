const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

export const addToCart = (id) => {
  return {
    type: ADD_TO_CART,
    payload: {
      id: id,
      count: 1,
    },
  };
};

export const removeFromCart = (id) => {
  return {
    type: REMOVE_FROM_CART,
    payload: {
      id: id,
    },
  };
};

export default function cartReducer(state = {}, action) {
  switch (action.type) {
    case ADD_TO_CART:
      const productId = action.payload.id;
      const productCount = action.payload.count;

      return {
        ...state,
        [productId]: {
          id: productId,
          count: state[productId] ? state[productId].count + productCount : productCount,
        },
      };
    case REMOVE_FROM_CART:
      const removedProductId = action.payload.id;
      const { [removedProductId]: _, ...newState } = state;

      return newState;
    default:
      return state;
  }
}
