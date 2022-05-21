import { Container, Grid, Text } from "@chakra-ui/react";
import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import React from "react";
import { StudentCard } from "../../components/Card";
import { getAllUsers } from "../../fetches/user";
import { UserData } from "../../types/entities/user";

type Props = {
  data?: UserData[];
};

const Mahasiswa: NextPage<Props> = ({ data }) => {
  return (
    <Container maxW="container.xl" pt={4} pb={16}>
      <Head>
        <title>Mahasiswa Aktif</title>
      </Head>
      <Text fontSize="3xl" textAlign="center" fontWeight="bold" mb={4}>
        Mahasiswa Aktif
      </Text>
      <Grid
        gridTemplateColumns={{
          base: "repeat(1,1fr)",
          sm: "repeat(2,1fr)",
          md: "repeat(3,1fr)",
          xl: "repeat(4,1fr)",
        }}
        gap={8}
      >
        {data?.map((user) => (
          <StudentCard
            key={user.id}
            id={user.id}
            name={user.name}
            majority={user.majority}
            entryYear={user.entryYear}
            image={user.profileImageURL}
          />
        ))}
      </Grid>
    </Container>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await getAllUsers();
  return { props: { data: data.data } };
};

export default Mahasiswa;
