import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  CloseButton,
  Container,
  Grid,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import { StudentCard } from "../../components/Card";

const Mahasiswa = () => {
  const {
    isOpen: isVisible,
    onClose,
    onOpen,
  } = useDisclosure({ defaultIsOpen: true });

  return (
    <Container maxW="container.xl" pt={4} pb={16}>
      <Head>
        <title>Mahasiswa Aktif</title>
      </Head>
      <Text fontSize="3xl" textAlign="center" fontWeight="bold" mb={4}>
        Mahasiswa Aktif
      </Text>
      <Alert status="info" mb={4}>
        <AlertIcon />
        <Box>
          <AlertTitle>Halo Dara Daeng!</AlertTitle>
          <AlertDescription>
            Kamu anggota DDB (mahasiswa aktif / alumni), tapi belum punya akun
            pada website ini? Yuk klik{" "}
            <Link href="/register" passHref>
              <Box as="a" color="blue.500">
                di sini
              </Box>
            </Link>{" "}
            ya
            <br />
            Kamu sudah punya akun? Langsung{" "}
            <Link href="/login" passHref>
              <Box as="a" color="blue.500">
                login
              </Box>
            </Link>{" "}
            yuk
          </AlertDescription>
        </Box>
        <CloseButton
          alignSelf="flex-start"
          position="absolute"
          right={1}
          top={1}
          onClick={onClose}
        />
      </Alert>
      <Grid
        gridTemplateColumns={{
          base: "repeat(1,1fr)",
          sm: "repeat(2,1fr)",
          md: "repeat(3,1fr)",
          xl: "repeat(4,1fr)",
        }}
        gap={8}
      >
        <StudentCard />
        <StudentCard />
        <StudentCard />
        <StudentCard />
        <StudentCard />
        <StudentCard />
        <StudentCard />
        <StudentCard />
      </Grid>
    </Container>
  );
};

export default Mahasiswa;
