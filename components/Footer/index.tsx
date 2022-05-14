import {
  Box,
  Button,
  Flex,
  Input,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <Box bgColor="#383434" color="white">
      <Flex
        maxW="container.xl"
        mx="auto"
        px={{ base: 8, "2xl": 0 }}
        py={12}
        flexWrap="wrap"
        rowGap={8}
      >
        <Box w={{ base: "50%", md: "33.33%" }}>
          <Text fontSize="2xl" fontWeight="semibold" mb={4}>
            Data Mahasiswa
          </Text>
          <Box>
            <Text>Data Alumni</Text>
            <Text>Data Mahasiswa Aktif</Text>
          </Box>
        </Box>
        <Box w={{ base: "50%", md: "33.33%" }}>
          <Text fontSize="2xl" fontWeight="semibold" mb={4}>
            Sosial Media
          </Text>
          <Box>
            <Text>Instagram</Text>
            <Text>Youtube</Text>
          </Box>
        </Box>
        <Box w={{ base: "full", md: "33.33%" }}>
          <Text fontSize="2xl" fontWeight="semibold" mb={4}>
            Hubungi Kami
          </Text>
          <VStack as="form" spacing={4} align="flex-start">
            <Input placeholder="Nama" _placeholder={{ color: "white" }} />
            <Textarea
              placeholder="Pesan"
              _placeholder={{ color: "white" }}
              resize="none"
            />
            <Button colorScheme="whiteAlpha">Kirim</Button>
          </VStack>
        </Box>
      </Flex>
      <Box as="footer" textAlign="center" px={{ base: 8, "2xl": 0 }} py={4}>
        &copy; Dara Daeng Brawijaya 2022. All Rights Reserved.
      </Box>
    </Box>
  );
};

export default Footer;
