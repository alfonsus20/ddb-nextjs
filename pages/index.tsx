import type { NextPage } from "next";
import { Box, Button, Container, Flex, Icon, Text } from "@chakra-ui/react";
import Image from "next/image";
import { FaUserGraduate, FaUserAlt } from "react-icons/fa";
import { StakeHolderCarousel } from "../components/Carousel";
import Kb19Image from "../public/kambud19.jpg";
import Head from "next/head";
import { VisionCard } from "../components/Card";
import { ChakraBox, Slide } from "../components/Animation";
import { InView } from "react-intersection-observer";
import { MISI_LIST, VISI_LIST } from "../utils/constant";
import Link from "next/link";

const bigTitleAnimation = {
  animate: {
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.04,
      staggerDirection: 1,
    },
  },
};

const titleWrapperAnimation = {
  animate: {
    transition: {
      staggerChildren: 0.3,
      staggerDirection: 1,
    },
  },
};

const letterAnimation = {
  initial: { y: 100 },
  animate: {
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1,
    },
  },
};

const visionCardWrapperAnim = {
  animate: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const visionCardAnim = {
  initial: { y: 100, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1,
    },
  },
};

const buttonAboutUsAnimation = {
  initial: { y: 100 },
  animate: {
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1,
      delay: 1,
    },
  },
};

const Home: NextPage = () => {
  return (
    <ChakraBox initial="initial" animate="animate" exit="exit">
      <Head>
        <title>Dara Daeng Brawijaya</title>
      </Head>
      <Flex
        justifyContent="center"
        alignItems="center"
        pos="relative"
        minH={{ base: "auto", md: "100vh" }}
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
          px={{ base: 8, "2xl": 0 }}
          minH="600px"
        >
          <ChakraBox
            display="flex"
            variants={titleWrapperAnimation}
            columnGap={4}
            flexWrap="wrap"
            justifyContent="center"
            overflow="hidden"
          >
            {[..."Dara Daeng Brawijaya".split(" ")].map((word, index) => (
              <ChakraBox
                variants={bigTitleAnimation}
                key={index}
                overflow="hidden"
              >
                {[...Array.from(word)].map((a, idx) => (
                  <ChakraBox
                    key={idx}
                    variants={letterAnimation}
                    color="white"
                    fontSize={{ base: "5xl", sm: "7xl" }}
                    textAlign="center"
                    display="inline-block"
                    className="lontara"
                  >
                    {a}
                  </ChakraBox>
                ))}
              </ChakraBox>
            ))}
          </ChakraBox>
          <Box overflow="hidden">
            <ChakraBox variants={buttonAboutUsAnimation}>
              <Link passHref href="#about">
                <Button colorScheme="red" width="fit-content">
                  Tentang Kami
                </Button>
              </Link>
            </ChakraBox>
          </Box>
        </Flex>
      </Flex>
      <Flex
        maxW="container.xl"
        mx="auto"
        py={20}
        alignItems="center"
        columnGap={12}
        px={{ base: 8, "2xl": 0 }}
        direction={{ base: "column", md: "row" }}
        overflowX="hidden"
      >
        <Box width={{ base: "full", md: "50%" }} pos="relative" id="about">
          <Slide direction="left">
            <Image src={Kb19Image} alt="tentang" placeholder="blur" />
          </Slide>
        </Box>
        <Box width={{ base: "full", md: "50%" }}>
          <Slide direction="right">
            <Text fontSize="3xl" mb={2} fontWeight="semibold">
              Tentang Dara Daeng Brawijaya
            </Text>
            <Text textAlign="justify" fontSize="lg">
              Suatu komunitas yang terbentuk di Universitas Brawijaya yang
              beranggotakan seluruh mahasiswa Sul-Sel yang sudah lama terbentuk
              dan sampai sekarang beranggotakan kurang lebih 400 orang.
              Komunitas Dara Daeng Brawijaya atau sering disingkat DDB ini
              bertujuan untuk sebagai tempat berkumpul seluruh mahasiswa(i) asal
              Sulawesi Selatan untuk berinteraksi sesama teman se-daerah agar
              saling dapat melepas rindu.
            </Text>
          </Slide>
        </Box>
      </Flex>
      <Container maxW="container.xl" pt={6} pb={20} px={{ base: 8, "2xl": 0 }}>
        <Text textAlign="center" fontSize="3xl" fontWeight="bold" mb={4}>
          Visi dan Misi Dara Daeng Brawijaya
        </Text>
        <Box mb={8}>
          <Text fontSize="2xl" fontWeight="semibold" mb={4}>
            Visi
          </Text>
          <InView>
            {({ ref, inView }) => (
              <ChakraBox
                ref={ref}
                variants={visionCardWrapperAnim}
                display="grid"
                gridTemplateColumns={{
                  base: "repeat(1,1fr)",
                  md: "repeat(3,1fr)",
                }}
                initial="initial"
                animate={inView && "animate"}
                gap={4}
                overflowY="hidden"
              >
                {VISI_LIST.map((visi, idx) => (
                  <ChakraBox key={idx} variants={visionCardAnim}>
                    <VisionCard {...visi} />
                  </ChakraBox>
                ))}
              </ChakraBox>
            )}
          </InView>
        </Box>
        <Box>
          <Text fontSize="2xl" fontWeight="semibold" mb={4}>
            Misi
          </Text>
          <InView>
            {({ ref, inView }) => (
              <ChakraBox
                ref={ref}
                variants={visionCardWrapperAnim}
                display="grid"
                gridTemplateColumns={{
                  base: "repeat(1,1fr)",
                  md: "repeat(2,1fr)",
                  lg: "repeat(4,1fr)",
                }}
                initial="initial"
                animate={inView && "animate"}
                gap={4}
                overflowY="hidden"
              >
                {MISI_LIST.map((misi, idx) => (
                  <ChakraBox key={idx} variants={visionCardAnim}>
                    <VisionCard {...misi} />
                  </ChakraBox>
                ))}
              </ChakraBox>
            )}
          </InView>
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
          px={{ base: 8, "2xl": 0 }}
          direction={{ base: "column", md: "row" }}
          gap={8}
          overflow="hidden"
        >
          <Box width={{ base: "full", md: "50%" }}>
            <Slide direction="left">
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
            </Slide>
          </Box>
          <Box width={{ base: "full", md: "50%" }}>
            <Slide direction="right">
              <Text mb={8}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Suscipit fuga incidunt maiores quas, dicta dolor earum ducimus
                ab optio nihil numquam corrupti quos cumque veniam quia
                exercitationem laborum dolorum sunt? Quod fugiat veniam
                distinctio itaque voluptatum saepe modi enim, magni aperiam quos
                velit voluptatem
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
            </Slide>
          </Box>
        </Flex>
      </Box>
      <Box py={16}>
        <Text
          fontSize="3xl"
          fontWeight="semibold"
          textAlign="center"
          px={{ base: 8, "2xl": 0 }}
          mb={6}
        >
          Ketua dan Wakil Ketua Dara Daeng Brawijaya
        </Text>
        <StakeHolderCarousel />
      </Box>
    </ChakraBox>
  );
};

export default Home;
