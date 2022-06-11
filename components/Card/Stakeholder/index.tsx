import { Box, Circle, Flex, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import AvatarImg from "../../../public/avatar.jpg";

type StakeholderCardProps = {
  imageURL?: string;
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
    <Box p={{ base: 0, md: 4 }}>
      <Flex alignItems="center">
        <Circle
          pos="relative"
          size={{ base: 32, md: 44 }}
          flexShrink={0}
          overflow="hidden"
        >
          <Image
            src={imageURL || AvatarImg}
            alt="fuady"
            layout="fill"
            objectFit="cover"
            objectPosition="top"
            quality={100}
          />
        </Circle>
        <VStack spacing={1} align="flex-start" px={{ base: 2, md: 6 }}>
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
          <Text fontSize="sm">Periode {period}</Text>
        </VStack>
      </Flex>
    </Box>
  );
};

export default StakeHolder;
