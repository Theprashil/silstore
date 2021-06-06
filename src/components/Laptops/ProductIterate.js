import { Grid } from "@material-ui/core";
import ProductDisplay from "./ProductDisplay";
import { useCartContext } from "../../store/cart-context";
import classes from "./ProductIterate.module.css";

function ProductList() {
  const context = useCartContext();
  const displayLaptops = context.products.map((p) => (
    <Grid item key={p.id} xs={12} sm={6} md={6} lg={4}>
      <ProductDisplay
        key={p.id}
        id={p.id}
        name={p.name}
        img={p.img}
        price={p.price}
        description={p.description}
        addProductToCart={context.addProductToCart}
      />
    </Grid>
  ));

  return (
    <Grid
      className={classes.grid}
      container
      justify="center"
      alignItems="center"
      spacing={5}
    >
      {displayLaptops}
    </Grid>
  );
}

export default ProductList;
