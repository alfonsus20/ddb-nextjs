import {
  Box,
  Container,
  VStack,
  Text,
  Flex,
  AspectRatio,
} from "@chakra-ui/react";
import {
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
  NextPage,
} from "next";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import { NewsCard } from "../../components/Card";
import {
  getArticles,
  getArticleById,
  getAllArticles,
} from "../../fetches/article";
import { ArticleData } from "../../types/entities/article";

type Props = {
  data: ArticleData;
  otherArticles: Array<ArticleData>;
};

const BeritaDetail: NextPage<Props> = ({ data, otherArticles }) => {
  return (
    <Container maxW="container.xl" pt={6} pb={20}>
      <Head>
        <title>{data.title}</title>
      </Head>
      <Flex gap={8} flexDirection={{ base: "column", md: "row" }}>
        <Box mb={6} w={{ base: "full", md: "65%" }}>
          <Text fontSize="3xl" fontWeight="bold" mb={4}>
            {data.title}
          </Text>
          <AspectRatio
            mb={4}
            pos="relative"
            width="full"
            ratio={{ base: 4 / 3, md: 16 / 9 }}
          >
            <Image
              src={data.imageURL}
              alt="berita"
              objectFit="cover"
              objectPosition="center"
              layout="fill"
            />
          </AspectRatio>
          <VStack alignItems="flex-start" textAlign="justify">
            <Box dangerouslySetInnerHTML={{ __html: data.content }} />
          </VStack>
        </Box>
        <Box w={{ base: "full", md: "35%" }} pt={2}>
          <Text fontSize="2xl" fontWeight="semibold" mb={4}>
            Baca Berita Lainnya
          </Text>
          <Flex flexWrap="wrap" gap={8} justifyContent="center">
            {otherArticles.map((article) => (
              <NewsCard
                key={article.id}
                id={article.id}
                content={article.content}
                title={article.title}
                image={article.imageURL}
                blurHash={article.blurHash || "12345622"}
              />
            ))}
          </Flex>
        </Box>
      </Flex>
    </Container>
  );
};

export const getStaticProps: GetStaticProps = async (
  ctx: GetStaticPropsContext
) => {
  const { newsId } = ctx.params!;
  const { data } = await getArticleById(Number(newsId));
  const { data: dataOtherArticles } = await getArticles("rowsPerPage=3");

  return { props: { data: data.data, otherArticles: dataOtherArticles.data } };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await getAllArticles();
  const paths = data.data.map((article) => ({
    params: { newsId: article.id.toString() },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
};

export default BeritaDetail;
