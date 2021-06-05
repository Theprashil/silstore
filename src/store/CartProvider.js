import { useReducer } from "react";
import CartContext from "./cart-context";
import Reducer from "./Reducer";

//Importing Images
import artifact from "../assets/artifact-pro.png";
import inspiron1 from "../assets/inspiron1.webp";
import zenbook from "../assets/zenbook.png";
import acer from "../assets/acer.png";
import chromebook from "../assets/chromebook.webp";
import slimlenovo from "../assets/slimlenovo.webp";

export default function GlobalState(props) {
  const [state, dispatch] = useReducer(Reducer, { carts: [] });

  const products = [
    {
      id: 1,
      name: "Asus Zenbook Pro",
      description:
        "A professional grade thin and light laptop that combines unprecedented performance with unrivalled style ",
      price: 1600,
      img: zenbook,
    },
    {
      id: 2,
      name: "Acer Swift 3",
      description:
        "Perform at your very best with the Swift 3, the absolute device for accomplishing all you need on the move",
      price: 1900,
      img: acer,
    },
    {
      id: 3,
      name: "Dell Inspiron",
      description:
        "Whether it's social media, streaming movies, or finishing your work, Inspiron delivers what matters most to you, in style",
      price: 1200,
      img: inspiron1,
    },
    {
      id: 4,
      name: "Lenovo Chromebook 3 ",
      description:
        "A versatile laptop featuring a unique design with optional touchscreen display",
      price: 900,
      img: chromebook,
    },
    {
      id: 5,
      name: "Ripple Artifact Pro",
      description:
        "Artifact Pro is a one-stop gaming PC that meets all of your gaming requirements",
      price: 1800,
      img: artifact,
    },
    {
      id: 6,
      name: "Lenovo Slim 9i",
      description:
        "Introducing the perfect combination of performance, responsiveness, battery life, and stunning visuals in a new class of sleek, stylish laptops",
      price: 1600,
      img: slimlenovo,
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
