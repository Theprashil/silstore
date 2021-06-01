import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ProductList from "./components/Laptops/ProductList";

function App() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <section>
        <ProductList />
      </section>
    </>
  );
}

export default App;
