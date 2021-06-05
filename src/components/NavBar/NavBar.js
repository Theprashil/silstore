import classes from "./NavBar.module.css";
import HeaderCartButton from "./HeaderCartButton";
import Burger from "./Burger";

function NavBar(props) {
  return (
    <nav>
      <div className={classes.logo}>Sil Store</div>
      <Burger onShow={props.onShow} />

      <div className={classes.headerbtn}>
        <HeaderCartButton onShow={props.onShow} />
      </div>
    </nav>
  );
}

export default NavBar;
