import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ProductDisplay from "./ProductDisplay";
import { useCartContext } from "../../store/cart-context";

const useStyles = makeStyles(() => ({
  grid: {
    marginTop: "50px",
    maxWidth: "100%",
    padding: "0rem 6.5rem",
    font: "inherit",
  },
}));

function ProductList() {
  const context = useCartContext();
  const classes = useStyles();
  const displayLaptops = context.products.map((p) => (
    <Grid
      className={classes.items}
      item
      key={p.id}
      xs={12}
      sm={7}
      md={6}
      lg={4}
    >
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
