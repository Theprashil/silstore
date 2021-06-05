import { useReducer } from "react";
import CartContext from "./cart-context";
import Reducer from "./Reducer";

export default function GlobalState(props) {
  const [state, dispatch] = useReducer(Reducer, { carts: [] });

  const products = [
    {
      id: 1,
      name: "Ripple Pandora",
      description: "A perfect made in Nepal",
      price: 800,
      img: "https://images.freeimages.com/images/large-previews/ac0/cat-1364386.jpg",
    },
    {
      id: 2,
      name: "Dell 3300",
      description: "Value for money",
      price: 1600,
      img: "https://images.freeimages.com/images/large-previews/ac0/cat-1364386.jpg",
    },
    {
      id: 3,
      name: "Hp 1234",
      description: "Won't let you down",
      price: 1900,
      img: "https://images.freeimages.com/images/large-previews/ac0/cat-1364386.jpg",
    },
    {
      id: 4,
      name: "Riplle Raze",
      description: "Good speed good money",
      price: 1600,
      img: "https://images.freeimages.com/images/large-previews/ac0/cat-1364386.jpg",
    },
    {
      id: 5,
      name: "Apple Macbook",
      description: "Very Expensive but worth it",
      price: 3600,
      img: "https://images.freeimages.com/images/large-previews/ac0/cat-1364386.jpg",
    },
    {
      id: 6,
      name: "Vostro Peice",
      description: "Great performance",
      price: 1700,
      img: "https://images.freeimages.com/images/large-previews/ac0/cat-1364386.jpg",
    },
  ];

  //Add product to cart
  const addProductToCart = (product) => {
    dispatch({
      type: "ADD",
      payload: product,
    });
  };

  // remove product from cart
  const removeProductFromCart = (productID) => {
    dispatch({
      type: "REMOVE",
      payload: productID,
    });
  };

  // clear cart
  const clearCart = () => {
    dispatch({
      type: "CLEAR",
    });
  };

  return (
    <CartContext.Provider
      value={{
        products: products,
        carts: state.carts,
        totalAmount: state.totalAmount,
        addProductToCart: addProductToCart,
        removeProductFromCart: removeProductFromCart,
        clearCart: clearCart,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
}
