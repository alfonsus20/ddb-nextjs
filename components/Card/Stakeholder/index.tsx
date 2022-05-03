import { Box, Flex, Square, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

type StakeholderCardProps = {
  imageURL: string;
  role: "ketua" | "wakil";
  name: string;
  faculty: string;
  enterYear: number;
  period: string;
};

const StakeHolder = ({
  imageURL,
  role,
  name,
  faculty,
  enterYear,
  period,
}: StakeholderCardProps) => {
  return (
    <Box p={4}>
      <Flex alignItems="center" shadow="lg">
        <Square
          pos="relative"
          size={48}
          borderRightRadius="100%"
          bg="green.400"
          flexShrink={0}
          overflow="hidden"
        >
          <Image
            src={imageURL}
            alt="fuady"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </Square>
        <VStack spacing={1} align="flex-start" px={6}>
          <Box
            fontSize="xs"
            bg="red.300"
            color="red.600"
            textAlign="center"
            width="fit-content"
            px={3}
            borderRadius="3xl"
            mb={1}
          >
            {role}
          </Box>
          <Text fontSize="xl" color="red.500" fontWeight="semibold">
            {name}
          </Text>
          <Text>
            {faculty}, {enterYear}
          </Text>
          <Text fontSize="sm">{period}</Text>
        </VStack>
      </Flex>
    </Box>
  );
};

export default StakeHolder;
