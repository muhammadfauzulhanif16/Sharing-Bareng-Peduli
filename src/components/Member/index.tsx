import React, { useEffect, useState } from "react";
import {
  Box,
  Heading,
  Text,
  Flex,
  HStack,
  Avatar,
  VStack,
} from "@chakra-ui/react";
import { MemberList as member } from "./MemberList";

export const Member = () => {
  const [currentSlide, setCurrentSlide] = useState(0),
    slidesCount = member.length,
    setSlide = (slide: React.SetStateAction<number>) => {
      setCurrentSlide(slide);
    },
    prevSlide = () => {
      setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1));
    },
    nextSlide = () => {
      setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
    },
    carouselStyle = {
      transition: "all .5s",
      ml: `-${currentSlide * 100}%`,
    },
    SLIDES_INTERVAL_TIME = 3000,
    ANIMATION_DIRECTION = "right";

  useEffect(() => {
    const automatedSlide = setInterval(() => {
      ANIMATION_DIRECTION.toLowerCase() === "left" ? prevSlide() : nextSlide();
    }, SLIDES_INTERVAL_TIME);
    return () => clearInterval(automatedSlide);
  });

  return (
    <Box py={12} px={8} align="center">
      <Text fontSize="xl" fontWeight="500" color="green.500" mb={4}>
        ANGGOTA
      </Text>

      <Heading size="lg" mb={4}>
        Lorem ipsum dolor.
      </Heading>

      <Text mx={48} mb={8} color="gray.500">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
        consequatur dolorum eaque quia sed veritatis? Aut, eaque ut. Nam nihil
        quod voluptate. Accusamus asperiores est id molestias perferendis
        sapiente, ut.
      </Text>

      <Flex w="full" pos="relative" overflow="hidden">
        <Flex h="23rem" w="full" {...carouselStyle}>
          {member.map(({ name, img, role }, sid) => (
            <Box key={`slide-${sid}`} boxSize="full" flex="none">
              <Box
                mb={8}
                bgColor="gray.100"
                p={8}
                w="25rem"
                borderRadius={16}
                shadow="xl"
              >
                <Avatar
                  shadow="xl"
                  src={img}
                  w="10rem"
                  h="10rem"
                  name={name}
                  title={name}
                  alt={`${name}'s photo`}
                  mb={8}
                />
                <VStack lineHeight={1}>
                  <Text fontWeight="500">{name}</Text>
                  <Text color="green.500" fontWeight="500">
                    {role}
                  </Text>
                </VStack>
              </Box>
            </Box>
          ))}
        </Flex>

        <HStack justify="center" pos="absolute" bottom="8px" w="full">
          {Array.from({ length: slidesCount }).map((_, slide) => (
            <Box
              key={`dots-${slide}`}
              cursor="pointer"
              boxSize="1rem"
              m="0 .25rem"
              bg={currentSlide === slide ? "green.500" : "blackAlpha.500"}
              rounded="50%"
              display="inline-block"
              transition="background-color 0.6s ease"
              _hover={{ bg: "green.500" }}
              onClick={() => setSlide(slide)}
            />
          ))}
        </HStack>
      </Flex>
    </Box>
  );
};