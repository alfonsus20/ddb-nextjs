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
  Switch,
  Text,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { Field, Formik } from "formik";
import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
import withAuth from "../utils/withAuth";
import Layout from "../components/Layout";
import { UserData } from "../types/entities/user";
import Router from "next/router";
import Cookie from "js-cookie";
import { editProfile, editProfileImage } from "../fetches/auth";
import { getBlurDataURL } from "../utils/helper";
import { boolean, number, object, string } from "yup";

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
    .label("tahun lulus").typeError("tahun lulus wajib berupa angka"),
  thesisTitle: string()
    .when("isGraduated", {
      is: true,
      then: (schema) => schema.required(),
      otherwise: (schema) => schema.optional().nullable(),
    })
    .label("judul skripsi").typeError("judul skripsi wajib berupa kalimat"),
  thesisURL: string()
    .url()
    .when("isGraduated", {
      is: true,
      then: (schema) => schema.required(),
      otherwise: (schema) => schema.optional().nullable(),
    })
    .label("url skripsi").typeError("url skripsi wajib berupa kalimat"),
});

const Profil: NextPage<Props> = ({ user }) => {
  const toast = useToast();
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleLogout = () => {
    Cookie.remove("token");
    Router.push("/login");
  };

  const handleEditProfile = async (body: UserData) => {
    try {
      setIsSubmitting(true);
      await editProfile(body);
      toast({ description: "Sukses", status: "success" });
      window.location.reload();
    } catch (e) {
      console.log(e);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <Container maxW="container.xl" pt={4} pb={16} px={{ base: 8, "2xl": 0 }}>
        <Head>
          <title>Profil</title>
        </Head>
        <Text fontSize="3xl" fontWeight="bold" mb={4}>
          Profil Anda
        </Text>
        <Formik
          initialValues={user!}
          validationSchema={EditProfileSchema}
          onSubmit={handleEditProfile}
        >
          {({ values, handleChange, handleSubmit, errors }) => (
            <form onSubmit={handleSubmit}>
              <Flex gap={8} direction={{ base: "column", md: "row" }}>
                <Flex
                  direction="column"
                  flex={{ base: "1 1 100%", sm: "0 0 300px" }}
                >
                  <Box pos="relative" alignSelf="center">
                    <Circle
                      pos="relative"
                      size={{ base: 250, md: 300 }}
                      overflow="hidden"
                    >
                      <Image
                        src={values.profileImageURL || "/pengurus/fuady.jpg"}
                        alt="fuady"
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center"
                        placeholder="blur"
                        blurDataURL={getBlurDataURL(
                          values.hashBlur || "12312312"
                        )}
                      />
                    </Circle>
                    <label htmlFor="profile-image">
                      <IconButton
                        as="div"
                        rounded="full"
                        bg="white"
                        icon={<Icon as={FaEdit} color="red.500" />}
                        aria-label="edit profil"
                        pos="absolute"
                        right={0}
                        bottom={16}
                        shadow="lg"
                      />
                    </label>
                    <Input
                      type="file"
                      name="image"
                      id="profile-image"
                      hidden
                      accept='.png, .jpg, .jpeg'
                      onChange={async (
                        e: React.ChangeEvent<HTMLInputElement>
                      ) => {
                        const files = e.target.files;
                        if (files != null) {
                          try {
                            await editProfileImage(files[0]);
                            toast({
                              description: "Foto berhasil di update",
                              status: "success",
                            });
                            window.location.reload();
                          } catch (e) {
                            console.log(e);
                          }
                        }
                      }}
                    />
                  </Box>
                  <Box pt={2} pb={4}>
                    <Text
                      fontWeight="bold"
                      color="red.500"
                      fontSize="2xl"
                      mb={1}
                    >
                      {user?.name}
                      {user?.isAdmin && (
                        <Badge ml="1" variant="solid" colorScheme="red">
                          Admin
                        </Badge>
                      )}
                    </Text>
                    <Text>{user?.majority}</Text>
                  </Box>
                  {user?.isAdmin && (
                    <Link href="/admin" passHref>
                      <Button width="full" colorScheme="red" mb={2}>
                        Halaman Admin
                      </Button>
                    </Link>
                  )}
                  <Button
                    width="full"
                    colorScheme="red"
                    variant="outline"
                    onClick={handleLogout}
                  >
                    Logout
                  </Button>
                </Flex>
                <Box flex="1 1 auto">
                  <VStack spacing={4} maxW="container.sm">
                    <FormControl isInvalid={!!errors.name}>
                      <FormLabel>Nama</FormLabel>
                      <Field as={Input} name="name" />
                      <FormErrorMessage>{errors.name}</FormErrorMessage>
                    </FormControl>
                    <FormControl>
                      <FormLabel>Email</FormLabel>
                      <Field as={Input} name="email" type="email" disabled />
                    </FormControl>
                    <FormControl isInvalid={!!errors.entryYear}>
                      <FormLabel>Angkatan</FormLabel>
                      <Field as={Input} name="entryYear" type="number" />
                      <FormErrorMessage>{errors.entryYear}</FormErrorMessage>
                    </FormControl>
                    <FormControl isInvalid={!!errors.majority}>
                      <FormLabel>Program Studi</FormLabel>
                      <Field as={Input} name="majority" />
                      <FormErrorMessage>{errors.majority}</FormErrorMessage>
                    </FormControl>
                    <FormControl display="flex" alignItems="center" py={3}>
                      <FormLabel htmlFor="email-alerts" mb="0">
                        Saya sudah menjadi alumni
                      </FormLabel>
                      <Switch
                        size="md"
                        colorScheme="red"
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
                          <FormLabel>Judul Skripsi / Tugas Akhir</FormLabel>
                          <Field as={Input} name="thesisTitle" />
                          <FormErrorMessage>
                            {errors.thesisTitle}
                          </FormErrorMessage>
                        </FormControl>
                        <FormControl isInvalid={!!errors.thesisURL}>
                          <FormLabel>Link Skripsi / Tugas Akhir</FormLabel>
                          <Field as={Input} name="thesisURL" />
                          <FormErrorMessage>
                            {errors.thesisURL}
                          </FormErrorMessage>
                        </FormControl>
                      </>
                    )}
                    <Button
                      alignSelf="flex-start"
                      colorScheme="red"
                      type="submit"
                      isLoading={isSubmitting}
                    >
                      Simpan
                    </Button>
                  </VStack>
                </Box>
              </Flex>
            </form>
          )}
        </Formik>
      </Container>
    </Layout>
  );
};

export default withAuth(Profil);
