import {
  Box,
  Button,
  Flex,
  Input,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";

const emailDefaultValue = { subject: "", body: "" };

const Footer = () => {
  const [formData, setFormData] = useState({ ...emailDefaultValue });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormData({ ...emailDefaultValue });
  };

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
          <VStack
            as="form"
            method="GET"
            action="mailto:ddbrawijaya@gmail.com"
            onSubmit={handleSubmit}
            spacing={4}
            align="flex-start"
          >
            <Input
              placeholder="Subjek"
              name="subject"
              _placeholder={{ color: "white" }}
              value={formData.subject}
              onChange={handleChange}
            />
            <Textarea
              placeholder="Pesan"
              _placeholder={{ color: "white" }}
              resize="none"
              name="body"
              value={formData.body}
              onChange={handleChange}
            />
            <Button colorScheme="whiteAlpha" type="submit">
              Kirim
            </Button>
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
