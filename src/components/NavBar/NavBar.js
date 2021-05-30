import Cart from "../Cart/Cart";
import classes from "./NavBar.module.css";

function NavBar() {
  return (
    <nav>
      <div className={classes.logo}>Sil Store</div>

      <ul className={classes["nav-links"]}>
        <li>
          <a href="#top">About</a>
        </li>
        <li>
          <a href="#top">Contact</a>
        </li>
        <li>
          <a href="#top">Categories</a>
        </li>
      </ul>

      <Cart />
    </nav>
  );
}

export default NavBar;
