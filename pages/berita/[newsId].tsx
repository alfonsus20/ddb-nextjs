import { Box, Container, VStack, Text, Flex } from "@chakra-ui/react";
import {
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
  NextPage,
} from "next";
import Image from "next/image";
import React from "react";
import { NewsCard } from "../../components/Card";

type Props = {
  data?: string;
};

const BeritaDetail: NextPage<Props> = () => {
  return (
    <Container maxW="container.xl" pt={6} pb={20}>
      <Box mb={6}>
        <Text fontSize="3xl" fontWeight="bold" mb={4}>
          Kostum Burung Pada Kampung Budaya 2021
        </Text>
        <Box mb={4}>
          <Image
            src="/ub.jpg"
            width={1280}
            height={600}
            alt="berita"
            objectFit="cover"
            objectPosition="center"
          />
        </Box>
        <VStack textAlign="justify">
          <Text>
            dignissimos ut quaerat sit! Distinctio commodi officia in impedit
            laudantium consequuntur fugiat aliquid aut praesentium possimus,
            maiores quasi saepe ipsum molestiae ullam, iure beatae delectus
            similique ipsam qui, nulla magni dolore. Dolores, iste dignissimos!
            Laborum optio dignissimos consectetur. Atque ut quo illum, facilis
            odit ullam aut debitis doloribus quos assumenda, sunt porro ipsum
            fuga deserunt numquam? Blanditiis ea nihil, quam ducimus maiores
            suscipit id! Ab reiciendis molestiae ad nostrum quisquam omnis enim
            autem saepe totam. Rem quis ullam, ducimus dicta debitis sit
            recusandae repudiandae delectus beatae sed blanditiis dolorem,
            architecto itaque cumque nobis. Corporis. Quaerat, ab. Harum rem
            provident nesciunt quas! Eligendi voluptatibus unde dolorum et atque
            maxime quaerat tenetur eveniet odio dolores! Porro fugiat, maiores
            quia aliquid quis saepe alias nam facilis sequi?
          </Text>
          <Text>
            dignissimos ut quaerat sit! Distinctio commodi officia in impedit
            laudantium consequuntur fugiat aliquid aut praesentium possimus,
            maiores quasi saepe ipsum molestiae ullam, iure beatae delectus
            similique ipsam qui, nulla magni dolore. Dolores, iste dignissimos!
            Laborum optio dignissimos consectetur. Atque ut quo illum, facilis
            odit ullam aut debitis doloribus quos assumenda, sunt porro ipsum
            fuga deserunt numquam? Blanditiis ea nihil, quam ducimus maiores
            suscipit id! Ab reiciendis molestiae ad nostrum quisquam omnis enim
            autem saepe totam. Rem quis ullam, ducimus dicta debitis sit
            recusandae repudiandae delectus beatae sed blanditiis dolorem,
            architecto itaque cumque nobis. Corporis. Quaerat, ab. Harum rem
            provident nesciunt quas! Eligendi voluptatibus unde dolorum et atque
            maxime quaerat tenetur eveniet odio dolores! Porro fugiat, maiores
            quia aliquid quis saepe alias nam facilis sequi?
          </Text>
          <Text>
            dignissimos ut quaerat sit! Distinctio commodi officia in impedit
            laudantium consequuntur fugiat aliquid aut praesentium possimus,
            maiores quasi saepe ipsum molestiae ullam, iure beatae delectus
            similique ipsam qui, nulla magni dolore. Dolores, iste dignissimos!
            Laborum optio dignissimos consectetur. Atque ut quo illum, facilis
            odit ullam aut debitis doloribus quos assumenda, sunt porro ipsum
            fuga deserunt numquam? Blanditiis ea nihil, quam ducimus maiores
            suscipit id! Ab reiciendis molestiae ad nostrum quisquam omnis enim
            autem saepe totam. Rem quis ullam, ducimus dicta debitis sit
            recusandae repudiandae delectus beatae sed blanditiis dolorem,
            architecto itaque cumque nobis. Corporis. Quaerat, ab. Harum rem
            provident nesciunt quas! Eligendi voluptatibus unde dolorum et atque
            maxime quaerat tenetur eveniet odio dolores! Porro fugiat, maiores
            quia aliquid quis saepe alias nam facilis sequi?
          </Text>
          <Text>
            dignissimos ut quaerat sit! Distinctio commodi officia in impedit
            laudantium consequuntur fugiat aliquid aut praesentium possimus,
            maiores quasi saepe ipsum molestiae ullam, iure beatae delectus
            similique ipsam qui, nulla magni dolore. Dolores, iste dignissimos!
            Laborum optio dignissimos consectetur. Atque ut quo illum, facilis
            odit ullam aut debitis doloribus quos assumenda, sunt porro ipsum
            fuga deserunt numquam? Blanditiis ea nihil, quam ducimus maiores
            suscipit id! Ab reiciendis molestiae ad nostrum quisquam omnis enim
            autem saepe totam. Rem quis ullam, ducimus dicta debitis sit
            recusandae repudiandae delectus beatae sed blanditiis dolorem,
            architecto itaque cumque nobis. Corporis. Quaerat, ab. Harum rem
            provident nesciunt quas! Eligendi voluptatibus unde dolorum et atque
            maxime quaerat tenetur eveniet odio dolores! Porro fugiat, maiores
            quia aliquid quis saepe alias nam facilis sequi?
          </Text>
        </VStack>
      </Box>
      <Box>
        <Text fontSize="2xl" fontWeight="semibold" mb={4}>
          Baca Berita Lainnya
        </Text>
        <Flex flexWrap="wrap" gap={8} justifyContent="center">
          <NewsCard />
          <NewsCard />
          <NewsCard />
        </Flex>
      </Box>
    </Container>
  );
};

export const getStaticProps: GetStaticProps = (ctx: GetStaticPropsContext) => {
  const { newsId } = ctx.params!;

  return { props: { data: newsId } };
};

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [{ params: { newsId: "1" } }, { params: { newsId: "2" } }],
    fallback: false,
  };
};

export default BeritaDetail;
