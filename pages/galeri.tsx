import { AspectRatio, Box, Container, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import { GalleryCarousel } from "../components/Carousel";

const Galeri = () => {
  return (
    <Container maxW="container.xl" pt={4} pb={20}>
      <Text fontSize="3xl" fontWeight="bold" mb={4}>
        Galeri
      </Text>
      <GalleryCarousel />
    </Container>
  );
};

export default Galeri;
