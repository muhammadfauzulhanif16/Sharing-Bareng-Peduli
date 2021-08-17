import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  HStack,
  VStack,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";

export const About = () => {
  const abouts = [
    {
      name: "Visi",
      content:
        "Menjadi komunitas pecinta sedekah yang bermanfaat dan bergerak atas prinsip kepedulian sosial dengan membantu meringankan kebutuhan masyarakat",
    },
    {
      name: "Misi",
      content:
        "Menjadi komunitas pecinta sedekah yang bermanfaat dan bergerak atas prinsip kepedulian sosial dengan membantu meringankan kebutuhan masyarakat",
    },
  ];

  return (
    <Box p={4}>
      <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
        <Heading fontSize={"3xl"}>Tentang Komunitas?</Heading>
        <Text color={"gray.600"} fontSize={"xl"}>
          Shabar Community merupakan sebuah komunitas yang dibentuk oleh
          kelompok anak muda yang memiliki rasa empati serupa terhadap keadaan
          masyarakat sekitar yang lebih membutuhkan. Shabar community juga
          dibangun dengan tujuan untuk selalu berusaha menebar manfaat dan
          kebaikan dalam kehidupan sosial di masyarakat.
          <br />
          <br />
          Dengan hadirnya Shabar community kami berharap keluarga, sahabat,
          teman dan masyarakat pada umumnya bisa ikut serta dalam melakukan
          kebaikan, kami berharap dapat berkontribusi dan menjadi salah satu
          wadah untuk membantu meringankan beban masyarakat yang kurang mampu.
        </Text>
      </Stack>

      <Container maxW={"6xl"} mt={10}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          {abouts.map((about) => (
            <HStack align={"top"}>
              <Box color={"green.400"} px={2}>
                <Icon as={CheckIcon} />
              </Box>
              <VStack align={"start"}>
                <Text fontWeight={600}>{about.name}</Text>
                <Text color={"gray.600"}>{about.content}</Text>
              </VStack>
            </HStack>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};