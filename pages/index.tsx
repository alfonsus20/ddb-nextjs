import type { NextPage } from "next";
import { Box, Button, Container, Flex, Icon, Text } from "@chakra-ui/react";
import Image from "next/image";
import { FaUserGraduate, FaUserAlt } from "react-icons/fa";
import { StakeHolderCarousel } from "../components/Carousel";
import Kb19Image from "../public/kambud19.jpg";
import Head from "next/head";
import { HiAnnotation } from "react-icons/hi";

const Home: NextPage = () => {
  return (
    <Box>
      <Head>
        <title>Dara Daeng Brawijaya</title>
      </Head>
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
      <Flex
        maxW="container.xl"
        mx="auto"
        py={20}
        alignItems="center"
        columnGap={12}
      >
        <Box width="50%" pos="relative">
          <Image src={Kb19Image} alt="tentang" placeholder="blur" />
        </Box>
        <Box width="50%">
          <Text fontSize="3xl" mb={2} fontWeight="semibold">
            Tentang Dara Daeng Brawijaya
          </Text>
          <Text textAlign="justify" fontSize="lg">
            Suatu komunitas yang terbentuk di Universitas Brawijaya yang
            beranggotakan seluruh mahasiswa Sul-Sel yang sudah lama terbentuk
            dan sampai sekarang beranggotakan kurang lebih 400 orang. Komunitas
            Dara Daeng Brawijaya atau sering disingkat DDB ini bertujuan untuk
            sebagai tempat berkumpul seluruh mahasiswa(i) asal Sulawesi Selatan
            untuk berinteraksi sesama teman se-daerah agar saling dapat melepas
            rindu.
          </Text>
        </Box>
      </Flex>
      <Container maxW="container.xl" pt={6} pb={20}>
        <Text textAlign="center" fontSize="3xl" fontWeight="bold" mb={4}>
          Visi dan Misi Dara Daeng Brawijaya
        </Text>
        <Box mb={8}>
          <Text fontSize="2xl" fontWeight="semibold" mb={4}>
            Visi
          </Text>
          <Flex gap={4}>
            {[...Array(4)].map((_, idx) => (
              <Box shadow="md" key={idx} p={4}>
                <Flex gap={2} alignItems="center" mb={2} color="red.500">
                  <Box flex="0 0 auto">
                    <HiAnnotation fontSize={40} />
                  </Box>
                  <Text fontWeight="semibold">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit
                  </Text>
                </Flex>
                <Text fontSize="sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem
                  ipsum dolor sit amet consectetur adipisicing elit
                </Text>
              </Box>
            ))}
          </Flex>
        </Box>
        <Box>
          <Text fontSize="2xl" fontWeight="semibold" mb={4}>
            Misi
          </Text>
          <Flex gap={4}>
            {[...Array(4)].map((_, idx) => (
              <Box shadow="md" key={idx} p={4}>
                <Flex gap={2} alignItems="center" mb={2} color="red.500">
                  <Box flex="0 0 auto">
                    <HiAnnotation fontSize={40} />
                  </Box>
                  <Text fontWeight="semibold">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit
                  </Text>
                </Flex>
                <Text fontSize="sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem
                  ipsum dolor sit amet consectetur adipisicing elit
                </Text>
              </Box>
            ))}
          </Flex>
        </Box>
      </Container>
      <Box color="white" pos="relative">
        <Image
          src="/data-alumni-mhs.jpg"
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
          bgColor="red.600"
          opacity={0.9}
        />
        <Flex
          maxW="container.xl"
          mx="auto"
          py={20}
          alignItems="center"
          zIndex={10}
          pos="relative"
        >
          <Box w="50%">
            <Text fontSize="3xl" mb={4} fontWeight="semibold">
              Data Anggota Dara Daeng Brawijaya
            </Text>
            <Button
              colorScheme="white"
              variant="outline"
              _hover={{ bg: "white", color: "red.500" }}
            >
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
      <Box py={16}>
        <Text fontSize="3xl" fontWeight="semibold" textAlign="center" mb={6}>
          Ketua dan Wakil Ketua Dara Daeng Brawijaya
        </Text>
        <StakeHolderCarousel />
      </Box>
    </Box>
  );
};

export default Home;
