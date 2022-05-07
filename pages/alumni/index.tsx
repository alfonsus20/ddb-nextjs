import { Container, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { StudentCard } from "../../components/Card";

const Alumni = () => {
  return (
    <Container maxW="container.xl" pt={4} pb={16}>
      <Text fontSize="3xl" textAlign="center" fontWeight="bold" mb={4}>
        Alumni Aktif
      </Text>
      <Flex flexWrap="wrap" gap={8} justifyContent="center">
        <StudentCard />
        <StudentCard />
        <StudentCard />
        <StudentCard />
        <StudentCard />
        <StudentCard />
        <StudentCard />
        <StudentCard />
      </Flex>
    </Container>
  );
};

export default Alumni;
