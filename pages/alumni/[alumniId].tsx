import { Box, Container, Flex, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

const AlumniDetail = () => {
  return (
    <Container maxW="container.xl" pt={6} pb={16}>
      <Flex gap={8} alignItems="center">
        <Box pos="relative" flex="0 0 300px" height={300}>
          <Image
            src="/pengurus/fuady.jpg"
            alt="fuady"
            layout="fill"
            objectFit="cover"
            objectPosition="top"
          />
        </Box>
        <Box flex="1 1 auto">
          <Box mb={6}>
            <Text fontWeight="bold" color="red.500" fontSize="3xl">
              Fuady Muhammad
            </Text>
            <Box fontSize="lg">
              <Text>Fakultas Ekonomi dan Bisnis</Text>
              <Text>Ilmu Ekonomi, 2017</Text>
            </Box>
          </Box>
          <VStack spacing={2} align="flex-start">
            <Flex>
              <Box flex="0 0 150px">Judul Skripsi</Box>
              <Box flex="0 0 12px">:</Box>
              <Box flex="1 1 auto">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Facilis illum atque veritatis fugiat totam blanditiis distinctio
              </Box>
            </Flex>
            <Flex>
              <Box flex="0 0 150px">Link Skripsi</Box>
              <Box flex="0 0 12px">:</Box>
              <Box flex="1 1 auto">http://google.com</Box>
            </Flex>
            <Flex>
              <Box flex="0 0 150px">Tahun Lulus</Box>
              <Box flex="0 0 12px">:</Box>
              <Box flex="1 1 auto">2021</Box>
            </Flex>
          </VStack>
        </Box>
      </Flex>
    </Container>
  );
};

export default AlumniDetail;
