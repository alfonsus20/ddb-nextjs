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
import { object, ref, string } from "yup";

const RegisterSchema = object({
  email: string().required().email().label("email"),
  password: string().required().label("password").min(8),
  passwordConfirmation: string()
    .required()
    .label("konfirmasi password")
    .oneOf([ref("password")], "password harus sama"),
});

const Register = () => {
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
              email: "",
              password: "",
              passwordConfirmation: "",
            }}
            onSubmit={(res) => alert(JSON.stringify(res))}
            validationSchema={RegisterSchema}
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
                  <Button type="submit" colorScheme="red">
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

export default Register;
