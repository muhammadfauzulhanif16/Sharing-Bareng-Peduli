import React from "react";
import {
  chakra,
  Box,
  Stack,
  Flex,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";

export const CTA = () => {
  return (
    <Flex justify="center" bg={useColorModeValue("white", "gray.800")} w="full">
      <Box
        w={{ base: "full", md: "75%", lg: "50%" }}
        px={4}
        py={20}
        textAlign={{ base: "left", md: "center" }}
      >
        <chakra.span
          fontSize={{ base: "3xl", sm: "4xl" }}
          fontWeight="extrabold"
          letterSpacing="tight"
          lineHeight="shorter"
          color={useColorModeValue("gray.900", "gray.100")}
          mb={6}
        >
          <chakra.span display="block">Sudahkah Anda</chakra.span>
          <chakra.span
            display="block"
            color={useColorModeValue("brand.600", "gray.500")}
          >
            Bersedekah Hari Ini?
          </chakra.span>
        </chakra.span>
        <Stack
          justifyContent={{ base: "left", md: "center" }}
          direction={{ base: "column", sm: "row" }}
          spacing={2}
          mt={2}
        >
          <Box ml={3} display="inline-flex" rounded="md" shadow="md">
            <Link
              w="full"
              display="inline-flex"
              alignItems="center"
              justifyContent="center"
              px={5}
              py={3}
              border="solid transparent"
              fontWeight="bold"
              rounded="md"
              color="gray.800"
              bg="white"
              _hover={{
                bg: "brand.50",
              }}
            >
              Donate
            </Link>
          </Box>
        </Stack>
      </Box>
    </Flex>
  );
};