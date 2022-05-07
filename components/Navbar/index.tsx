import { Box, Button, Flex } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const Navbar = () => {
  const { pathname } = useRouter();

  return (
    <Flex
      as="header"
      justifyContent="space-between"
      alignItems="center"
      px={8}
      py={4}
      pos={pathname === "/" ? "fixed" : "sticky"}
      top={0}
      left={0}
      right={0}
      zIndex={20}
      shadow={pathname === "/" ? "none" : "md"}
      bgColor={pathname === "/" ? "transparent" : "white"}
    >
      <Link href="/" passHref>
        <Box as="a">
          <Image src="/logo.png" width={80} height={50} alt="logo" />
        </Box>
      </Link>
      <Flex columnGap="4" color={pathname === "/" ? "white" : "black"}>
        <Link href="/" passHref>
          <Box px={2} as="a">
            Beranda
          </Box>
        </Link>
        <Link href="/berita" passHref>
          <Box px={2} as="a">
            Berita
          </Box>
        </Link>
        <Link href="/mahasiswa" passHref>
          <Box px={2} as="a">
            Mahasiswa
          </Box>
        </Link>
        <Link href="/" passHref>
          <Box px={2} as="a">
            Alumni
          </Box>
        </Link>
        <Link href="/galeri" passHref>
          <Box px={2} as="a">
            Galeri
          </Box>
        </Link>
      </Flex>
      <Button
        colorScheme={pathname === "/" ? "whiteAlpha" : "red"}
        _hover={{ bgColor: "red.400" }}
      >
        Login
      </Button>
    </Flex>
  );
};

export default Navbar;
