import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Box, ChakraProvider, Flex } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import { extendTheme } from "@chakra-ui/react";
import "@fontsource/nunito";
import Footer from "../components/Footer";
import { setLocale } from "yup";
import NavbarMobile from "../components/Navbar/navbar.mobile";
import { useEffect, useState } from "react";
import LoadingLayer from "../components/LoadingLayer";
import { AnimatePresence } from "framer-motion";
import { ChakraBox } from "../components/Animation";

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
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  useEffect(() => {
    document.onreadystatechange = () => {
      setLoading(false);
    };
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <Flex minH="100vh" direction="column">
        <AnimatePresence exitBeforeEnter>
          {loading ? (
            <LoadingLayer key="loader" />
          ) : (
            <ChakraBox
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { stiffness: 0 } }}
            >
              <Navbar
                isSidebarOpen={isSidebarOpen}
                toggleSidebar={toggleSidebar}
              />
              <NavbarMobile
                isSidebarOpen={isSidebarOpen}
                closeSidebar={closeSidebar}
              />
              <Box flex="1 1 auto">
                <Component {...pageProps} />
              </Box>
              <Footer />
            </ChakraBox>
          )}
        </AnimatePresence>
      </Flex>
    </ChakraProvider>
  );
}

export default MyApp;
