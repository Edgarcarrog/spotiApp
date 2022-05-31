import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      light: "rgb(197, 213, 255)",
      main: "rgb(197, 213, 255)",
      dark: "rgb(197, 213, 255)",
      contrastText: "#005",
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#5ff",
    },
    text: {
      primary: "rgb(197, 213, 255)",
      secondary: "#ddd",
    },
  },
});

export default theme;
