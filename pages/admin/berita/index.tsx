import React from "react";
import LayoutAdmin from "../../../components/LayoutAdmin";
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

const BeritaDetail = () => {
  return (
    <LayoutAdmin>
      <TableContainer>
        <Table>
          <Thead>
            <Tr>
              <Th>No.</Th>
              <Th>Judul</Th>
              <Th>Tanggal Posting</Th>
              <Th>Aksi</Th>
            </Tr>
          </Thead>
          <Tbody>
            {[...Array(10)].map((_, idx) => (
              <Tr key={idx}>
                <Td>{idx + 1}.</Td>
                <Td>Kustom Burung di Kampung Budaya</Td>
                <Td>28 Oktober 2021 19:03</Td>
                <Td>
                  <ButtonGroup>
                    <Button colorScheme="blue">Edit</Button>
                    <Button colorScheme="red">Hapus</Button>
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

export default BeritaDetail;
