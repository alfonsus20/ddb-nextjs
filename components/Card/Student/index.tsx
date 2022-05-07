import { AspectRatio, Box, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Student = () => {
  return (
    <Link href="/mahasiswa/1" passHref>
      <Box as='a' flex="1 1 250px" maxW={280}>
        <AspectRatio pos="relative" width="full" ratio={1}>
          <Image
            src="/pengurus/fuady.jpg"
            alt="fuady"
            layout="fill"
            objectFit="cover"
            objectPosition="top"
          />
        </AspectRatio>
        <Box textAlign="center" p={4} shadow="md">
          <Text color="red.500" fontWeight="semibold" fontSize="lg">
            Fuady Muhammad
          </Text>
          <Text>Ilmu Ekonomi, 2017</Text>
        </Box>
      </Box>
    </Link>
  );
};

export default Student;
