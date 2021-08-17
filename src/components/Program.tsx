import {
  Box,
  Container,
  Heading,
  Stack,
  SimpleGrid,
  Image,
} from "@chakra-ui/react";
import ShaBarStore from "../img/program/ShaBarStore.png";
import ShaBarPeduli from "../img/program/ShaBarPeduli.png";

export const Program = () => {
  const programs = [
    { name: "ShaBar Store", img: `${ShaBarStore}` },
    { name: "ShaBar Store", img: `${ShaBarPeduli}` },
  ];
  return (
    <Box p={4}>
      <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
        <Heading fontSize={"3xl"}>Program Kami</Heading>
      </Stack>

      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        {programs.map((program) => {
          return (
            <Image
              alt={`${program.name}'s icon`}
              src={program.img}
              title={program.name}
            />
          );
        })}
      </SimpleGrid>
    </Box>
  );
};