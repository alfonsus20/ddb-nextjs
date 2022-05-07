import { Container, Flex, Icon, IconButton } from "@chakra-ui/react";
import React from "react";
import Slider from "react-slick";
import { StakeHolderCard } from "../../Card";
import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import { useRef } from "react";

const settings = {
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 2,
  nextArrow: <></>,
  prevArrow: <></>,
};

const StakeHolder = () => {
  const slider = useRef<Slider | null>(null);

  return (
    <Container maxW="container.xl" overflowX="hidden">
      <Flex justifyContent="flex-end" columnGap={4} py={2}>
        <IconButton
          aria-label="Prev"
          colorScheme="white"
          shadow="md"
          onClick={() => slider.current?.slickPrev()}
          icon={<Icon as={MdOutlineArrowBackIosNew} w={6} h={6} color="red" />}
        />
        <IconButton
          aria-label="Next"
          colorScheme="red"
          shadow="md"
          onClick={() => slider.current?.slickNext()}
          icon={<Icon as={MdOutlineArrowForwardIos} w={6} h={6} />}
        />
      </Flex>
      <Slider
        ref={(c) => {
          slider.current = c;
        }}
        {...settings}
      >
        <StakeHolderCard
          imageURL="/pengurus/fuady.jpg"
          name="Fuady Muhammad"
          role="ketua"
          enterYear={2017}
          faculty="Fakultas Ekonomi dan Bisnis"
          period="2020-2021"
        />
        <StakeHolderCard
          imageURL="/pengurus/fuady.jpg"
          name="Rato Ahmad"
          role="wakil"
          enterYear={2018}
          faculty="D3 Ilmu Perminyakan"
          period="2020-2021"
        />
        <StakeHolderCard
          imageURL="/pengurus/fuady.jpg"
          name="Fuady Muhammad"
          role="ketua"
          enterYear={2017}
          faculty="Fakultas Ekonomi dan Bisnis"
          period="2020-2021"
        />
        <StakeHolderCard
          imageURL="/pengurus/fuady.jpg"
          name="Rato Ahmad"
          role="wakil"
          enterYear={2018}
          faculty="D3 Ilmu Perminyakan"
          period="2020-2021"
        />
        <StakeHolderCard
          imageURL="/pengurus/fuady.jpg"
          name="Fuady Muhammad"
          role="ketua"
          enterYear={2017}
          faculty="Fakultas Ekonomi dan Bisnis"
          period="2020-2021"
        />
        <StakeHolderCard
          imageURL="/pengurus/fuady.jpg"
          name="Rato Ahmad"
          role="wakil"
          enterYear={2018}
          faculty="D3 Ilmu Perminyakan"
          period="2020-2021"
        />
      </Slider>
    </Container>
  );
};

export default StakeHolder;
