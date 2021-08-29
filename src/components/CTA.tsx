import React from "react";
import { VStack, Heading, Button, Box } from "@chakra-ui/react";
import { BiDonateHeart } from "react-icons/all";

export const CTA = () => {
  return (
    <VStack py={12} px={8}>
      <Box align="center" mb={8}>
        <Heading size="lg">Sudahkah Anda</Heading>
        <Heading size="lg" color="green.500">
          Bersedekah hari ini?
        </Heading>
      </Box>

      <Button
        size="lg"
        color="green.500"
        shadow="2xl"
        rightIcon={<BiDonateHeart />}
        _focus={{ shadow: "none" }}
      >
        Donate
      </Button>
    </VStack>
  );
};