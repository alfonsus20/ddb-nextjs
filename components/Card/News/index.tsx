import { Box, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type NewsProps = {
  id: number;
  title: string;
  content: string;
  image: string;
};

const News = ({ title, content, image, id }: NewsProps) => {
  return (
    <Link href={`/berita/${id}`} passHref>
      <Box as="a" maxW={400} w='full'>
        <Box pos="relative" width="full" height={60} mb={3}>
          <Image
            src={image}
            alt="berita"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </Box>
        <VStack spacing={2} align="flex-start">
          <Text fontSize="sm">27 Nov 2019 • 2 min</Text>
          <Text fontSize="lg" fontWeight="semibold" noOfLines={2}>
            {title}
          </Text>
          <Text fontSize="md" noOfLines={3}>
            {content}
          </Text>
        </VStack>
      </Box>
    </Link>
  );
};

export default News;
