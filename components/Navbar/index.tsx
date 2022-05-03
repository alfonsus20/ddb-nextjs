import { Box, Button, Flex } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <Flex
      as="header"
      justifyContent="space-between"
      alignItems="center"
      px={8}
      py={4}
      pos="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={20}
    >
      <Image src="/logo.png" width={80} height={50} alt="logo" />
      <Flex columnGap="4" color="white">
        <Link href="/" passHref>
          <Box px={2} as="a">
            Beranda
          </Box>
        </Link>
        <Link href="/" passHref>
          <Box px={2} as="a">
            Berita
          </Box>
        </Link>
        <Link href="/" passHref>
          <Box px={2} as="a">
            Mahasiswa
          </Box>
        </Link>
        <Link href="/" passHref>
          <Box px={2} as="a">
            Tentang
          </Box>
        </Link>
        <Link href="/" passHref>
          <Box px={2} as="a">
            Galeri
          </Box>
        </Link>
      </Flex>
      <Button colorScheme="whiteAlpha" _hover={{ bgColor: "red" }}>
        Login
      </Button>
    </Flex>
  );
};

export default Navbar;
