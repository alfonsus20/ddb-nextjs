import { Box, Button, Container, Flex, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const LayoutAdmin = ({ children }: Props) => {
  return (
    <Container maxW="container.2xl" pt={4} pb={12} px={12}>
      <Text fontSize="3xl" fontWeight="bold" mb={4}>
        Halaman Admin
      </Text>
      <Flex gap={8}>
        <Box flex="0 0 300px">
          <VStack spacing={4}>
            <Link href="/admin" passHref>
              <Button width="full">Kelola Mahasiswa</Button>
            </Link>
            <Link href="/admin/berita" passHref>
              <Button width="full">Kelola Berita</Button>
            </Link>
          </VStack>
        </Box>
        <Box flex="1 1 auto">{children}</Box>
      </Flex>
    </Container>
  );
};

export default LayoutAdmin;
