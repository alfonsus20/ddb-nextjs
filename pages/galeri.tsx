import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { GalleryCarousel } from "../components/Carousel";

const Galeri = () => {
  return (
    <Box pt={4} pb={16}>
      <Text fontSize="3xl" textAlign="center" fontWeight="bold" mb={4}>
        Galeri
      </Text>
      <GalleryCarousel />
    </Box>
  );
};

export default Galeri;
