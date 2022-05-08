import { Container, Flex, Grid, Text } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";
import { StudentCard } from "../../components/Card";

const Alumni = () => {
  return (
    <Container maxW="container.xl" pt={4} pb={16}>
      <Head>
        <title>Alumni</title>
      </Head>
      <Text fontSize="3xl" textAlign="center" fontWeight="bold" mb={4}>
        Alumni Aktif
      </Text>
      <Grid gridTemplateColumns="repeat(4,1fr)" gap={8}>
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

export default Alumni;
