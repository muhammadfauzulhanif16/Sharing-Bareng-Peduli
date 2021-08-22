import React, { useEffect, useState } from "react";
import {
  Box,
  Flex,
  HStack,
  Image,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { HeroList } from "./HeroList";

export const Hero = () => {
  const bg = useColorModeValue("gray.50", "gray.900"),
    [currentSlide, setCurrentSlide] = useState(0),
    slidesCount = HeroList.length,
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
    <Box as="section" px={["1rem", "2rem", "3rem"]} id="" bg={bg}>
      <Flex w="full" pos="relative" overflow="hidden" rounded="1rem">
        <Flex h="80vh" w="full" {...carouselStyle}>
          {HeroList.map((slide, sid) => (
            <Box key={`slide-${sid}`} boxSize="full" flex="none">
              <Image
                src={slide.img}
                boxSize="full"
                backgroundSize="cover"
                objectFit="cover"
                backgroundPos="center"
              />
              <Stack
                p="8px 12px"
                pos="absolute"
                bottom="24px"
                textAlign="center"
                w="full"
                mb="8"
                color="white"
              >
                <Text fontSize="2xl">{slide.label}</Text>
                <Text fontSize="lg">{slide.description}</Text>
              </Stack>
            </Box>
          ))}
        </Flex>

        <HStack justify="center" pos="absolute" bottom="8px" w="full">
          {Array.from({ length: slidesCount }).map((_, slide) => (
            <Box
              key={`dots-${slide}`}
              cursor="pointer"
              boxSize="1rem"
              m="0 2px"
              bg={currentSlide === slide ? "blackAlpha.800" : "blackAlpha.500"}
              rounded="50%"
              display="inline-block"
              transition="background-color 0.6s ease"
              _hover={{ bg: "blackAlpha.800" }}
              onClick={() => setSlide(slide)}
            />
          ))}
        </HStack>
      </Flex>
    </Box>
  );
};