import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ProductList from "./components/Laptops/ProductList";
import { CartProvider } from "./components/Contexts/cart-context";

function App() {
  return (
    <CartProvider>
      <header>
        <NavBar />
      </header>
      <section>
        <ProductList />
      </section>
    </CartProvider>
  );
}

export default App;
