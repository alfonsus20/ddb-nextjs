import { Box, Flex, Icon, IconButton } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import useMounted from "../../hooks/useMounted";

type Props = {
  totalData: number;
  rowsPerPage: number;
};

const Pagination = ({ totalData, rowsPerPage }: Props) => {
  const totalPages = Math.ceil(totalData / rowsPerPage);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const router = useRouter();
  const { mounted } = useMounted();

  const goPrev = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const goNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    const { page } = router.query;
    if (page) {
      setCurrentPage(Number(page));
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      router.push({
        query: { ...router.query, page: currentPage },
      });
    }
  }, [currentPage]);

  return (
    <Flex columnGap={4} alignItems="center" justifyContent="center">
      <IconButton
        icon={<Icon as={FaChevronLeft} fontSize={16} />}
        aria-label="prev"
        onClick={goPrev}
        colorScheme="red"
        size="sm"
        disabled={currentPage === 1}
      />
      <Box>
        {currentPage} dari {totalPages}{" "}
      </Box>
      <IconButton
        icon={<Icon as={FaChevronRight} fontSize={16} />}
        aria-label="next"
        onClick={goNext}
        colorScheme="red"
        size="sm"
        disabled={currentPage === totalPages}
      />
    </Flex>
  );
};

export default Pagination;
