import { AspectRatio, Box, Container, Flex, Text } from "@chakra-ui/react";
import {
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
  NextPage,
} from "next";
import Image from "next/image";
import React from "react";
import { getAllUsers, getUserById } from "../../fetches/user";
import { UserData } from "../../types/entities/user";

type Props = {
  data?: UserData;
};

const MahasiswaDetail: NextPage<Props> = ({ data }) => {
  return (
    <Container maxW="container.xl" pt={6} pb={16}>
      <Flex
        gap={8}
        alignItems="center"
        direction={{ base: "column", md: "row" }}
      >
        <Box
          pos="relative"
          flex={{ base: "1 1 100%", md: "0 0 300px" }}
          width="full"
        >
          <AspectRatio pos="relative" ratio={1} width="full" height="full">
            <Image
              src={data?.profileImageURL || "/pengurus/fuady.jpg"}
              alt={data?.name}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </AspectRatio>
        </Box>
        <Box flex="1 1 auto">
          <Box mb={6}>
            <Text fontWeight="bold" color="red.500" fontSize="3xl">
              {data?.name}
            </Text>
            <Box fontSize="lg">
              <Text>{data?.majority}</Text>
              <Text>{data?.entryYear}</Text>
            </Box>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
};

export const getStaticProps: GetStaticProps = async (
  ctx: GetStaticPropsContext
) => {
  const { mahasiswaId } = ctx.params!;
  const { data } = await getUserById(Number(mahasiswaId));

  return { props: { data: data.data } };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await getAllUsers();
  const paths = data.data.map((user) => ({
    params: { mahasiswaId: user.id.toString() },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export default MahasiswaDetail;
