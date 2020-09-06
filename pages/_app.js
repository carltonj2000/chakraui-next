import { ChakraProvider, theme } from "@chakra-ui/core";
import { merge } from "@chakra-ui/utils";
import Nav from "../components/Nav";

const customTheme = merge(theme, {
  colors: {
    brand: {
      900: "#1a365d",
      800: "#153e75",
      700: "#2a69ac",
    },
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS theme={customTheme}>
      <Nav />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
