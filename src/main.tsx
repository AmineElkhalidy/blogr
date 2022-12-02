import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// Chakra provider
import { ChakraProvider } from "@chakra-ui/react";

// Extend theme function
import { extendTheme } from "@chakra-ui/react";

const colors = {
  lightRed: "hsl(356, 100%, 66%)",
  lighterRed: "hsl(355, 100%, 74%)",
  darkBlue: "hsl(208, 49%, 24%)",
  grayishBlue: "hsl(240, 2%, 79%)",
  darkGrayishBue: "hsl(207, 13%, 34%)",
  darkBlackBlue: "hsl(240, 10%, 16%)",
};

// Theme
const theme = extendTheme({ colors });

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
