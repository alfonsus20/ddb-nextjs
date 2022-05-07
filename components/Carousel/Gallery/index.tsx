import {
  Flex,
  Icon,
  IconButton,
  AspectRatio,
  Box,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Slider, { Settings } from "react-slick";
import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import Image from "next/image";

const Gallery = () => {
  const [slider, setSlider] = useState<Slider>();
  const [activeSlide, setActiveSlide] = useState<number>(0);

  const settings: Settings = {
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <></>,
    prevArrow: <></>,
    afterChange: (current) => setActiveSlide(current),
  };

  return (
    <Box overflowX="hidden">
      <Slider
        ref={(c) => {
          setSlider(c!);
        }}
        {...settings}
      >
        {["Halal Bi Halal", "DDB Sehat"].map((item, idx) => (
          <Box key={idx}>
            <AspectRatio width="full" ratio={16 / 5} mb={4}>
              <Flex gap={3}>
                <Box width="50%" bg="green.400" pos="relative" height="full">
                  <Image
                    src="/hbh2022/hbh-1.jpg"
                    alt="hbh"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                  />
                </Box>
                <Box width="20%" bg="blue.400" pos="relative" height="full">
                  <Image
                    src="/hbh2022/hbh-2.jpg"
                    alt="hbh"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                  />
                </Box>
                <Box width="30%" bg="red.500" height="full" pos="relative">
                  <Image
                    src="/hbh2022/hbh-3.jpg"
                    alt="hbh"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                  />
                </Box>
              </Flex>
            </AspectRatio>
            <AspectRatio width="full" ratio={16 / 5} mb={4}>
              <Flex gap={3}>
                <Box width="20%" bg="blue.400" pos="relative" height="full">
                  <Image
                    src="/hbh2022/hbh-2.jpg"
                    alt="hbh"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                  />
                </Box>
                <Box width="50%" bg="green.400" pos="relative" height="full">
                  <Image
                    src="/hbh2022/hbh-1.jpg"
                    alt="hbh"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                  />
                </Box>
                <Box width="30%" bg="red.500" height="full" pos="relative">
                  <Image
                    src="/hbh2022/hbh-3.jpg"
                    alt="hbh"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                  />
                </Box>
              </Flex>
            </AspectRatio>
            <Box textAlign="center">
              <Text color="red.500" fontSize="xl" fontWeight="semibold">
                {item}
              </Text>
              <Text>2022</Text>
            </Box>
          </Box>
        ))}
      </Slider>
      <Flex
        justifyContent="center"
        columnGap={4}
        py={2}
        alignItems="center"
        mt={4}
      >
        <IconButton
          aria-label="Prev"
          colorScheme="white"
          shadow="lg"
          onClick={() => slider?.slickPrev()}
          icon={<Icon as={MdOutlineArrowBackIosNew} w={6} h={6} color="red" />}
        />
        <Box>{activeSlide + 1} / 2</Box>
        <IconButton
          aria-label="Next"
          colorScheme="white"
          shadow="lg"
          onClick={() => slider?.slickNext()}
          icon={<Icon as={MdOutlineArrowForwardIos} w={6} h={6} color="red" />}
        />
      </Flex>
    </Box>
  );
};

export default Gallery;
