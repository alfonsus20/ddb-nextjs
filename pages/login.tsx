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
import React from "react";
import { FaFacebookF, FaGoogle, FaLinkedinIn } from "react-icons/fa";
import { object, string } from "yup";
import withoutAuth from "../utils/withoutAuth";

const LoginSchema = object({
  email: string().required().email().label("email"),
  password: string().required().label("password"),
});

const Login = () => {
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
            onSubmit={(res) => alert(JSON.stringify(res))}
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
                  <Button type="submit" colorScheme="red">
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
