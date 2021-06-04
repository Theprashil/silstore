import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ProductIterate from "./components/Laptops/ProductIterate";
import Cart from "./components/Cart/Cart";
import { useState } from "react";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };
  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <header>
        <NavBar onShow={showCartHandler} />
      </header>
      <section>
        <ProductIterate />
      </section>
    </>
  );
}

export default App;
