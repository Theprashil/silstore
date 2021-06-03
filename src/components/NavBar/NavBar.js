import classes from "./NavBar.module.css";
import HeaderCartButton from "./HeaderCartButton";

function NavBar(props) {
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

      <HeaderCartButton onShow={props.onShow} />
    </nav>
  );
}

export default NavBar;
