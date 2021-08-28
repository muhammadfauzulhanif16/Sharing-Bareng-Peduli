import React from "react";
import {
  Box,
  Flex,
  useColorModeValue,
  Img,
  Heading,
  HStack,
  Button,
  useDisclosure,
  VStack,
  IconButton,
  CloseButton,
  Tabs,
  Tab,
  TabList,
} from "@chakra-ui/react";
import { AiOutlineMenu } from "react-icons/ai";
import SBPLogo from "../../images/logo/ShaBarLogo.png";
import { Link } from "react-router-dom";
import { NavList as nav } from "./NavList";
import { BiDonateHeart } from "react-icons/all";

export const Header = () => {
  const mobileNav = useDisclosure();

  return (
    <Box
      pos="sticky"
      top="0"
      zIndex={1}
      bgColor="gray.50"
      borderBottomRadius={16}
      shadow="sm"
    >
      <Box mx={8} py={4}>
        <Flex align="center" justify="space-between">
          <Link to="/">
            <HStack>
              <Img src={`${SBPLogo}`} boxSize={12} />
              <Heading size="md">ShaBar Peduli</Heading>
            </HStack>
          </Link>

          <HStack spacing={1} d={{ base: "none", lg: "inline-flex" }}>
            <Tabs variant="unstyled">
              <TabList>
                {nav.map(({ name, to }) => {
                  return (
                    <Link to={to}>
                      <Tab
                        borderRadius="6px"
                        mx=".5rem"
                        fontWeight="500"
                        _hover={{
                          backgroundColor: "gray.100",
                          borderRadius: "6px",
                          color: "green.500",
                        }}
                        _selected={{ color: "green.500" }}
                        _focus={{ shadow: "none" }}
                      >
                        {name}
                      </Tab>
                    </Link>
                  );
                })}
              </TabList>
            </Tabs>
          </HStack>

          <Button
            display={{ base: "none", lg: "inline-flex" }}
            colorScheme="green"
            shadow="xl"
            color="gray.50"
            _focus={{ shadow: "none" }}
            rightIcon={<BiDonateHeart />}
          >
            Donate
          </Button>

          <Box display={{ base: "inline-flex", lg: "none" }}>
            <IconButton
              display={{ base: "flex", lg: "none" }}
              aria-label="Open menu"
              fontSize="20px"
              color={useColorModeValue("gray.800", "inherit")}
              variant="ghost"
              icon={<AiOutlineMenu />}
              onClick={mobileNav.onOpen}
            />

            <VStack
              borderWidth="1px"
              borderColor="gray.100"
              bgColor="gray.50"
              pos="absolute"
              top={0}
              left={0}
              right={0}
              display={mobileNav.isOpen ? "flex" : "none"}
              p={4}
              m={2}
              rounded={16}
              shadow="xl"
            >
              <CloseButton
                aria-label="Close menu"
                onClick={mobileNav.onClose}
              />

              {nav.map(({ name, to }) => {
                return (
                  <Button w="full" variant="ghost">
                    <Link to={to}>{name}</Link>
                  </Button>
                );
              })}
              <Button
                colorScheme="green"
                w="full"
                _focus={{ shadow: "none" }}
                rightIcon={<BiDonateHeart />}
              >
                Donate
              </Button>
            </VStack>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};