import {
  Badge,
  Button,
  ButtonGroup,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Spinner,
  Switch,
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
import { Field, Formik } from "formik";
import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { boolean, number, object, string } from "yup";
import LayoutAdmin from "../../components/LayoutAdmin";
import Pagination from "../../components/Pagination";
import {
  deleteUser,
  editUser,
  getUsers,
  promoteToAdmin,
  verifyUser,
} from "../../fetches/user";
import useError from "../../hooks/useError";
import { User, UserData } from "../../types/entities/user";
import withAuth from "../../utils/withAuth";

type Props = {
  user?: UserData;
};

const EditProfileSchema = object({
  name: string().required().label("nama lengkap"),
  entryYear: number().required().label("angkatan"),
  majority: string().required().label("program studi"),
  isGraduated: boolean(),
  graduationYear: number()
    .when("isGraduated", {
      is: true,
      then: (schema) => schema.required(),
      otherwise: (schema) => schema.optional().nullable(),
    })
    .label("tahun lulus")
    .typeError("tahun lulus wajib berupa angka"),
  thesisTitle: string()
    .when("isGraduated", {
      is: true,
      then: (schema) => schema.required(),
      otherwise: (schema) => schema.optional().nullable(),
    })
    .label("judul skripsi")
    .typeError("judul skripsi wajib berupa kalimat"),
  thesisURL: string()
    .url()
    .when("isGraduated", {
      is: true,
      then: (schema) => schema.required(),
      otherwise: (schema) => schema.optional().nullable(),
    })
    .label("url skripsi")
    .typeError("url skripsi wajib berupa kalimat"),
});

const Admin: NextPage<Props> = ({ user: authenticatedUser }) => {
  const [totalData, setTotalData] = useState<number>(0);
  const [modalDeleteShown, setModalDeleteShown] = useState<boolean>(false);
  const [modalFormShown, setModalFormShown] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const [isFetching, setIsFetching] = useState<boolean>(false);

  const [users, setUsers] = useState<Array<UserData>>([]);

  const { handleError } = useError();
  const toast = useToast();
  const router = useRouter();

  const [choosenUser, setChoosenUser] = useState<UserData | undefined>();

  const [modalVerifyUserShown, setModalVerifyUserShown] =
    useState<boolean>(false);
  const [modalMakeAdminShown, setModalMakeAdminShown] =
    useState<boolean>(false);

  const fetchUsers = async () => {
    try {
      setIsFetching(true);
      const { data } = await getUsers({ ...router.query });
      setUsers(data.data.filter((user) => user.id !== authenticatedUser?.id));
      setTotalData(data.totalData);
    } catch (e) {
      handleError(e);
    } finally {
      setIsFetching(false);
    }
  };

  const emptyState = () => {
    setChoosenUser(undefined);
  };

  useEffect(() => {
    fetchUsers();
  }, [router.query.page]);

  const handleShowPopupForm = (id: number) => {
    setModalFormShown(true);
    setChoosenValue(id);
  };

  const handleShowPopupDelete = (id: number) => {
    setModalDeleteShown(true);
    setChoosenValue(id);
  };

  const setChoosenValue = (id: number) => {
    const user = users.find((user) => user.id === id);
    if (user) {
      setChoosenUser(user);
    }
  };

  const handleCloseDeletePopup = () => {
    setModalDeleteShown(false);
    emptyState();
  };

  const handleDeleteUser = async () => {
    try {
      setIsSubmitting(true);
      if (choosenUser) {
        await deleteUser(choosenUser.id);
        toast({ description: "Berhasil menghapus user", status: "success" });
        handleCloseDeletePopup();
        await fetchUsers();
      }
    } catch (e) {
      handleError(e);
    } finally {
      setIsSubmitting(false);
      handleCloseDeletePopup();
    }
  };

  const handleEditUser = async (body: User) => {
    try {
      setIsSubmitting(true);
      if (choosenUser) {
        await editUser(choosenUser.id, body);
        toast({ description: "Berhasil mengedit user", status: "success" });
        handleCloseEditFormModal();
        await fetchUsers();
      }
    } catch (e) {
      handleError(e);
    } finally {
      setIsSubmitting(false);
      handleCloseDeletePopup();
    }
  };

  const handleCloseVerifyUserModal = () => {
    setModalVerifyUserShown(false);
    emptyState();
  };

  const handleCloseMakeAdminModal = () => {
    setModalMakeAdminShown(false);
    emptyState();
  };

  const handleCloseEditFormModal = () => {
    setModalFormShown(false);
    emptyState();
  };

  const handleShowVerifyUserModal = (id: number) => {
    setChoosenValue(id);
    setModalVerifyUserShown(true);
  };

  const handleShowMakeAdminModal = (id: number) => {
    setChoosenValue(id);
    setModalMakeAdminShown(true);
  };

  const handleMakeUserAsAdmin = async () => {
    try {
      setIsSubmitting(true);
      if (choosenUser) {
        await promoteToAdmin(choosenUser.id);
        toast({
          description: "User berhasil dijadikan admin",
          status: "success",
        });
        await fetchUsers();
      }
    } catch (e) {
      handleError(e);
    } finally {
      setIsSubmitting(false);
      handleCloseMakeAdminModal();
    }
  };

  const handleVerifyUser = async () => {
    try {
      setIsSubmitting(true);
      if (choosenUser) {
        await verifyUser(choosenUser.id);
        toast({
          description: "User berhasil diverifikasi",
          status: "success",
        });
        await fetchUsers();
      }
    } catch (e) {
      handleError(e);
    } finally {
      setIsSubmitting(false);
      handleCloseVerifyUserModal();
    }
  };

  return (
    <LayoutAdmin title="Kelola User">
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
                {users.map((user, idx) => (
                  <Tr key={idx}>
                    <Td>
                      {(Number(router.query.page || 1) - 1) * 10 + idx + 1}.
                    </Td>
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
                        <Button
                          colorScheme="blue"
                          onClick={() => handleShowPopupForm(user.id)}
                        >
                          Edit
                        </Button>
                        <Button
                          colorScheme="green"
                          disabled={user.isVerified}
                          onClick={() => handleShowVerifyUserModal(user.id)}
                        >
                          Verifikasi
                        </Button>
                        <Button
                          colorScheme="yellow"
                          color="white"
                          disabled={user.isAdmin}
                          onClick={() => handleShowMakeAdminModal(user.id)}
                        >
                          Jadikan Admin
                        </Button>
                        <Button
                          colorScheme="red"
                          onClick={() => handleShowPopupDelete(user.id)}
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

      {/* Edit Form Modal */}
      <Modal
        isOpen={modalFormShown}
        closeOnOverlayClick={false}
        onClose={handleCloseEditFormModal}
        isCentered
        size="2xl"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalHeader>Edit Data User</ModalHeader>
          <ModalBody>
            <Formik
              initialValues={choosenUser ? choosenUser : ({} as User)}
              onSubmit={handleEditUser}
              validationSchema={EditProfileSchema}
            >
              {({ errors, handleSubmit, values, handleChange }) => (
                <form onSubmit={handleSubmit}>
                  <VStack spacing={4}>
                    <FormControl isInvalid={!!errors.name}>
                      <Field
                        as={Input}
                        id="name"
                        name="name"
                        placeholder="Nama Lengkap"
                      />
                      <FormErrorMessage>{errors.name}</FormErrorMessage>
                    </FormControl>
                    <FormControl isInvalid={!!errors.entryYear}>
                      <Field
                        as={Input}
                        id="entryYear"
                        name="entryYear"
                        placeholder="Angkatan"
                      />
                      <FormErrorMessage>{errors.entryYear}</FormErrorMessage>
                    </FormControl>
                    <FormControl isInvalid={!!errors.majority}>
                      <Field
                        as={Input}
                        id="majority"
                        name="majority"
                        placeholder="Jurusan"
                      />
                      <FormErrorMessage>{errors.majority}</FormErrorMessage>
                    </FormControl>
                    <FormControl display="flex" alignItems="center" py={3}>
                      <FormLabel htmlFor="email-alerts" mb="0">
                        Sudah menjadi alumni
                      </FormLabel>
                      <Switch
                        size="md"
                        name="isGraduated"
                        isChecked={values.isGraduated}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                          handleChange({
                            ...e,
                            target: {
                              name: "isGraduated",
                              value: e.target.checked,
                            },
                          });
                        }}
                      />
                    </FormControl>
                    {values.isGraduated && (
                      <>
                        <FormControl isInvalid={!!errors.graduationYear}>
                          <FormLabel>Tahun Lulus</FormLabel>
                          <Field
                            as={Input}
                            name="graduationYear"
                            type="number"
                          />
                          <FormErrorMessage>
                            {errors.graduationYear}
                          </FormErrorMessage>
                        </FormControl>
                        <FormControl isInvalid={!!errors.thesisTitle}>
                          <Field
                            as={Input}
                            id="thesisTitle"
                            name="thesisTitle"
                            placeholder="Judul Skripsi"
                          />
                          <FormErrorMessage>
                            {errors.thesisTitle}
                          </FormErrorMessage>
                        </FormControl>
                        <FormControl isInvalid={!!errors.thesisURL}>
                          <Field
                            as={Input}
                            id="thesisURL"
                            name="thesisURL"
                            placeholder="Judul Skripsi"
                          />
                          <FormErrorMessage>
                            {errors.thesisURL}
                          </FormErrorMessage>
                        </FormControl>
                      </>
                    )}
                  </VStack>
                  <ButtonGroup py={4} display="flex" justifyContent="flex-end">
                    <Button
                      mr={3}
                      onClick={handleCloseEditFormModal}
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
        closeOnOverlayClick={false}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalHeader>Hapus User</ModalHeader>
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
              onClick={handleDeleteUser}
              isLoading={isSubmitting}
            >
              Yakin
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      {/* Verify User Modal*/}
      <Modal
        isOpen={modalVerifyUserShown}
        onClose={handleCloseVerifyUserModal}
        isCentered
      >
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalHeader>Verifikasi User</ModalHeader>
          <ModalBody>
            Apakah Anda yakin ingin menverifikasi user ini ? Data user akan di
            tampilkan di halaman depan
          </ModalBody>
          <ModalFooter>
            <Button
              mr={3}
              onClick={handleCloseVerifyUserModal}
              isDisabled={isSubmitting}
            >
              Batal
            </Button>
            <Button
              colorScheme="blue"
              onClick={handleVerifyUser}
              isLoading={isSubmitting}
            >
              Yakin
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      {/* Promote User to Admin Modal*/}
      <Modal
        isOpen={modalMakeAdminShown}
        onClose={handleCloseMakeAdminModal}
        isCentered
      >
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalHeader>Jadikan User Admin</ModalHeader>
          <ModalBody>
            Apakah Anda yakin ingin menjadikan user ini sebagai admin ?
          </ModalBody>
          <ModalFooter>
            <Button
              mr={3}
              onClick={handleCloseMakeAdminModal}
              isDisabled={isSubmitting}
            >
              Batal
            </Button>
            <Button
              colorScheme="blue"
              onClick={handleMakeUserAsAdmin}
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

export default withAuth(Admin, true);
