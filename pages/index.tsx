import { Box, Button, Flex, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <Box>
      <Flex
        h="100vh"
        justifyContent="center"
        alignItems="center"
        pos="relative"
      >
        <Image
          src="/ub.jpg"
          layout="fill"
          alt="ub"
          objectFit="cover"
          role="presentation"
          objectPosition="center"
        />
        <Box
          pos="absolute"
          top={0}
          left={0}
          bottom={0}
          right={0}
          bgColor="black"
          opacity={0.3}
        />
        <Flex
          flexDir="column"
          pos="relative"
          zIndex={10}
          justifyContent="center"
          alignItems="center"
        >
          <Text color="white" mb={4} fontSize="6xl" textAlign="center">
            Dara Daeng Brawijaya
          </Text>
          <Button colorScheme="red" width="fit-content">
            Tentang Kami
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Home;
