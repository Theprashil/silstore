import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ProductList from "./components/Laptops/ProductList";
import { CartProvider } from "./components/Contexts/cart-context";
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
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <header>
        <NavBar onShow={showCartHandler} />
      </header>
      <section>
        <ProductList />
      </section>
    </CartProvider>
  );
}

export default App;
