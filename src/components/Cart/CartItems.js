import { useCartContext } from "../../store/cart-context";
import classes from "./CartItems.module.css";

function CartItems({ product, quantity }) {
  const context = useCartContext();
  return (
    <li className={classes["cart-item"]}>
      <div>
        <h3>{product.name}</h3>

        <div className={classes.summary}>
          <span className={classes.price}>${product.price * quantity}</span>
          <span className={classes.amount}> x{quantity}</span>
        </div>
      </div>

      <div className={classes.actions}>
        <button onClick={() => context.removeProductFromCart(product.id)}>
          -
        </button>
        <button onClick={() => context.addProductToCart(product)}>+</button>
      </div>
    </li>
  );
}

export default CartItems;
