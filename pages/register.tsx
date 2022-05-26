import {
  Box,
  Button,
  Container,
  Input,
  Text,
  VStack,
  FormControl,
  FormErrorMessage,
  useToast,
} from "@chakra-ui/react";
import { Field, Formik } from "formik";
import Head from "next/head";
import Link from "next/link";
import React, { useState } from "react";
import { object, ref, string, number } from "yup";
import { login, register } from "../fetches/auth";
import useError from "../hooks/useError";
import { RegisterParams } from "../types/entities/auth";
import Router from "next/router";
import Cookie from "js-cookie";
import { GetServerSideProps } from "next";
import requireNoAuth from "../hoc/requireNoAuth";

const RegisterSchema = object({
  name: string().required().label("nama lengkap"),
  email: string().required().email().label("email"),
  password: string().required().label("password").min(8),
  passwordConfirmation: string()
    .required()
    .label("konfirmasi password")
    .oneOf([ref("password")], "password harus sama"),
  entryYear: number().required().label("angkatan"),
  majority: string().required().label("program studi"),
});

const Register = () => {
  const { handleError } = useError();
  const [loading, setLoading] = useState<boolean>(false);
  const toast = useToast();

  const handleSubmit = async (body: RegisterParams) => {
    try {
      setLoading(true);
      await register(body);
      const { data } = await login({
        email: body.email,
        password: body.password,
      });
      Cookie.set("token", data.data.token);
      Router.push("/profil");
      toast({ description: "Pendaftaran Berhasil", status: "success" });
    } catch (e) {
      handleError(e);
    } finally {
      setLoading(false);
    }
  };
  return (
    <Box bg="red.500">
      <Head>
        <title>Register</title>
      </Head>
      <Container maxW="lg" py={20}>
        <Box shadow="lg" px={6} py={12} bg="white">
          <Text textAlign="center" fontSize="3xl" fontWeight="semibold" mb={6}>
            Register
          </Text>
          <Formik
            initialValues={{
              name: "",
              email: "",
              password: "",
              passwordConfirmation: "",
              majority: "",
              entryYear: "",
            }}
            onSubmit={(data) => {
              handleSubmit({
                ...data,
                entryYear: parseInt(data.entryYear, 10),
              });
            }}
            validationSchema={RegisterSchema}
          >
            {({ errors, handleSubmit }) => (
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
                  <FormControl isInvalid={!!errors.email}>
                    <Field
                      as={Input}
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Email"
                    />
                    <FormErrorMessage>{errors.email}</FormErrorMessage>
                  </FormControl>
                  <FormControl isInvalid={!!errors.password}>
                    <Field
                      as={Input}
                      id="password"
                      name="password"
                      type="password"
                      placeholder="Password"
                    />
                    <FormErrorMessage>{errors.password}</FormErrorMessage>
                  </FormControl>
                  <FormControl isInvalid={!!errors.passwordConfirmation}>
                    <Field
                      as={Input}
                      id="passwordConfirmation"
                      name="passwordConfirmation"
                      type="password"
                      placeholder="Konfirmasi Password"
                    />
                    <FormErrorMessage>
                      {errors.passwordConfirmation}
                    </FormErrorMessage>
                  </FormControl>
                  <FormControl isInvalid={!!errors.majority}>
                    <Field
                      as={Input}
                      id="majority"
                      name="majority"
                      placeholder="Program Studi"
                    />
                    <FormErrorMessage>{errors.majority}</FormErrorMessage>
                  </FormControl>
                  <FormControl isInvalid={!!errors.entryYear}>
                    <Field
                      as={Input}
                      id="entryYear"
                      name="entryYear"
                      placeholder="Angkatan"
                      type="number"
                    />
                    <FormErrorMessage>{errors.entryYear}</FormErrorMessage>
                  </FormControl>
                  <Button type="submit" colorScheme="red" isLoading={loading}>
                    Daftar
                  </Button>
                  <Text>
                    Sudah punya akun? Login di{" "}
                    <Link href="/login" passHref>
                      <Box as="a" color="blue.500">
                        sini
                      </Box>
                    </Link>{" "}
                  </Text>
                </VStack>
              </form>
            )}
          </Formik>
        </Box>
      </Container>
    </Box>
  );
};

export const getServerSideProps: GetServerSideProps = requireNoAuth();

export default Register;
