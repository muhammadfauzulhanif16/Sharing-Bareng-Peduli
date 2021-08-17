import React, { useState, useEffect } from "react";
import { Text, Box, Flex, Image, HStack, Stack } from "@chakra-ui/react";
import { SlideList } from "./SlideList";

export const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0),
    slidesCount = SlideList.length,
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
  }, []);

  return (
    <Flex w="full" pos="relative" overflow="hidden" borderRadius="xl">
      <Flex h="30rem" w="full" {...carouselStyle}>
        {SlideList.map((slide, sid) => (
          <Box key={`slide-${sid}`} boxSize="full" shadow="md" flex="none">
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
            boxSize={["7px", 0, "15px"]}
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
  );
};