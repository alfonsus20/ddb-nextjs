import React, { useEffect, useState } from "react";
import { Box, Button, Flex } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import HamburgerMenu from "react-hamburger-menu";

type NavbarMobileProps = {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
};

const Navbar = ({ isSidebarOpen, toggleSidebar }: NavbarMobileProps) => {
  const { pathname } = useRouter();
  const [isNavbarBgShown, setIsNavbarBgShown] = useState<boolean>(false);

  useEffect(() => {
    const watchPageScroll = () =>
      document.addEventListener("scroll", () => {
        if (window.scrollY > 90) {
          setIsNavbarBgShown(true);
        } else {
          setIsNavbarBgShown(false);
        }
      });

    watchPageScroll();
    return () => {
      document.removeEventListener("scroll", watchPageScroll);
    };
  });

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
      shadow={pathname === "/" && !isNavbarBgShown ? "none" : "md"}
      bgColor={{
        base: "white",
        md: pathname === "/" && !isNavbarBgShown ? "transparent" : "white",
      }}
      transition="background 0.3s ease-out"
    >
      <Link href="/" passHref>
        <Box as="a">
          <Image src="/logo.png" width={80} height={50} alt="logo" />
        </Box>
      </Link>
      <Flex
        columnGap="4"
        color={pathname === "/" && !isNavbarBgShown ? "white" : "black"}
        display={{ base: "none", md: "flex" }}
      >
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
        <Link href="/alumni" passHref>
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
      <Link href="/login" passHref>
        <Button
          as="a"
          colorScheme={
            pathname === "/" && !isNavbarBgShown ? "whiteAlpha" : "red"
          }
          _hover={{ bgColor: "red.400" }}
          display={{ base: "none", md: "inherit" }}
        >
          Login
        </Button>
      </Link>
      <Box display={{ base: "inherit", md: "none" }}>
        <HamburgerMenu
          isOpen={isSidebarOpen}
          menuClicked={toggleSidebar}
          width={18}
          height={15}
          strokeWidth={2}
          rotate={0}
          color="black"
          borderRadius={2}
          animationDuration={0.5}
        />
      </Box>
    </Flex>
  );
};

export default Navbar;
