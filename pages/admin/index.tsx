import {
  Badge,
  Button,
  ButtonGroup,
  Flex,
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
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import LayoutAdmin from "../../components/LayoutAdmin";
import Pagination from "../../components/Pagination";
import {
  deleteUser,
  getUsers,
  promoteToAdmin,
  verifyUser,
} from "../../fetches/user";
import useError from "../../hooks/useError";
import { UserData } from "../../types/entities/user";
import withAuth from "../../utils/withAuth";

const Admin = () => {
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
      setUsers(data.data);
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
        toast({ description: "Berhasil menghapus artikel", status: "success" });
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
      
      {/* Delete Modal*/}
      <Modal
        isOpen={modalDeleteShown}
        onClose={handleCloseDeletePopup}
        isCentered
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
