import React from "react";
import LayoutAdmin from "../../components/LayoutAdmin";
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

const Admin = () => {
  return (
    <LayoutAdmin>
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
    </LayoutAdmin>
  );
};

export default Admin;
