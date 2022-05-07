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
import React from "react";
import { FaFacebookF, FaGoogle, FaLinkedinIn } from "react-icons/fa";
import { object, string } from "yup";

const LoginSchema = object({
  email: string().required().email().label("email"),
  password: string().required().label('password'),
});

const Login = () => {
  return (
    <Box bg="red.500">
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
                  <Text>atau login dengan</Text>
                  <Flex gap={2}>
                    <IconButton
                      colorScheme="red"
                      icon={<Icon as={FaGoogle} />}
                      aria-label="Login with Google"
                    />
                    <IconButton
                      colorScheme="facebook"
                      icon={<Icon as={FaFacebookF} />}
                      aria-label="Login with Facebook"
                    />
                    <IconButton
                      colorScheme="linkedin"
                      icon={<Icon as={FaLinkedinIn} />}
                      aria-label="Login with Google"
                    />
                  </Flex>
                </VStack>
              </form>
            )}
          </Formik>
        </Box>
      </Container>
    </Box>
  );
};

export default Login;
