import {
  Flex,
  Icon,
  IconButton,
  AspectRatio,
  Box,
  Text,
} from "@chakra-ui/react";
import React from "react";
import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import Image from "next/image";
import Carousel, { ButtonGroupProps } from "react-multi-carousel";

const ButtonGroup = ({ next, previous }: ButtonGroupProps) => {
  return (
    <Flex justifyContent="center" columnGap={6} pt={4} pb={2} alignItems="center">
      <IconButton
        aria-label="Prev"
        colorScheme="white"
        shadow="lg"
        onClick={previous}
        icon={<Icon as={MdOutlineArrowBackIosNew} w={6} h={6} color="red" />}
      />
      <IconButton
        aria-label="Next"
        colorScheme="white"
        shadow="lg"
        onClick={next}
        icon={<Icon as={MdOutlineArrowForwardIos} w={6} h={6} color="red" />}
      />
    </Flex>
  );
};

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const Gallery = () => {
  return (
    <Box overflowX="hidden">
      <Carousel
        responsive={responsive}
        arrows={false}
        renderButtonGroupOutside={true}
        customButtonGroup={<ButtonGroup />}
        infinite={true}
      >
        {["Halal Bi Halal", "DDB Sehat", "Badminton", "TEST", "mantap"].map(
          (item, idx) => (
            <Box key={idx} px={2}>
              <AspectRatio width="full" ratio={21 / 9} mb={2}>
                <Flex gap={3}>
                  <Box width="65%" pos="relative" height="full">
                    <Image
                      src="/hbh2022/hbh-1.jpg"
                      alt="hbh"
                      layout="fill"
                      objectFit="cover"
                      objectPosition="center"
                    />
                  </Box>
                  <Box width="35%" height="full" pos="relative">
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
              <AspectRatio width="full" ratio={21 / 9} mb={4}>
                <Flex gap={3}>
                  <Box width="35%" pos="relative" height="full">
                    <Image
                      src="/hbh2022/hbh-2.jpg"
                      alt="hbh"
                      layout="fill"
                      objectFit="cover"
                      objectPosition="center"
                    />
                  </Box>
                  <Box width="65%" pos="relative" height="full">
                    <Image
                      src="/hbh2022/hbh-1.jpg"
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
          )
        )}
      </Carousel>
    </Box>
  );
};

export default Gallery;
