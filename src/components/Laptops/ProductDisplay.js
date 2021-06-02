import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";
import useStyles from "./CardsStyle";
import { CartContext } from "../Contexts/cart-context";
import { useContext } from "react";

function ProductDisplay({ product }) {
  const [cart, setCart] = useContext(CartContext);

  function buttonClickHandler() {
    const laptops = {
      name: product.name,
      price: product.price,
    };
    setCart((currState) => [...currState, laptops]);
    console.log("Button clicked");
  }

  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={product.img}
        title={product.name}
      />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography variant="h5" gutterBottom>
            {product.name}
          </Typography>
          <Typography className={classes.price} variant="h6">
            {product.price}
          </Typography>
        </div>
        <Typography
          className={classes.desc}
          variant="body2"
          color="textSecondary"
        >
          {product.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
        <IconButton onClick={buttonClickHandler} aria-label="Add to Cart">
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default ProductDisplay;
