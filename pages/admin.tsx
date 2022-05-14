import React, { useEffect, useState } from "react";
import {
  Badge,
  Button,
  ButtonGroup,
  Container,
  Flex,
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
import withAuth from "../utils/withAuth";
import { getUsers } from "../fetches/user";
import { User } from "../types/entities/user";
import useError from "../hooks/useError";
import { getArticles } from "../fetches/article";
import { Article } from "../types/entities/article";

const Admin = () => {
  const [users, setUsers] = useState<Array<User>>([]);
  const [articles, setArticles] = useState<Array<Article>>([]);
  const [tabIndex, setTabIndex] = useState<number>(0);

  const { handleError } = useError();

  const fetchUsers = async () => {
    try {
      const { data } = await getUsers();
      setUsers(data.data);
    } catch (e) {
      handleError(e);
    }
  };

  const fetchArticles = async () => {
    try {
      const { data } = await getArticles();
      setArticles(data.data);
    } catch (e) {
      handleError(e);
    }
  };

  useEffect(() => {
    if (tabIndex === 0) {
      fetchUsers();
    } else {
      fetchArticles();
    }
  }, []);

  return (
    <Container maxW="container.2xl" pt={4} pb={12} px={12}>
      <Head>
        <title>Halaman Admin</title>
      </Head>
      <Tabs isFitted onChange={(index: number) => setTabIndex(index)}>
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
                  {users.map((user, idx) => (
                    <Tr key={idx}>
                      <Td>{idx + 1}.</Td>
                      <Td>{user.name}</Td>
                      <Td>
                        {user.isGraduated ? (
                          <Badge variant="solid" colorScheme="green">
                            Alumni
                          </Badge>
                        ) : (
                          <Badge variant="solid" colorScheme="cyan">
                            Mahasiswa Aktif
                          </Badge>
                        )}
                      </Td>
                      <Td>
                        {user.isVerified ? (
                          <Badge variant="solid" colorScheme="green">
                            Sudah
                          </Badge>
                        ) : (
                          <Badge variant="solid" colorScheme="red">
                            Belum
                          </Badge>
                        )}
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
            <Flex justifyContent='flex-end' mb={4}>
              <Button colorScheme='green'>Tambah Berita</Button>
            </Flex>
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
                  {articles.map((article, idx) => (
                    <Tr key={idx}>
                      <Td>{idx + 1}.</Td>
                      <Td>{article.title}</Td>
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

export default withAuth(Admin, true);
