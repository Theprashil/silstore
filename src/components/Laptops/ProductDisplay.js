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

function ProductDisplay({ addProductToCart, ...props }) {
  const classes = useStyles();

  function onaddHandler() {
    addProductToCart({ ...props });
  }
  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={props.img}
        title={props.name}
      />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography variant="h5" gutterBottom>
            {props.name}
          </Typography>
          <Typography className={classes.price} variant="h6">
            ${props.price}
          </Typography>
        </div>
        <Typography
          className={classes.desc}
          variant="body2"
          color="textSecondary"
        >
          {props.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
        <IconButton onClick={onaddHandler} aria-label="Add to Cart">
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default ProductDisplay;
