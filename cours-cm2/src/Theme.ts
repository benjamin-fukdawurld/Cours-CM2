import { createTheme } from "@material-ui/core/styles";
import "./App.css";

const font = "'Dancing Script', cursive";

const theme = createTheme({
  typography: {
    fontFamily: font,
    fontSize: 20,
    htmlFontSize: 20,
    button: {
      textTransform: "none",
    },
    body1: {
      lineHeight: 1.8,
    },
    body2: {
      lineHeight: 1.65,
    },
  },
  palette: {
    background: {
      paper: "#EFE5D5",
    },
    text: {
      primary: "#444444",
    },
    common: {
      black: "#444444",
    },
  },
});

export default theme;
