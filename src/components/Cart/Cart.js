import Modal from "../Modals/Modal";
import classes from "./Cart.module.css";
import CartItems from "./CartItems";
import { useCartContext } from "../../store/cart-context";
import CloseIcon from "@material-ui/icons/Close";

function Cart(props) {
  const context = useCartContext();

  // displaying cart items
  const items = (
    <ul className={classes["cart-items"]}>
      {context.carts.map(({ product, quantity }) => (
        <CartItems product={product} quantity={quantity} key={product.id} />
      ))}
    </ul>
  );

  //calcualating total price of the cart
  let total_price = 0;
  for (let i = 0; i < context.carts.length; i++) {
    total_price += context.carts[i].quantity * context.carts[i].product.price;
  }

  //clearing cart
  const clearCartHandler = () => {
    context.clearCart();
  };

  //checking if the cart is empty or not
  const status = context.carts.length;

  return (
    <>
      {status > 0 ? (
        <Modal onClick={props.onClose}>
          <div className={classes.icons}>
            <CloseIcon onClick={props.onClose} />
          </div>
          {items}
          <div className={classes.total}>
            <span>Total Amount</span>
            <span>${total_price} </span>
          </div>
          <div className={classes.actions}>
            <button onClick={clearCartHandler}> Clear Cart</button>
            <button className={classes.order}>Checkout</button>
          </div>
        </Modal>
      ) : (
        <Modal onClick={props.onClose}>
          <h3>Cart Is Empty</h3>
        </Modal>
      )}
    </>
  );
}

export default Cart;
