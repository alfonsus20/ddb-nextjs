import { Container, Flex, Icon, IconButton } from "@chakra-ui/react";
import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos
} from "react-icons/md";
import Carousel, { ButtonGroupProps } from "react-multi-carousel";
import { StakeHolderCard } from "../../Card";

const ButtonGroup = ({ next, previous }: ButtonGroupProps) => {
  return (
    <Flex justifyContent="flex-end" columnGap={4} py={2}>
      <IconButton
        aria-label="Prev"
        colorScheme="white"
        shadow="md"
        onClick={previous}
        icon={<Icon as={MdOutlineArrowBackIosNew} w={6} h={6} color="red" />}
      />
      <IconButton
        aria-label="Next"
        colorScheme="red"
        shadow="md"
        onClick={next}
        icon={<Icon as={MdOutlineArrowForwardIos} w={6} h={6} />}
      />
    </Flex>
  );
};

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 768 },
    items: 2,
    slidesToSlide: 2,
  },
  tablet: {
    breakpoint: { max: 768, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const StakeHolder = () => {
  return (
    <Container maxW="container.xl">
      <Carousel
        arrows={false}
        responsive={responsive}
        infinite={true}
        autoPlay={false}
        renderButtonGroupOutside={true}
        customButtonGroup={<ButtonGroup />}
      >
        <StakeHolderCard
          imageURL=""
          name="Fuady Muhammad"
          role="ketua"
          enterYear={2017}
          faculty="Fakultas Ekonomi dan Bisnis"
          period="2020-2021"
        />
        <StakeHolderCard
          imageURL=""
          name="Rato Ahmad"
          role="wakil"
          enterYear={2018}
          faculty="D3 Ilmu Perminyakan"
          period="2020-2021"
        />
        <StakeHolderCard
          imageURL=""
          name="Fuady Muhammad"
          role="ketua"
          enterYear={2017}
          faculty="Fakultas Ekonomi dan Bisnis"
          period="2020-2021"
        />
        <StakeHolderCard
          imageURL=""
          name="Rato Ahmad"
          role="wakil"
          enterYear={2018}
          faculty="D3 Ilmu Perminyakan"
          period="2020-2021"
        />
        <StakeHolderCard
          imageURL=""
          name="Fuady Muhammad"
          role="ketua"
          enterYear={2017}
          faculty="Fakultas Ekonomi dan Bisnis"
          period="2020-2021"
        />
        <StakeHolderCard
          imageURL=""
          name="Rato Ahmad"
          role="wakil"
          enterYear={2018}
          faculty="D3 Ilmu Perminyakan"
          period="2020-2021"
        />
      </Carousel>
    </Container>
  );
};

export default StakeHolder;
