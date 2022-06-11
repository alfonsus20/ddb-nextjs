import { Spinner } from "@chakra-ui/react";
import { ChakraBox } from "../Animation";

const LoadingLayer = () => {
  return (
    <ChakraBox
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      bg="white"
      width="100vw"
      pos="fixed"
      zIndex="overlay"
      exit={{
        opacity: 0,
        transition: {
          ease: "easeInOut",
          duration: 2,
        },
      }}
    >
      <Spinner color="red.500" size="lg" thickness="4px" />
    </ChakraBox>
  );
};

export default LoadingLayer;
