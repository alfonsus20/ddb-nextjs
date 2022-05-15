import { Box, Container, Grid, GridItem, Text } from "@chakra-ui/react";
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
        <Grid
          gridTemplateColumns={{
            base: "repeat(1,1fr)",
            sm: "repeat(2,1fr)",
            md: "repeat(3,1fr)",
          }}
          gap={8}
        >
          {data?.map((article) => (
            <GridItem key={article.id}>
              <NewsCard
                id={article.id}
                title={article.title}
                content={article.content}
                image={article.imageURL}
                blurHash={article.blurHash}
              />
            </GridItem>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await getArticles();
  return { props: { data: data.data } };
};

export default Berita;
