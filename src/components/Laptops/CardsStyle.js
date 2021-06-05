import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  root: {
    maxWidth: "100%",
    // backgroundColor: "red",
    borderRadius: "5px",
    transition: "transform 0.3s",
    font: "inherit",
    "&:hover": {
      transform: "translateY(5px)",
      cursor: "pointer",
    },
  },

  media: {
    height: "210px",
    width: "100%",
    objectFit: "contain",
    paddingBottom: "1rem !important",
    paddingTop: "1rem !important", // 16:9
  },
  cardActions: {
    display: "flex",
    justifyContent: "flex-end",
  },
  cardContent: {
    // padding: "0 20px 20px",
    wordWrap: "break-word",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  price: {
    color: "#6c757d",
    paddingBottom: "10px",
  },

  desc: {
    color: "black",
    fontSize: "16px",
  },
}));
