import { AspectRatio, Box, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  name: string;
  entryYear: number;
  majority: string;
  image: string;
  id: number;
  isGraduated?: boolean;
};

const Student = ({
  name,
  entryYear,
  majority,
  isGraduated = false,
  image,
  id,
}: Props) => {
  return (
    <Link href={`/${isGraduated ? "alumni" : "mahasiswa"}/${id}`} passHref>
      <Box as="a">
        <AspectRatio pos="relative" width="full" ratio={1}>
          <Image
            src={image}
            alt={name}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </AspectRatio>
        <Box textAlign="center" p={4} shadow="md">
          <Text color="red.500" fontWeight="semibold" fontSize="lg">
            {name}
          </Text>
          <Text>
            {majority}, {entryYear}
          </Text>
        </Box>
      </Box>
    </Link>
  );
};

export default Student;
