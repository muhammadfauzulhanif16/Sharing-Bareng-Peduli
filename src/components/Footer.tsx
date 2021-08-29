import React from "react";
import { Text, Flex, Icon, HStack } from "@chakra-ui/react";
import { FaFacebookF, FaInstagram } from "react-icons/all";

export const Footer = () => {
  return (
    <Flex
      direction={["column", "column", "row"]}
      w="full"
      p={8}
      align="center"
      justify="space-between"
      color="gray.800"
    >
      <Text fontWeight="500" align="center" mb={[4, 4, 4, 0]}>
        © 2021 Sharing Bareng Peduli, All Right Reserved.
      </Text>

      <HStack fontWeight="500">
        <Icon boxSize={6} as={FaFacebookF} />
        <Icon boxSize={6} as={FaInstagram} />
      </HStack>
    </Flex>
  );
};