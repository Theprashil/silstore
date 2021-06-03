import Modal from "../Modals/Modal";
import classes from "./Cart.module.css";

function Cart(props) {
  return (
    <Modal onClick={props.onClose}>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>$23.45</span>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onClose} className={classes.close}>
          Close
        </button>
        <button className={classes.order}>Order</button>
      </div>
    </Modal>
  );
}

export default Cart;
