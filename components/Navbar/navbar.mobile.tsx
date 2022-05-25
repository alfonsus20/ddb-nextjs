import { Box, Flex } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

type NavbarMobileProps = {
  isSidebarOpen: boolean;
  closeSidebar: () => void;
};

const NavbarMobile = ({ isSidebarOpen, closeSidebar }: NavbarMobileProps) => {
  return (
    <Flex
      pos="fixed"
      display={{ base: "flex", md: "none" }}
      top="80px"
      right={0}
      left={0}
      zIndex={20}
      bg="white"
      transform={`translateX(${isSidebarOpen ? 0 : "-100%"})`}
      transition="transform 0.3s ease-in"
      direction="column"
      justifyContent="space-around"
      alignItems="center"
      pb={2}
    >
      <Link href="/" passHref>
        <Box px={2} py={4} as="a" onClick={closeSidebar}>
          Beranda
        </Box>
      </Link>
      <Link href="/berita" passHref>
        <Box px={2} py={4} as="a" onClick={closeSidebar}>
          Berita
        </Box>
      </Link>
      <Link href="/mahasiswa" passHref>
        <Box px={2} py={4} as="a" onClick={closeSidebar}>
          Mahasiswa
        </Box>
      </Link>
      <Link href="/alumni" passHref>
        <Box px={2} py={4} as="a" onClick={closeSidebar}>
          Alumni
        </Box>
      </Link>
      <Link href="/galeri" passHref>
        <Box px={2} py={4} as="a" onClick={closeSidebar}>
          Galeri
        </Box>
      </Link>
    </Flex>
  );
};

export default NavbarMobile;
