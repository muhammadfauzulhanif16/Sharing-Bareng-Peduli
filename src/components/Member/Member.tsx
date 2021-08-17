import React, { useState, useEffect } from "react";
import {
  Box,
  Flex,
  Image,
  HStack,
  Link,
  chakra,
  Stack,
  Container,
  Heading,
} from "@chakra-ui/react";
import { MemberList } from "./MemberList";

export const Member = () => {
  const [currentSlide, setCurrentSlide] = useState(0),
    slidesCount = MemberList.length,
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
      transition: "all .7s",
      ml: `-${currentSlide * 100}%`,
    },
    SLIDES_INTERVAL_TIME = 5000,
    ANIMATION_DIRECTION = "right";

  useEffect(() => {
    const automatedSlide = setInterval(() => {
      ANIMATION_DIRECTION.toLowerCase() === "left" ? prevSlide() : nextSlide();
    }, SLIDES_INTERVAL_TIME);
    return () => clearInterval(automatedSlide);
  });

  return (
    <Box p={4}>
      <Stack
        spacing={4}
        as={Container}
        maxW={"3xl"}
        textAlign={"center"}
        mb={5}
      >
        <Heading fontSize={"3xl"}>Anggota</Heading>
      </Stack>

      <Flex w="full" pos="relative" overflow="hidden" borderRadius="xl">
        <Flex w="full" h="25rem" {...carouselStyle}>
          {MemberList.map((member, sid) => (
            <Box key={`slide-${sid}`} boxSize="full" flex="none">
              <Box
                w={["100%", "75%", "50%"]}
                shadow="xl"
                overflow="hidden"
                mx="auto"
                borderRadius={"xl"}
              >
                <Image
                  w="full"
                  h={56}
                  fit="cover"
                  src={member.img}
                  alt={`${member.name}'s photo`}
                />
                <Box py={5} textAlign="center">
                  <Link display="block" fontSize="2xl" fontWeight="bold">
                    {member.name}
                  </Link>
                  <chakra.span fontSize="sm">{member.occupation}</chakra.span>
                </Box>
              </Box>
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
    </Box>
  );
};