import React from "react";
import {
  Box,
  SimpleGrid,
  Heading,
  Text,
  Center,
  Image,
} from "@chakra-ui/react";
import { ProgramList as program } from "./ProgramList";

export const Program = () => {
  return (
    <Box py={12} px={8} align="center">
      <Text fontSize="xl" fontWeight="500" color="green.500" mb={4}>
        PROGRAM
      </Text>

      <Heading mb={4} size="lg">
        Lorem ipsum dolor.
      </Heading>

      <Text mx={48} mb={8} color="gray.500">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
        consequatur dolorum eaque quia sed veritatis? Aut, eaque ut. Nam nihil
        quod voluptate. Accusamus asperiores est id molestias perferendis
        sapiente, ut.
      </Text>

      <SimpleGrid columns={[1, 2]}>
        {program.map(({ name, img }) => {
          return (
            <Center>
              <Image alt={`${name}'s icon`} src={img} title={name} h="10rem" />
            </Center>
          );
        })}
      </SimpleGrid>
    </Box>
  );
};