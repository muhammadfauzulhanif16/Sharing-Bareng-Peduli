import React from "react";

import {
  Box,
  Flex,
  useColorModeValue,
  HStack,
  Button,
  useDisclosure,
  VStack,
  IconButton,
  CloseButton,
  Image,
  Center,
} from "@chakra-ui/react";
import { AiOutlineMenu } from "react-icons/ai";
import { ColorModeSwitcher } from "../ColorModeSwitcher";
import ShaBar from "../assets/icon/LogoSmall.png";

export const NavBar = () => {
  const bg = useColorModeValue("white", "gray.800"),
    mobileNav = useDisclosure(),
    navs = [
      { name: "Home" },
      { name: "About" },
      { name: "Member" },
      { name: "Program" },
      { name: "Contact" },
    ];

  return (
    <Box
      bg={bg}
      as="header"
      p="4"
      shadow="xl"
      position="sticky"
      top="0"
      zIndex={1}
    >
      <Flex justifyContent="space-between">
        <Box
          as="a"
          href="https://www.shabarcommunity.com"
          title="ShaBar Community"
          display="flex"
        >
          <Image
            boxSize="3rem"
            objectFit="cover"
            src={ShaBar}
            alt="ShaBar Community"
          />
          <Center fontSize="xl" fontWeight="medium" ml="2">
            ShaBar Community
          </Center>
        </Box>

        <Flex align="center" spacing={1}>
          <HStack
            spacing={1}
            mr={1}
            color="brand.500"
            display={{ base: "none", md: "inline-flex" }}
          >
            {navs.map((nav) => {
              return (
                <Button w="full" variant="ghost">
                  {nav.name}
                </Button>
              );
            })}
          </HStack>

          <ColorModeSwitcher justifySelf="flex-end" />

          <Box display={{ base: "inline-flex", md: "none" }}>
            <IconButton
              display={{ base: "flex", md: "none" }}
              aria-label="Open menu"
              fontSize="20px"
              color={useColorModeValue("gray.800", "inherit")}
              variant="ghost"
              icon={<AiOutlineMenu />}
              onClick={mobileNav.onOpen}
              ml={4}
            />

            <VStack
              bg={bg}
              pos="absolute"
              top={0}
              left={0}
              right={0}
              display={mobileNav.isOpen ? "flex" : "none"}
              flexDirection="column"
              p={2}
              pb={4}
              m={2}
              spacing={3}
              rounded="sm"
              zIndex={999}
            >
              <CloseButton
                aria-label="Close menu"
                onClick={mobileNav.onClose}
              />
              {navs.map((nav) => {
                return (
                  <Button w="full" variant="ghost">
                    {nav.name}
                  </Button>
                );
              })}
            </VStack>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};