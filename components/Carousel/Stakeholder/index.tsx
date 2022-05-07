import { Container, Flex, Icon, IconButton } from "@chakra-ui/react";
import React, { useState } from "react";
import Slider, { Settings } from "react-slick";
import { StakeHolderCard } from "../../Card";
import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from "react-icons/md";

const StakeHolder = () => {
  const [slider, setSlider] = useState<Slider>();

  const settings: Settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 2,
    nextArrow: <></>,
    prevArrow: <></>,
  };

  return (
    <Container maxW="container.xl" overflowX="hidden">
      <Flex justifyContent="flex-end" columnGap={4} py={2}>
        <IconButton
          aria-label="Prev"
          colorScheme="white"
          shadow="md"
          onClick={() => slider?.slickPrev()}
          icon={<Icon as={MdOutlineArrowBackIosNew} w={6} h={6} color="red" />}
        />
        <IconButton
          aria-label="Next"
          colorScheme="red"
          shadow="md"
          onClick={() => slider?.slickNext()}
          icon={<Icon as={MdOutlineArrowForwardIos} w={6} h={6} />}
        />
      </Flex>
      <Slider
        ref={(c) => {
          setSlider(c!);
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
