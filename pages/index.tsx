import { Flex, Text } from "@chakra-ui/react";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <Flex h="100vh" justifyContent="center" alignItems="center">
      <Text fontSize="4xl" fontWeight="semibold">
        Website is under maintenance
      </Text>
    </Flex>
  );
};

export default Home;
