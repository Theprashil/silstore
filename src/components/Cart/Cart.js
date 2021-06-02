import classes from "./Cart.module.css";
import CartIcon from "./CartIcon";
import { useContext } from "react";
import { CartContext } from "../Contexts/cart-context";

function Cart() {
  const [cart, setCart] = useContext(CartContext);
  // const totalPrice = cart.reduce((acc, curr) => acc + curr.price, 0);
  return (
    <button className={classes.btn}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span className={classes.text}>Your Cart</span>
      <span className={classes.badge}>{cart.length}</span>
    </button>
  );
}

export default Cart;
