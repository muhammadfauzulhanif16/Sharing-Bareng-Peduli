import React from "react";
import { Flex, Text, Heading, Button } from "@chakra-ui/react";
import { HeroCarousel } from "./HeroCarousel";
import { BiDonateHeart } from "react-icons/all";

export const Hero = () => {
  return (
    <Flex
      direction={["column-reverse", "column-reverse", "column-reverse", "row"]}
    >
      <Flex direction="column" justify="center" px={8} mt={[8, 8, 8, 0]}>
        <Heading
          mb={4}
          size="2xl"
          align={["center", "center", "center", "left"]}
        >
          Lorem ipsum dolor sit amet.
        </Heading>

        <Text fontSize="md" color="gray.500" align="justify">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus
          nobis numquam optio? Accusamus ad, aliquam aliquid beatae cum deserunt
          enim facilis impedit obcaecati quam ratione velit veritatis
          voluptatem. Deleniti, odio.
        </Text>

        <Flex justify={["center", "center", "center", "start"]} w="full" mt={4}>
          <Button
            size="lg"
            bgColor="green.500"
            mt={4}
            color="gray.50"
            shadow="xl"
            rightIcon={<BiDonateHeart />}
            _focus={{ shadow: "none" }}
            _hover={{ bgColor: "green.400" }}
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
      </Flex>

      <HeroCarousel />
    </Flex>
  );
};