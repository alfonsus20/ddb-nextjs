import {
  Box,
  Button,
  Container,
  Flex,
  Icon,
  IconButton,
  Input,
  Text,
  VStack,
  FormControl,
  FormErrorMessage,
} from "@chakra-ui/react";
import { Field, Formik } from "formik";
import Head from "next/head";
import Link from "next/link";
import React, { useState } from "react";
import { object, string } from "yup";
import { login } from "../fetches/auth";
import { LoginParams } from "../types/entities/auth";
import withoutAuth from "../utils/withoutAuth";
import Cookie from "js-cookie";
import Router from "next/router";
import useError from "../hooks/useError";

const LoginSchema = object({
  email: string().required().email().label("email"),
  password: string().required().label("password"),
});

const Login = () => {
  const { handleError } = useError();
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (body: LoginParams) => {
    try {
      setLoading(true);
      const { data } = await login(body);
      Cookie.set("token", data.data.token);
      Router.push("/profil");
    } catch (e) {
      handleError(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box bg="red.500">
      <Head>
        <title>Login</title>
      </Head>
      <Container maxW="lg" py={20}>
        <Box shadow="lg" px={6} py={12} bg="white">
          <Text textAlign="center" fontSize="3xl" fontWeight="semibold" mb={6}>
            Login
          </Text>
          <Formik
            initialValues={{ email: "", password: "" }}
            onSubmit={handleSubmit}
            validationSchema={LoginSchema}
          >
            {({ errors, handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <VStack spacing={4}>
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
                  <Button type="submit" colorScheme="red" isLoading={loading}>
                    Login
                  </Button>
                  <Text>
                    Belum punya akun? Daftar di{" "}
                    <Link href="/register" passHref>
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

export default withoutAuth(Login);
