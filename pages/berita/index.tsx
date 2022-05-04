import { Box, Container, Flex, Text } from "@chakra-ui/react";
import { NextPage } from "next";
import Head from "next/head";
import React from "react";
import { NewsCard } from "../../components/Card";

const Berita: NextPage = () => {
  return (
    <Box pt={4} pb={12}>
      <Head>
        <title>Berita</title>
      </Head>
      <Container maxW="container.xl">
        <Text fontSize="3xl" fontWeight="bold" mb={4}>
          Berita
        </Text>
        <Flex flexWrap="wrap" gap={5}>
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
        </Flex>
      </Container>
    </Box>
  );
};

export default Berita;
