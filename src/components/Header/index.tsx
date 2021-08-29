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
import SBPLogo from "../../images/logo/ShaBarLogo.png";
import { Link } from "react-router-dom";
import { NavList as nav } from "./NavList";
import { BiDonateHeart, AiOutlineMenu } from "react-icons/all";
import { ColorModeSwitcher } from "../../ColorModeSwitcher";

export const Header = () => {
  const mobileNav = useDisclosure(),
    t1 = useColorModeValue("gray.50", "gray.800"),
    t2 = useColorModeValue("gray.100", "gray.700");

  return (
    <Box
      as="nav"
      pos="sticky"
      top="0"
      zIndex={1}
      bgColor={t1}
      borderBottomRadius={16}
      shadow="md"
      id="home"
    >
      <Box mx={[2, 4, 8]} py={4}>
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
                          backgroundColor: t2,
                          borderRadius: "6px",
                          color: "green.400",
                        }}
                        _selected={{ color: "green.400" }}
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

          <HStack d={{ base: "none", lg: "inline-flex" }}>
            <Button
              bgColor="green.500"
              shadow="xl"
              color="gray.50"
              _focus={{ border: "none" }}
              rightIcon={<BiDonateHeart />}
            >
              Donate
            </Button>

            <ColorModeSwitcher _focus={{ border: "none" }} />
          </HStack>

          <Box display={{ base: "inline-flex", lg: "none" }}>
            <ColorModeSwitcher mr={4} _focus={{ border: "none" }} />

            <IconButton
              display={{ base: "flex", lg: "none" }}
              aria-label="Open menu"
              fontSize="20px"
              color={useColorModeValue("gray.800", "gray.50")}
              variant="ghost"
              icon={<AiOutlineMenu />}
              onClick={mobileNav.onOpen}
              _focus={{ border: "none" }}
            />

            <VStack
              borderWidth="1px"
              borderColor={t2}
              bgColor={t1}
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
              <HStack justify="space-between" w="full">
                <Link to="/">
                  <HStack>
                    <Img src={`${SBPLogo}`} boxSize={12} />
                    <Heading size="md">ShaBar Peduli</Heading>
                  </HStack>
                </Link>

                <HStack>
                  <ColorModeSwitcher _focus={{ border: "none" }} />

                  <CloseButton
                    aria-label="Close menu"
                    onClick={mobileNav.onClose}
                  />
                </HStack>
              </HStack>

              <Button
                bgColor="green.500"
                color="gray.50"
                w="full"
                _focus={{ border: "none" }}
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