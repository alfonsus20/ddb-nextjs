import { Box, Text, VStack } from "@chakra-ui/react";
import dayjs from "dayjs";
import "dayjs/locale/id";
import Image from "next/image";
import Link from "next/link";
import { convertHtmlToPlainText, getBlurDataURL } from "../../../utils/helper";

dayjs.locale('id');

type NewsProps = {
  id: number;
  title: string;
  content: string;
  image: string;
  blurHash: string;
  date: string;
};

const News = ({ title, content, image, id, blurHash, date }: NewsProps) => {
  return (
    <Link href={`/berita/${id}`} passHref>
      <Box as="a" w="full">
        <Box pos="relative" width="full" height={60} mb={3}>
          <Image
            src={image}
            alt="berita"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            placeholder="blur"
            blurDataURL={getBlurDataURL(blurHash)}
          />
        </Box>
        <VStack spacing={2} align="flex-start">
          <Text fontSize="sm" data-testid ='post-date'>{dayjs(date).format("dddd, DD MMM YYYY")}</Text>
          <Text fontSize="lg" fontWeight="semibold" noOfLines={2}>
            {title}
          </Text>
          <Box fontSize="md" noOfLines={3}>
            {convertHtmlToPlainText(content)}
          </Box>
        </VStack>
      </Box>
    </Link>
  );
};

export default News;
