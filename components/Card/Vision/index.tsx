import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

type VisionProps = {
  icon: React.ReactNode;
  title: string;
  content: string;
};

const Vision = ({ icon, title, content }: VisionProps) => {
  return (
    <Box py={1}>
      <Box shadow="md" p={4}>
        <Flex gap={2} alignItems="center" mb={2} color="red.500">
          <Box flex="0 0 auto">{icon}</Box>
          <Text fontWeight="semibold">{title}</Text>
        </Flex>
        <Text fontSize="sm">{content}</Text>
      </Box>
    </Box>
  );
};

export default Vision;
