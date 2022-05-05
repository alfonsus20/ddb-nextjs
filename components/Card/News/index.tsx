import { Box, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const News = () => {
  return (
    <Link href='/berita/1' passHref>
      <Box as="a" maxW={400} flex="1 1 300px">
        <Box pos="relative" width="full" height={60} mb={3}>
          <Image
            src="/ub.jpg"
            alt="berita"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </Box>
        <VStack spacing={2} align="flex-start">
          <Text fontSize="sm">27 Nov 2019 • 2 min</Text>
          <Text fontSize="lg" fontWeight="semibold" noOfLines={2}>
            Kostum Burung Pada Kampung Budaya 2021
          </Text>
          <Text fontSize="md" noOfLines={3}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore.
          </Text>
        </VStack>
      </Box>
    </Link>
  );
};

export default News;
