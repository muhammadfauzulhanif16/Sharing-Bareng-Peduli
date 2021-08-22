import React from "react";
import {
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  Image,
  LinkBox,
  LinkOverlay,
  Text,
  useColorModeValue,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import ShaBarLogo from "../../images/logo/ShaBarLogo.png";
import { NavList } from "./NavList";
import { ColorModeSwitcher } from "../../ColorModeSwitcher";
import { BiDonateHeart } from "react-icons/all";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";

export const NavBar = () => {
  const bg = useColorModeValue("white", "gray.800"),
    mobileNav = useDisclosure();

  return (
    <Box
      bg={bg}
      as="header"
      py="1rem"
      px={["1rem", "2rem", "3rem"]}
      pos="sticky"
      borderBottomRadius="1rem"
      top="0"
      zIndex="2"
    >
      <Flex justify="space-between">
        <LinkBox>
          <LinkOverlay href="#">
            <Flex align="center">
              <Image src={ShaBarLogo} alt="ShaBar" boxSize="3rem" />
              <Text fontSize="2xl" fontWeight="medium">
                ShaBar
              </Text>
            </Flex>
          </LinkOverlay>
        </LinkBox>

        <Flex align="center">
          <HStack display={{ base: "none", lg: "inline-flex" }}>
            {NavList.map(({ id, name }) => {
              return (
                <LinkBox>
                  <LinkOverlay href={id}>
                    <Button w="full" variant="ghost">
                      {name}
                    </Button>
                  </LinkOverlay>
                </LinkBox>
              );
            })}
            <Button
              w="full"
              variant="solid"
              colorScheme="green"
              rightIcon={<BiDonateHeart />}
            >
              Donate
            </Button>
          </HStack>

          <ColorModeSwitcher />

          <Box display={{ base: "inline-flex", lg: "none" }}>
            <IconButton
              ml=".5rem"
              display={{ base: "flex", lg: "none" }}
              aria-label="Open menu"
              color={useColorModeValue("gray.800", "inherit")}
              variant="ghost"
              icon={<HamburgerIcon />}
              onClick={mobileNav.onOpen}
            />

            <VStack
              bg={bg}
              pos="absolute"
              top={0}
              left={0}
              right={0}
              display={mobileNav.isOpen ? "flex" : "none"}
              direction="column"
              py="1rem"
              px={["1rem", "2rem", "3rem"]}
              shadow="sm"
              spacing={3}
              rounded="1rem"
              zIndex={2}
            >
              <Box w="full">
                <Flex justify="space-between" align="center">
                  <LinkBox>
                    <LinkOverlay href="#">
                      <Flex align="center">
                        <Image src={ShaBarLogo} alt="ShaBar" boxSize="3rem" />
                        <Text fontSize="2xl" fontWeight="medium">
                          ShaBar
                        </Text>
                      </Flex>
                    </LinkOverlay>
                  </LinkBox>

                  <Flex align="center">
                    <ColorModeSwitcher />

                    <IconButton
                      ml=".5rem"
                      display={{ base: "flex", lg: "none" }}
                      aria-label="Close menu"
                      color={useColorModeValue("gray.800", "inherit")}
                      variant="ghost"
                      icon={<CloseIcon />}
                      onClick={mobileNav.onClose}
                    />
                  </Flex>
                </Flex>
              </Box>

              {NavList.map(({ id, name }) => {
                return (
                  <Box w="full">
                    <LinkBox>
                      <LinkOverlay href={id}>
                        <Button w="full" variant="ghost">
                          {name}
                        </Button>
                      </LinkOverlay>
                    </LinkBox>
                  </Box>
                );
              })}
              <Button
                w="full"
                variant="solid"
                colorScheme="green"
                rightIcon={<BiDonateHeart />}
              >
                Donate
              </Button>
            </VStack>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};