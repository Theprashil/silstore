import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  typography: {
    fontFamily: ['"Noto Sans"', "Open Sans"].join(","),
  },
});

export default theme;
