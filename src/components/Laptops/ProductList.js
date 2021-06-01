import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ProductDisplay from "./ProductDisplay";

const useStyles = makeStyles(() => ({
  grid: {
    marginTop: "50px",
    maxWidth: "100%",
    padding: "0rem 6.5rem",
    font: "inherit",
  },
}));

const dummy_laptop = [
  {
    id: 1,
    name: "Ripple Pandora",
    description: "A perfect made in Nepal",
    price: "$800",
    img: "https://images.freeimages.com/images/large-previews/ac0/cat-1364386.jpg",
  },
  {
    id: 2,
    name: "Dell 3300",
    description: "Value for money",
    price: "$1600",
    img: "https://images.freeimages.com/images/large-previews/ac0/cat-1364386.jpg",
  },
  {
    id: 3,
    name: "Hp 1234",
    description: "Won't let you down",
    price: "$1900",
    img: "https://images.freeimages.com/images/large-previews/ac0/cat-1364386.jpg",
  },
  {
    id: 4,
    name: "Riplle Raze",
    description: "Good speed good money",
    price: "$1600",
    img: "https://images.freeimages.com/images/large-previews/ac0/cat-1364386.jpg",
  },
  {
    id: 5,
    name: "Apple Macbook",
    description: "Very Expensive but worth it",
    price: "$3600",
    img: "https://images.freeimages.com/images/large-previews/ac0/cat-1364386.jpg",
  },
  {
    id: 6,
    name: "Vostro Peice",
    description: "Great performance",
    price: "$1700",
    img: "https://images.freeimages.com/images/large-previews/ac0/cat-1364386.jpg",
  },
];

function ProductList() {
  const classes = useStyles();
  const displayLaptops = dummy_laptop.map((products) => (
    <Grid
      className={classes.items}
      item
      key={products.id}
      xs={12}
      sm={6}
      md={3}
      lg={4}
    >
      <ProductDisplay product={products} />
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
