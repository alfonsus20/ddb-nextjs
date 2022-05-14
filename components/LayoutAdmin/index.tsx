import {
  Badge,
  Box,
  Button,
  ButtonGroup,
  Container,
  Flex,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
  VStack,
} from "@chakra-ui/react";
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
            <Link href="/admin/mahasiswa" passHref>
              <Button width="full">Kelola Mahasiswa</Button>
            </Link>
            <Link href="/admin/berita" passHref>
              <Button width="full">Kelola Berita</Button>
            </Link>
          </VStack>
        </Box>
        <Box flex="1 1 auto">
          <TableContainer>
            <Table>
              <Thead>
                <Tr>
                  <Th>No.</Th>
                  <Th>Nama</Th>
                  <Th>Status</Th>
                  <Th>Terverifikasi</Th>
                  <Th>Action</Th>
                </Tr>
              </Thead>
              <Tbody>
                {[...Array(10)].map((_, idx) => (
                  <Tr key={idx}>
                    <Td>{idx + 1}.</Td>
                    <Td>Alfonsus Avianto Chandrawan</Td>
                    <Td>
                      <Badge variant="solid" colorScheme="cyan">
                        Mahasiswa Aktif
                      </Badge>
                    </Td>
                    <Td>
                      <Badge variant="solid" colorScheme="green">
                        Sudah
                      </Badge>
                    </Td>
                    <Td>
                      <ButtonGroup>
                        <Button colorScheme="blue">Edit</Button>
                        <Button colorScheme="red">Delete</Button>
                      </ButtonGroup>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      </Flex>
    </Container>
  );
};

export default LayoutAdmin;
