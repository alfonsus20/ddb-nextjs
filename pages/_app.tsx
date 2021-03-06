import { Box, ChakraProvider, extendTheme } from "@chakra-ui/react";
import "@fontsource/nunito";
import { AnimatePresence } from "framer-motion";
import Cookie from "js-cookie";
import type { AppProps } from "next/app";
import NextNProgress from "nextjs-progressbar";
import { useEffect, useMemo, useState } from "react";
import { setLocale } from "yup";
import { ChakraBox } from "../components/Animation";
import Footer from "../components/Footer";
import LoadingLayer from "../components/LoadingLayer";
import Navbar from "../components/Navbar";
import NavbarMobile from "../components/Navbar/navbar.mobile";
import "../styles/globals.css";
import { setAuthToken } from "../utils/auth";

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

  useMemo(() => {
    const token = Cookie.get("token");
    if (token) {
      setAuthToken(token);
    }
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <NextNProgress color="red" options={{ showSpinner: false }} />
      <Box>
        <AnimatePresence exitBeforeEnter>
          {loading ? (
            <LoadingLayer key="loader" />
          ) : (
            <ChakraBox
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { stiffness: 0 } }}
              minH="100vh"
              flexDirection="column"
              display="flex"
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
      </Box>
    </ChakraProvider>
  );
}

export default MyApp;
