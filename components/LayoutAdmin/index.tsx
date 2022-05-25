import {
  Box,
  Button,
  Container,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Heading,
  Icon,
  IconButton,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import { FaChevronRight, FaDochub, FaUser } from "react-icons/fa";

type Props = {
  children: React.ReactNode;
  title: string;
};

const LayoutAdmin = ({ children, title }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Container maxW="container.2xl" pt={4} pb={12} pos="relative">
      <Head>
        <title>{title}</title>
      </Head>
      <Drawer placement="left" isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Admin Dashboard</DrawerHeader>
          <DrawerBody>
            <VStack spacing={4}>
              <Link href="/admin" passHref>
                <Button
                  w="full"
                  colorScheme="red"
                  variant="outline"
                  leftIcon={<Icon as={FaUser} />}
                  onClick={onClose}
                >
                  Halaman User
                </Button>
              </Link>
              <Link href="/admin/berita" passHref>
                <Button
                  w="full"
                  colorScheme="red"
                  variant="outline"
                  leftIcon={<Icon as={FaDochub} />}
                  onClick={onClose}
                >
                  Halaman Berita
                </Button>
              </Link>
            </VStack>
          </DrawerBody>
          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Tutup
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
      <Heading fontSize="3xl" pt={4} textAlign="center">
        {title}
      </Heading>
      <Flex justifyContent="flex-end"></Flex>{" "}
      <IconButton
        icon={<Icon as={FaChevronRight} />}
        pos="absolute"
        onClick={onOpen}
        top={0}
        my={6}
        colorScheme="red"
        aria-label="open drawer"
      />
      <Box flex="1 1 auto">{children}</Box>
    </Container>
  );
};

export default LayoutAdmin;
