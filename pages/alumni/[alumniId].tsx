import {
  AspectRatio,
  Box,
  Container,
  Flex,
  Text,
  VStack,
} from "@chakra-ui/react";
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

import AvatarImg from "../../public/avatar.jpg";

type Props = {
  data?: UserData;
};

const AlumniDetail: NextPage<Props> = ({ data }) => {
  return (
    <Container maxW="container.xl" pt={6} pb={16}>
      <Flex
        gap={{ base: 4, md: 8 }}
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
              src={data?.profileImageURL || AvatarImg}
              alt={data?.name}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </AspectRatio>
        </Box>
        <Box flex="1 1 auto" width="full">
          <Box mb={6}>
            <Text fontWeight="bold" color="red.500" fontSize="3xl">
              {data?.name}
            </Text>
            <Box fontSize="lg">
              <Text>{data?.majority}</Text>
              <Text>{data?.entryYear}</Text>
            </Box>
          </Box>
          <VStack spacing={2} align="flex-start">
            <Flex>
              <Box flex="0 0 150px">Judul Skripsi</Box>
              <Box flex="0 0 12px">:</Box>
              <Box flex="1 1 auto">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Facilis illum atque veritatis fugiat totam blanditiis distinctio
              </Box>
            </Flex>
            <Flex>
              <Box flex="0 0 150px">Link Skripsi</Box>
              <Box flex="0 0 12px">:</Box>
              <Box flex="1 1 auto">{data?.thesisURL}</Box>
            </Flex>
            <Flex>
              <Box flex="0 0 150px">Tahun Lulus</Box>
              <Box flex="0 0 12px">:</Box>
              <Box flex="1 1 auto">{data?.graduationYear}</Box>
            </Flex>
          </VStack>
        </Box>
      </Flex>
    </Container>
  );
};

export const getStaticProps: GetStaticProps = async (
  ctx: GetStaticPropsContext
) => {
  const { alumniId } = ctx.params!;
  const { data } = await getUserById(Number(alumniId));

  return { props: { data: data.data }, revalidate: 60 * 60 * 24 };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await getAllUsers(true);
  const paths = data.data.map((user) => ({
    params: { alumniId: user.id.toString() },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export default AlumniDetail;
