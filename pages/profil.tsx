import {
  Badge,
  Box,
  Button,
  Circle,
  Container,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Icon,
  IconButton,
  Input,
  Select,
  Switch,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Field, Formik } from "formik";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaEdit } from "react-icons/fa";

const Profil = () => {
  return (
    <Container maxW="container.xl" pt={4} pb={16} px={{ base: 8, "2xl": 0 }}>
      <Text fontSize="3xl" fontWeight="bold" mb={4}>
        Profil Anda
      </Text>
      <Flex gap={8} direction={{ base: "column", md: "row" }}>
        <Flex direction="column" flex={{ base: "1 1 100%", sm: "0 0 300px" }}>
          <Box pos="relative" alignSelf="center">
            <Circle
              pos="relative"
              size={{ base: 250, md: 300 }}
              overflow="hidden"
            >
              <Image
                src="/pengurus/fuady.jpg"
                alt="fuady"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
            </Circle>
            <IconButton
              rounded="full"
              bg="white"
              icon={<Icon as={FaEdit} color="red.500" />}
              aria-label="edit profil"
              pos="absolute"
              right={0}
              bottom={16}
              shadow="lg"
            />
          </Box>
          <Box pt={2} pb={6}>
            <Text fontWeight="bold" color="red.500" fontSize="2xl" mb={1}>
              Budi Iswanto{" "}
              <Badge ml="1" variant="solid" colorScheme="red">
                Admin
              </Badge>
            </Text>
            <Text>Ilmu Bisnis, 2017</Text>
          </Box>
          <Box>
            <Link href="/admin" passHref>
              <Button width="full" colorScheme="red">
                Halaman Admin
              </Button>
            </Link>
          </Box>
        </Flex>
        <Box flex="1 1 auto">
          <Formik initialValues={{ nama: "" }} onSubmit={(e) => console.log(e)}>
            {() => (
              <form>
                <VStack spacing={4} maxW="container.sm">
                  <FormControl>
                    <FormLabel>Nama</FormLabel>
                    <Field as={Input} name="nama" />
                    <FormErrorMessage>Error</FormErrorMessage>
                  </FormControl>
                  <FormControl>
                    <FormLabel>Email</FormLabel>
                    <Field as={Input} name="email" type="email" />
                    <FormErrorMessage>Error</FormErrorMessage>
                  </FormControl>
                  <FormControl>
                    <FormLabel>Tempat Lahir</FormLabel>
                    <Field as={Input} name="tempatlahir" />
                    <FormErrorMessage>Error</FormErrorMessage>
                  </FormControl>
                  <FormControl>
                    <FormLabel>Tanggal Lahir</FormLabel>
                    <Field as={Input} name="tanggalLahir" type="date" />
                    <FormErrorMessage>Error</FormErrorMessage>
                  </FormControl>
                  <FormControl>
                    <FormLabel>Angkatan</FormLabel>
                    <Field as={Input} name="angkatan" type="number" />
                    <FormErrorMessage>Error</FormErrorMessage>
                  </FormControl>
                  <FormControl>
                    <FormLabel>Program Studi</FormLabel>
                    <Select placeholder="Pilih program studi">
                      <option value="option1">Option 1</option>
                      <option value="option2">Option 2</option>
                      <option value="option3">Option 3</option>
                    </Select>
                    <FormErrorMessage>Error</FormErrorMessage>
                  </FormControl>
                  <FormControl display="flex" alignItems="center" py={3}>
                    <FormLabel htmlFor="email-alerts" mb="0">
                      Saya sudah menjadi alumni
                    </FormLabel>
                    <Switch id="email-alerts" size="md" />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Tahun Lulus</FormLabel>
                    <Field as={Input} name="angkatan" type="number" />
                    <FormErrorMessage>Error</FormErrorMessage>
                  </FormControl>
                  <FormControl>
                    <FormLabel>Link Skripsi / Tugas Akhir</FormLabel>
                    <Field as={Input} name="angkatan" type="number" />
                    <FormErrorMessage>Error</FormErrorMessage>
                  </FormControl>
                  <Button alignSelf="flex-start" colorScheme="red">
                    Simpan
                  </Button>
                </VStack>
              </form>
            )}
          </Formik>
        </Box>
      </Flex>
    </Container>
  );
};

export default Profil;
