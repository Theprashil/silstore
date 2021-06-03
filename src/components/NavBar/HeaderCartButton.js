import classes from "./HeaderCartButton.module.css";
import HeaderCartIcon from "./HeaderCartIcon";

function HeaderCartButton(props) {
  return (
    <>
      <button className={classes.btn} onClick={props.onShow}>
        <span className={classes.icon}>
          <HeaderCartIcon />
        </span>
        <span className={classes.text}>Your Cart</span>
        <span className={classes.badge}>1</span>
      </button>
    </>
  );
}

export default HeaderCartButton;
