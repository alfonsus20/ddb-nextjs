import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Box, ChakraProvider, Flex } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import { extendTheme } from "@chakra-ui/react";
import "@fontsource/nunito";
import Footer from "../components/Footer";
import { setLocale } from "yup";

const theme = extendTheme({
  fonts: {
    heading: "Nunito, sans-serif",
    body: "Nunito, sans-serif",
  },
});

setLocale({
  mixed: {
    required: (params) => `${params.label} wajib diisi`,
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Flex minH="100vh" direction="column">
        <Navbar />
        <Box flex="1 1 auto">
          <Component {...pageProps} />
        </Box>
        <Footer />
      </Flex>
    </ChakraProvider>
  );
}

export default MyApp;
