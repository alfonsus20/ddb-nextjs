import {
  Box,
  Button,
  Container,
  Flex,
  Icon,
  IconButton,
} from "@chakra-ui/react";
import React, { useMemo, useState } from "react";
import Slider from "react-slick";
import { StakeHolderCard } from "../../Card";
import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from "react-icons/md";

const StakeHolder = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [slider, setSlider] = useState<Slider>();

  const settings = useMemo(
    () => ({
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 2,
      nextArrow: <></>,
      prevArrow: <></>,
      beforeChange: (_: number, next: number) => setActiveSlide(next),
    }),
    []
  );

  return (
    <Container maxW="container.xl" overflowX="hidden">
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
          imageURL="/pengurus/rato.jpg"
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
          imageURL="/pengurus/rato.jpg"
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
          imageURL="/pengurus/rato.jpg"
          name="Rato Ahmad"
          role="wakil"
          enterYear={2018}
          faculty="D3 Ilmu Perminyakan"
          period="2020-2021"
        />
      </Slider>
      <Flex justifyContent="flex-end" columnGap={4} py={2}>
        <IconButton
          aria-label="Prev"
          colorScheme='red'
          onClick={() => slider?.slickPrev()}
          icon={<Icon as={MdOutlineArrowBackIosNew} w={6} h={6} />}
        />
        <IconButton
          aria-label="Next"
          colorScheme='red'
          onClick={() => slider?.slickNext()}
          icon={<Icon as={MdOutlineArrowForwardIos} w={6} h={6} />}
        />
      </Flex>
    </Container>
  );
};

export default StakeHolder;
