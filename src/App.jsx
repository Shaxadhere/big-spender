import "./App.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Router from "./router/Router";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "#14161b", // Dark background color
        color: "white", // Text color
      },
    },
  },
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router />
    </ChakraProvider>
  );
}

export default App;
