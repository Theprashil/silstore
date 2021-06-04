import Modal from "../Modals/Modal";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";
import { useContext } from "react";

function Cart(props) {
  const context = useContext(CartContext);
  const items = context.carts.map(({ product, quantity }) => (
    <div key={product.id}>
      <h3>{product.name}</h3>
      <span>Total Quantity {quantity}</span>
      <span> Price ${product.price * quantity}</span>
      <button onClick={() => context.removeProductFromCart(product.id)}>
        Remove Item
      </button>
    </div>
  ));

  // const totalprice = context.carts.reduce(({ accumulator, item }) => {
  //   return accumulator + item.quantity * item.price;
  // }, 0);
  // console.log(totalprice);
  console.log(context.carts);

  //clearing cart
  const clearCartHandler = () => {
    context.clearCart();
  };

  return (
    <Modal onClick={props.onClose}>
      {items}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>$23.45 </span>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onClose} className={classes.close}>
          Close
        </button>
        <button className={classes.order}>Order</button>
        <button onClick={clearCartHandler}> Clear Cart</button>
      </div>
    </Modal>
  );
}

export default Cart;
