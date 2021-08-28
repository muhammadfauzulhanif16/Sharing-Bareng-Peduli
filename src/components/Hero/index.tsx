import React from "react";
import { Flex, Text, Heading, Button, HStack, VStack } from "@chakra-ui/react";
import { HeroCarousel } from "./HeroCarousel";
import { BiDonateHeart } from "react-icons/all";

export const Hero = () => {
  return (
    <HStack>
      <VStack w="full">
        <VStack p={8}>
          <Heading mb={4} size="2xl">
            Lorem ipsum dolor sit amet.
          </Heading>

          <Text fontSize="xl" color="gray.500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus
            nobis numquam optio? Accusamus ad, aliquam aliquid beatae cum
            deserunt enim facilis impedit obcaecati quam ratione velit veritatis
            voluptatem. Deleniti, odio.
          </Text>

          <Flex justify="start" w="full" mt={4}>
            <Button
              size="lg"
              colorScheme="green"
              mt={4}
              color="gray.50"
              shadow="xl"
              rightIcon={<BiDonateHeart />}
              _focus={{ shadow: "none" }}
            >
              Donate
            </Button>

            <Button
              size="lg"
              mt={4}
              ml="1.5rem"
              colorScheme="green"
              variant="outline"
              _focus={{ shadow: "none" }}
            >
              Learn More
            </Button>
          </Flex>
        </VStack>
      </VStack>
      <HeroCarousel />
    </HStack>
  );
};