import { Box, Button, Container, Flex, VStack } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const LayoutAdmin = ({ children }: { children: React.ReactNode }) => {
  return (
    <Container maxW="container.2xl" pt={4} pb={12}>
      <Flex gap={4}>
        <Box flex="0 0 300px">
          <VStack>
            <Link href="/admin" passHref>
              <Button w="full">Kelola User</Button>
            </Link>
            <Link href="/admin/berita" passHref>
              <Button w="full">Kelola Berita</Button>
            </Link>
          </VStack>
        </Box>
        <Box flex="1 1 auto">{children}</Box>
      </Flex>
    </Container>
  );
};

export default LayoutAdmin;
