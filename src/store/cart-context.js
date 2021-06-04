import { createContext } from "react";

const CartContext = createContext({
  products: [],
  carts: [],
  addProductToCart: (product) => {},
  removeProductFromCart: (productID) => {},
  clearCart: () => {},
});

export default CartContext;
