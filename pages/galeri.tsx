import { Box, Text } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";
import { GalleryCarousel } from "../components/Carousel";

const Galeri = () => {
  return (
    <Box pt={4} pb={16}>
      <Head>
        <title>Galeri</title>
      </Head>
      <Text fontSize="3xl" textAlign="center" fontWeight="bold" mb={4}>
        Galeri
      </Text>
      <GalleryCarousel />
    </Box>
  );
};

export default Galeri;
