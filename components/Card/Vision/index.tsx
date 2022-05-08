import { Box, Flex, GridItem, Text } from "@chakra-ui/react";
import React from "react";
import { HiAnnotation } from "react-icons/hi";

const Vision = () => {
  return (
    <GridItem shadow="md" p={4}>
      <Flex gap={2} alignItems="center" mb={2} color="red.500">
        <Box flex="0 0 auto">
          <HiAnnotation fontSize={40} />
        </Box>
        <Text fontWeight="semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit
        </Text>
      </Flex>
      <Text fontSize="sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum
        dolor sit amet consectetur adipisicing elit
      </Text>
    </GridItem>
  );
};

export default Vision;
