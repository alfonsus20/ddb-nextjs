import React from "react";
import {
  Badge,
  Button,
  ButtonGroup,
  Container,
  Tab,
  Table,
  TableContainer,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import Head from "next/head";

const Admin = () => {
  return (
    <Container maxW="container.2xl" pt={4} pb={12} px={12}>
      <Head>
        <title>Halaman Admin</title>
      </Head>
      <Tabs isFitted>
        <TabList>
          <Tab>Daftar Mahasiswa</Tab>
          <Tab>Daftar Berita</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
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
          </TabPanel>
          <TabPanel>
            {" "}
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
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Container>
  );
};

export default Admin;
