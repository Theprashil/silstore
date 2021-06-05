import { createContext, useContext } from "react";

const CartContext = createContext({
  products: [],
  carts: [],
  addProductToCart: (product) => {},
  removeProductFromCart: (productID) => {},
  clearCart: () => {},
});

export const useCartContext = () => useContext(CartContext);
export default CartContext;
