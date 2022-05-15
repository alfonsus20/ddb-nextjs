import React, { useCallback, useEffect, useMemo, useState } from "react";
import {
  Badge,
  Box,
  Button,
  ButtonGroup,
  Container,
  Flex,
  FormControl,
  FormErrorMessage,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Tab,
  Table,
  TableContainer,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Tbody,
  Td,
  Textarea,
  Th,
  Thead,
  Tr,
  useToast,
  VStack,
} from "@chakra-ui/react";
import Head from "next/head";
import withAuth from "../utils/withAuth";
import { getUsers } from "../fetches/user";
import { User } from "../types/entities/user";
import useError from "../hooks/useError";
import {
  createArticle,
  deleteArticleById,
  getArticles,
  uploadArticleImage,
} from "../fetches/article";
import { ArticleData, ArticleParams } from "../types/entities/article";
import { Field, Formik } from "formik";
import dynamic from "next/dynamic";
import { EditorProps } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { ContentState, convertToRaw, EditorState } from "draft-js";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";
import Image from "next/image";

const Editor = dynamic<EditorProps>(
  () => import("react-draft-wysiwyg").then((mod) => mod.Editor),
  { ssr: false }
);

const Admin = () => {
  const [users, setUsers] = useState<Array<User>>([]);
  const [articles, setArticles] = useState<Array<ArticleData>>([]);
  const [tabIndex, setTabIndex] = useState<number>(0);
  const [modalDeleteShown, setModalDeleteShown] = useState<boolean>(false);
  const [modalFormShown, setModalFormShown] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [deletedArticleId, setDeletedArticleId] = useState<number>(0);
  const [deletedStudentId, setDeletedStudentId] = useState<number>(0);

  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const { handleError } = useError();
  const toast = useToast();

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

  const handleDeleteArticle = async () => {
    try {
      setIsSubmitting(true);
      await deleteArticleById(deletedArticleId);
      toast({ description: "Berhasil menghapus artikel", status: "success" });
      await fetchArticles();
    } catch (e) {
      handleError(e);
    } finally {
      setIsSubmitting(false);
      setModalDeleteShown(false);
    }
  };

  const handleShowPopupDelete = (id: number) => {
    setModalDeleteShown(true);
    if (tabIndex === 0) {
      setDeletedStudentId(id);
    } else {
      setDeletedArticleId(id);
    }
  };

  const handleCreateArticle = async (body: ArticleParams) => {
    try {
      setIsSubmitting(true);
      await createArticle(body);
      toast({ description: "Berita berhasil ditambahkan", status: "success" });
      await fetchArticles();
    } catch (e) {
      handleError(e);
    } finally {
      setIsSubmitting(false);
      setModalFormShown(false);
    }
  };

  const handleShowPopupForm = () => {
    setModalFormShown(true);
    // if (tabIndex === 0) {
    //   setDeletedStudentId(id);
    // } else {
    //   setDeletedArticleId(id);
    // }
  };

  useEffect(() => {
    if (tabIndex === 0) {
      fetchUsers();
    } else {
      fetchArticles();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tabIndex]);

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
            <Flex justifyContent="flex-end" mb={4}>
              <Button
                colorScheme="green"
                onClick={() => setModalFormShown(true)}
              >
                Tambah Berita
              </Button>
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
                          <Button
                            colorScheme="red"
                            onClick={() => handleShowPopupDelete(article.id)}
                          >
                            Hapus
                          </Button>
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

      {/* Delete Modal*/}
      <Modal
        isOpen={modalDeleteShown}
        onClose={() => setModalDeleteShown(false)}
        isCentered
      >
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalHeader>
            Hapus {tabIndex === 0 ? "Data Mahasiswa" : "Berita"}
          </ModalHeader>
          <ModalBody>Apakah Anda yakin ingin menghapus data ini ?</ModalBody>
          <ModalFooter>
            <Button mr={3} isDisabled={isSubmitting}>
              Batal
            </Button>
            <Button
              colorScheme="blue"
              onClick={handleDeleteArticle}
              isLoading={isSubmitting}
            >
              Yakin
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      {/* Form Modal (add and edit)*/}
      <Modal
        closeOnOverlayClick={false}
        isOpen={modalFormShown && tabIndex == 1}
        onClose={() => setModalFormShown(false)}
        isCentered
        size="3xl"
        scrollBehavior="inside"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalHeader>Tambah Data Berita</ModalHeader>
          <ModalBody>
            <Formik
              initialValues={{
                title: "",
                content: draftToHtml(
                  convertToRaw(EditorState.createEmpty().getCurrentContent())
                ),
                imageURL: "",
              }}
              onSubmit={handleCreateArticle}
            >
              {({ errors, handleSubmit, values, handleChange }) => (
                <form onSubmit={handleSubmit}>
                  <VStack spacing={4}>
                    <FormControl isInvalid={!!errors.title}>
                      <Field
                        as={Input}
                        id="title"
                        name="title"
                        placeholder="Judul Berita"
                      />
                      <FormErrorMessage>{errors.title}</FormErrorMessage>
                    </FormControl>
                    <Editor
                      editorState={editorState}
                      onEditorStateChange={(val) => {
                        setEditorState(val);
                        const event = {
                          target: {
                            name: "content",
                            value: draftToHtml(
                              convertToRaw(val.getCurrentContent())
                            ),
                          },
                        } as React.ChangeEvent<HTMLTextAreaElement>;
                        handleChange(event);
                      }}
                    />
                    <FormControl>
                      <Input
                        type="file"
                        name="imageURL"
                        onChange={async (
                          e: React.ChangeEvent<HTMLInputElement>
                        ) => {
                          const files = e.target.files;
                          if (files != null) {
                            const { data } = await uploadArticleImage(files[0]);
                            console.log(data.data);
                            handleChange({
                              ...e,
                              target: { name: "imageURL", value: data.data },
                            });
                          }
                        }}
                      />
                    </FormControl>
                    <Box pos="relative">
                      {values.imageURL && (
                        <Image
                          src={values.imageURL}
                          alt="gambar"
                          width={480}
                          height={270}
                          objectFit="cover"
                          objectPosition="center"
                        />
                      )}
                    </Box>
                  </VStack>
                  <ButtonGroup py={4} display="flex" justifyContent="flex-end">
                    <Button mr={3} isDisabled={isSubmitting}>
                      Batal
                    </Button>
                    <Button
                      colorScheme="blue"
                      type="submit"
                      isLoading={isSubmitting}
                    >
                      Submit
                    </Button>
                  </ButtonGroup>
                </form>
              )}
            </Formik>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Container>
  );
};

export default withAuth(Admin, true);
