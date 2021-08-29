import React, { useEffect, useState } from "react";
import { Box, Flex, HStack, Img } from "@chakra-ui/react";
import { HeroCarouselList as carousel } from "./HeroCarouselList";

export const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0),
    slidesCount = carousel.length,
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
    <Flex pos="relative" overflow="hidden" borderRadius={16} shadow="xl">
      <Flex h="100%" w="full" {...carouselStyle}>
        {carousel.map(({ img }, sid) => (
          <Box key={`slide-${sid}`} boxSize="full" flex="none">
            <Img src={img} boxSize="full" objectFit="cover" />
          </Box>
        ))}
      </Flex>

      <HStack justify="center" pos="absolute" bottom={4} w="full">
        {Array.from({ length: slidesCount }).map((_, slide) => (
          <Box
            key={`dots-${slide}`}
            cursor="pointer"
            boxSize={4}
            m="0 .25rem"
            bg={currentSlide === slide ? "green.500" : "blackAlpha.500"}
            rounded="50%"
            d="inline-block"
            transition="background-color 0.6s ease"
            _hover={{ bg: "green.500" }}
            onClick={() => setSlide(slide)}
          />
        ))}
      </HStack>
    </Flex>
  );
};