import { ChakraProvider, theme, Box } from "@chakra-ui/core";
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
      <Box
        d="flex"
        margin="auto"
        justifyContent="center"
        alignItems="center"
        height="90vh"
      >
        <Component {...pageProps} />
      </Box>
    </ChakraProvider>
  );
}

export default MyApp;
