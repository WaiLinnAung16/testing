export const reducer = (state, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return { ...state, productLists: action.payload };
    case "ADD_TO_CART":
      const isExsited = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (isExsited) {
        return state;
      } else {
        return { ...state, cart: [...state.cart, action.payload] };
      }
    case "REMOVE_ITEM":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    default:
      return state;
  }
};
