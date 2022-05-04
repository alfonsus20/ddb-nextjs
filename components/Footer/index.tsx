import { Box, Button, Flex, Input, Text, Textarea, VStack } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <Box bgColor="red.600" color="white">
      <Flex maxW="container.xl" mx="auto" py={12}>
        <Box w="33.33%">
          <Text fontSize="2xl" fontWeight='semibold' mb={4}>
            Data Mahasiswa
          </Text>
          <Box>
            <Text>Data Alumni</Text>
            <Text>Data Mahasiswa Aktif</Text>
          </Box>
        </Box>
        <Box w="33.33%">
          <Text fontSize="2xl" fontWeight='semibold' mb={4}>
            Sosial Media
          </Text>
          <Box>
            <Text>Instagram</Text>
            <Text>Youtube</Text>
          </Box>
        </Box>
        <Box w="33.33%">
          <Text fontSize="2xl" fontWeight='semibold' mb={4}>
            Hubungi Kami
          </Text>
          <VStack as="form" spacing={4} align="flex-start">
            <Input placeholder="Nama" _placeholder={{color : 'white'}} />
            <Textarea placeholder="Pesan"  _placeholder={{color : 'white'}} resize='none' />
            <Button colorScheme="whiteAlpha">Kirim</Button>
          </VStack>
        </Box>
      </Flex>
      <Box as="footer" textAlign="center" py={4} bgColor="#333333">
        &copy; Dara Daeng Brawijaya 2022. All Rights Reserved.
      </Box>
    </Box>
  );
};

export default Footer;
