import { Box, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

const News = () => {
  return (
    <Box cursor="pointer" maxW={400} flex='1 1 300px'>
      <Box pos="relative" width="full" height={60} mb={3}>
        <Image
          src="/ub.jpg"
          alt="berita"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </Box>
      <Box>
        <Text fontSize="lg" fontWeight="semibold" mb={2} noOfLines={2}>
          Kostum Burung Pada Kampung Budaya 2021
        </Text>
        <Text fontSize="md" noOfLines={3}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore.
        </Text>
      </Box>
    </Box>
  );
};

export default News;
