import {
  Box,
  Button,
  Flex,
  Input,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";
import React, { useState } from "react";
import { FaInstagram, FaYoutube } from "react-icons/fa";

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
    window.open(
      `mailto:ddbrawijaya.com?subject=${formData.subject}&body=${formData.body}`
    );
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
            <Link href="/alumni" passHref>
              <Box _hover={{ color: "red.500" }} cursor='pointer'>Data Alumni</Box>
            </Link>
            <Link href="/mahasiswa" passHref>
              <Box _hover={{ color: "red.500" }} cursor='pointer'>Data Mahasiswa Aktif</Box>
            </Link>
          </Box>
        </Box>
        <Box w={{ base: "50%", md: "33.33%" }}>
          <Text fontSize="2xl" fontWeight="semibold" mb={4}>
            Sosial Media
          </Text>
          <Box fontSize="lg">
            <Box
              as="a"
              _hover={{ color: "red.500" }}
              href="https://www.instagram.com"
              target="_blank"
              rel="noopen noreferrer"
            >
              <Flex alignItems="center" columnGap={2}>
                <FaInstagram />
                Instagram
              </Flex>
            </Box>
            <Box
              as="a"
              href="https://www.instagram.com"
              target="_blank"
              rel="noopen noreferrer"
              _hover={{ color: "red.500" }}
            >
              <Flex alignItems="center" columnGap={2}>
                <FaYoutube />
                Youtube
              </Flex>
            </Box>
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
              required
            />
            <Textarea
              placeholder="Pesan"
              _placeholder={{ color: "white" }}
              resize="none"
              name="body"
              value={formData.body}
              onChange={handleChange}
              required
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
