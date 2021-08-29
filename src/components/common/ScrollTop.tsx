import React from "react";
import { Center, Icon } from "@chakra-ui/react";
import { ArrowUpIcon } from "@chakra-ui/icons";

export const ScrollTop = () => {
  const scrollTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <Center
      m="2rem"
      pos="fixed"
      rounded="100%"
      w="3rem"
      h="3rem"
      bgColor="green.500"
      bottom={0}
      left={0}
      onClick={scrollTop}
      cursor="pointer"
      _hover={{ bgColor: "green.400" }}
    >
      <Icon as={ArrowUpIcon} w={6} h={6} />
    </Center>
  );
};