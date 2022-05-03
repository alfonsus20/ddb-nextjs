import { Box, Button, Flex, Icon, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import Image from "next/image";
import { FaUserGraduate, FaUserAlt } from "react-icons/fa";

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
      <Box color="white" pos="relative">
        <Image
          src="/data-alumni-mhs.jpg"
          layout="fill"
          alt="ub"
          objectFit='cover'
          role="presentation"
          objectPosition="center"
        />
        <Box
          pos="absolute"
          top={0}
          left={0}
          bottom={0}
          right={0}
          bgColor="red.600"
          opacity={0.9}
        />
        <Flex maxW="container.xl" mx="auto" py={20} alignItems="center" zIndex={10} pos='relative'>
          <Box w="50%">
            <Text fontSize="3xl" mb={4} fontWeight="semibold">
              Data Anggota Dara Daeng Brawijaya
            </Text>
            <Button colorScheme="white" variant="outline">
              Selengkapnya
            </Button>
          </Box>
          <Box w="50%">
            <Text mb={8}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit
              fuga incidunt maiores quas, dicta dolor earum ducimus ab optio
              nihil numquam corrupti quos cumque veniam quia exercitationem
              laborum dolorum sunt? Quod fugiat veniam distinctio itaque
              voluptatum saepe modi enim, magni aperiam quos velit voluptatem
            </Text>
            <Flex justifyContent="space-around">
              <Box textAlign="center">
                <Icon as={FaUserGraduate} w={20} h={20} />
                <Text fontSize="xl" fontWeight="semibold">
                  100
                </Text>
                <Text>Alumni</Text>
              </Box>
              <Box textAlign="center">
                <Icon as={FaUserAlt} w={20} h={20} />
                <Text fontSize="xl" fontWeight="semibold">
                  200
                </Text>
                <Text>Mahasiswa Aktif</Text>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Home;