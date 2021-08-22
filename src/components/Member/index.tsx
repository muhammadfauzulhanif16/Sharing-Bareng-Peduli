import React, { useEffect, useState } from "react";
import { Avatar, Box, Flex, Heading, HStack, Text } from "@chakra-ui/react";
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
    <Box as="section" id="member" pt="5rem">
      <Heading mb="3rem" fontSize={"3xl"}>
        <Text align="center">Anggota</Text>
      </Heading>

      <Flex w="full" pos="relative" overflow="hidden">
        <Flex h={["32rem", "30rem", "25rem"]} w="full" {...carouselStyle}>
          {MemberList.map(({ img, quote, name, role }, sid) => (
            <Box key={`slide-${sid}`} boxSize="full" flex="none">
              {quote !== "" ? (
                <Flex
                  shadow="xl"
                  direction={{ base: "column-reverse", md: "row" }}
                  mx="auto"
                  w={["90%", "90%", "80%", "50%"]}
                  rounded="1rem"
                  zIndex={1}
                  p="3rem"
                  justify="space-between"
                  pos="relative"
                >
                  <Flex
                    direction="column"
                    textAlign="left"
                    justify="space-between"
                  >
                    <Heading fontSize={["xl", "2xl", "3xl"]} pb="2rem">
                      <Text align={{ base: "center", md: "start" }}>
                        "{quote}"
                      </Text>
                    </Heading>
                    <Text
                      fontWeight="bold"
                      align={{ base: "center", md: "start" }}
                    >
                      {name}
                      <Text fontWeight="medium" color="gray.500">
                        {role}
                      </Text>
                    </Text>
                  </Flex>
                  <Avatar
                    src={img}
                    height="10rem"
                    width="10rem"
                    alignSelf="center"
                    m={{ base: "0 0 35px 0", md: "0 0 0 50px" }}
                  />
                </Flex>
              ) : (
                <Flex
                  shadow="xl"
                  direction="column"
                  mx={"auto"}
                  rounded="1rem"
                  w={["90%", "20rem"]}
                  zIndex={1}
                  p="3rem"
                  border="1rem"
                  justify="center"
                  align="center"
                  pos="relative"
                >
                  <Avatar
                    src={img}
                    height="10rem"
                    width="10rem"
                    mb="2rem"
                    // alignSelf="center"
                    // m={{ base: "0 0 35px 0", md: "0 0 0 50px" }}
                  />
                  <Text fontWeight="bold" align="center">
                    {name}
                    <Text fontWeight="medium" color="gray.500">
                      {role}
                    </Text>
                  </Text>
                </Flex>
              )}
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