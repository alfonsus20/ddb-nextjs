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
} from "@chakra-ui/react";
import React from "react";
import { FaFacebookF, FaGoogle, FaLinkedinIn } from "react-icons/fa";

const Login = () => {
  return (
    <Box bg="red.500">
      <Container maxW="lg" py={20}>
        <Box shadow="lg" px={6} py={12} bg='white'>
          <Text textAlign="center" fontSize="3xl" fontWeight="semibold" mb={6}>
            Login
          </Text>
          <VStack spacing={4} as="form">
            <Input placeholder="Email" />
            <Input placeholder="Password" />
            <Button colorScheme="red">Login</Button>
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
        </Box>
      </Container>
    </Box>
  );
};

export default Login;
