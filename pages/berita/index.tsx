import { Box, Container, Flex, Text } from "@chakra-ui/react";
import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import React from "react";
import { NewsCard } from "../../components/Card";
import { getArticles } from "../../fetches/article";
import { ArticleData } from "../../types/entities/article";

type BeritaPageProps = {
  data?: Array<ArticleData>;
};

const Berita: NextPage<BeritaPageProps> = ({ data }) => {
  return (
    <Box pt={4} pb={12}>
      <Head>
        <title>Berita</title>
      </Head>
      <Container maxW="container.xl">
        <Text fontSize="3xl" fontWeight="bold" mb={4}>
          Berita
        </Text>
        <Flex flexWrap="wrap" gap={8} justifyContent="center">
          {data?.map((article) => (
            <NewsCard
              key={article.id}
              id={article.id}
              title={article.title}
              content={article.content}
              image={article.imageURL}
            />
          ))}
        </Flex>
      </Container>
    </Box>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await getArticles();
  return { props: { data: data.data } };
};

export default Berita;
