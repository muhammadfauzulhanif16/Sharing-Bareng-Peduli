import React from "react";
import { Text, Flex, Icon, HStack } from "@chakra-ui/react";
import { FaFacebookF, FaInstagram } from "react-icons/all";

export const Footer = () => {
  return (
    <Flex w="full" p={8} justify="space-between" color="gray.800">
      <Text fontWeight="500">
        © 2021 Sharing Bareng Peduli, All Right Reserved.
      </Text>
      <HStack fontWeight="500">
        <Icon boxSize={6} as={FaFacebookF} />
        <Icon boxSize={6} as={FaInstagram} />
      </HStack>
    </Flex>
  );
};