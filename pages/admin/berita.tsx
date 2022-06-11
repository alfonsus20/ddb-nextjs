import {
  Box,
  Button,
  ButtonGroup,
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
  Spinner,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { convertToRaw, EditorState, ContentState } from "draft-js";
import draftToHtml from "draftjs-to-html";
import { Field, Formik } from "formik";
import htmlToDraft from "html-to-draftjs";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { EditorProps } from "react-draft-wysiwyg";
import LayoutAdmin from "../../components/LayoutAdmin";
import Pagination from "../../components/Pagination";
import {
  createArticle,
  deleteArticleById,
  editArticle,
  getArticles,
  uploadArticleImage,
} from "../../fetches/article";
import { GetServerSideProps } from "next";
import { ArticleData, ArticleParams } from "../../types/entities/article";
import useError from "../../hooks/useError";
import dayjs from "dayjs";
import requireAuth from "../../auth/requireAuth";
import "dayjs/locale/id";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

dayjs.locale("id");

const Editor = dynamic<EditorProps>(
  () => import("react-draft-wysiwyg").then((mod) => mod.Editor),
  { ssr: false }
);

const Berita = () => {
  const [totalData, setTotalData] = useState<number>(0);
  const [modalDeleteShown, setModalDeleteShown] = useState<boolean>(false);
  const [modalFormShown, setModalFormShown] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [articles, setArticles] = useState<Array<ArticleData>>([]);
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [choosenArticle, setChoosenArticle] = useState<ArticleData | undefined>(
    undefined
  );
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const { handleError } = useError();
  const toast = useToast();
  const router = useRouter();

  const fetchArticles = async () => {
    try {
      setIsFetching(true);
      const { data } = await getArticles({ ...router.query });
      setArticles(data.data);
      setTotalData(data.totalData);
    } catch (e) {
      handleError(e);
    } finally {
      setIsFetching(false);
    }
  };

  const handleClosePopupForm = () => {
    setModalFormShown(false);
    emptyState();
  };

  const handleCloseDeletePopup = () => {
    setModalDeleteShown(false);
    emptyState();
  };

  const emptyState = () => {
    if (choosenArticle) {
      setChoosenArticle(undefined);
      setEditorState(EditorState.createEmpty());
    }
  };

  const handleShowPopupForm = (id: number) => {
    setChoosenValue(id);
    setModalFormShown(true);
  };

  const setChoosenValue = (id: number) => {
    const article = articles.find((article) => article.id === id);
    if (article) {
      setChoosenArticle(article);
      setEditorState(
        EditorState.createWithContent(
          ContentState.createFromBlockArray(
            htmlToDraft(article.content).contentBlocks
          )
        )
      );
    }
  };

  const handleShowPopupDelete = (id: number) => {
    setModalDeleteShown(true);
    setChoosenValue(id);
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

  const handleEditArticle = async (body: ArticleParams) => {
    try {
      setIsSubmitting(true);
      await editArticle(choosenArticle!.id, body);
      toast({ description: "Berita berhasil diedit", status: "success" });
      await fetchArticles();
    } catch (e) {
      handleError(e);
    } finally {
      setIsSubmitting(false);
      handleClosePopupForm();
    }
  };

  const handleDeleteArticle = async () => {
    try {
      setIsSubmitting(true);
      if (choosenArticle) {
        await deleteArticleById(choosenArticle.id);
        toast({ description: "Berhasil menghapus artikel", status: "success" });
        await fetchArticles();
      }
    } catch (e) {
      handleError(e);
    } finally {
      setIsSubmitting(false);
      handleCloseDeletePopup();
    }
  };

  useEffect(() => {
    fetchArticles();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.query.page]);

  return (
    <LayoutAdmin title="Kelola Berita">
      <Flex justifyContent="flex-end" mb={4}>
        <Button colorScheme="green" onClick={() => setModalFormShown(true)}>
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
            {isFetching ? (
              <Tr>
                <Td colSpan={5}>
                  <Flex h={400} justifyContent="center" alignItems="center">
                    <Spinner colorScheme="red" />
                  </Flex>
                </Td>
              </Tr>
            ) : (
              <>
                {articles.map((article, idx) => (
                  <Tr key={idx}>
                    <Td>
                      {(Number(router.query.page || 1) - 1) * 10 + idx + 1}.
                    </Td>
                    <Td>{article.title}</Td>
                    <Td>
                      {dayjs(article.createdAt).format(
                        "dddd, DD-MM-YYYY HH:MM"
                      )}
                    </Td>
                    <Td>
                      <ButtonGroup>
                        <Button
                          colorScheme="blue"
                          onClick={() => handleShowPopupForm(article.id)}
                        >
                          Edit
                        </Button>
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
              </>
            )}
          </Tbody>
        </Table>
      </TableContainer>
      <Pagination totalData={totalData} rowsPerPage={10} />

      <Modal
        closeOnOverlayClick={false}
        isOpen={modalFormShown}
        onClose={handleClosePopupForm}
        isCentered
        size="3xl"
        scrollBehavior="inside"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalHeader>Edit Data Berita</ModalHeader>
          <ModalBody>
            <Formik
              initialValues={
                choosenArticle
                  ? choosenArticle
                  : {
                      title: "",
                      content: draftToHtml(
                        convertToRaw(
                          EditorState.createEmpty().getCurrentContent()
                        )
                      ),
                      imageURL: "",
                    }
              }
              onSubmit={
                choosenArticle ? handleEditArticle : handleCreateArticle
              }
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
                    <Button
                      mr={3}
                      onClick={handleClosePopupForm}
                      isDisabled={isSubmitting}
                    >
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
      {/* Delete Modal*/}
      <Modal
        isOpen={modalDeleteShown}
        onClose={handleCloseDeletePopup}
        isCentered
      >
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalHeader>Hapus Berita</ModalHeader>
          <ModalBody>Apakah Anda yakin ingin menghapus data ini ?</ModalBody>
          <ModalFooter>
            <Button
              mr={3}
              onClick={handleCloseDeletePopup}
              isDisabled={isSubmitting}
            >
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
    </LayoutAdmin>
  );
};

export const getServerSideProps: GetServerSideProps = requireAuth({});

export default Berita;
