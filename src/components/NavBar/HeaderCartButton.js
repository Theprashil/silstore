import classes from "./HeaderCartButton.module.css";
import HeaderCartIcon from "./HeaderCartIcon";
import CartContext from "../../store/cart-context";
import { useContext } from "react";

function HeaderCartButton(props) {
  const context = useContext(CartContext);
  return (
    <>
      <button className={classes.btn} onClick={props.onShow}>
        <span className={classes.icon}>
          <HeaderCartIcon />
        </span>
        <span className={classes.text}>Your Cart</span>
        <span className={classes.badge}>{context.carts.length}</span>
      </button>
    </>
  );
}

export default HeaderCartButton;
