import classes from "./Cart.module.css";
import CartIcon from "./CartIcon";
function Cart() {
  return (
    <button className={classes.btn}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span className={classes.text}>Your Cart</span>
      <span className={classes.badge}>2</span>
    </button>
  );
}

export default Cart;
