import { Box, Heading, SimpleGrid, Flex, Text, VStack } from "@chakra-ui/react";

import { AboutList } from "./AboutList";

export const About = () => {
  return (
    <Box as="section" id="about" px={["1rem", "2rem", "3rem"]} pt="5rem">
      <Flex direction="column">
        <Heading mb="1rem" fontSize={"3xl"}>
          <Text align="center">Tentang Komunitas?</Text>
        </Heading>
        <Text color="gray.600" align="center">
          Shabar Community merupakan sebuah komunitas yang dibentuk oleh Shabar
          Community merupakan sebuah komunitas yang dibentuk oleh kelompok anak
          muda yang memiliki rasa empati serupa terhadap keadaan masyarakat
          sekitar yang lebih membutuhkan. Shabar community juga dibangun dengan
          tujuan untuk selalu berusaha menebar manfaat dan kebaikan dalam
          kehidupan sosial di masyarakat.
          <br />
          <br />
          Dengan hadirnya Shabar community kami berharap keluarga, sahabat,
          teman dan masyarakat pada umumnya bisa ikut serta dalam melakukan
          kebaikan, kami berharap dapat berkontribusi dan menjadi salah satu
          wadah untuk membantu meringankan beban masyarakat yang kurang mampu.
        </Text>
      </Flex>

      <SimpleGrid columns={[1, 2]} spacing="1rem">
        {AboutList.map((about) => (
          <VStack align="start">
            <Heading mt="1rem" fontSize={"xl"}>
              {about.name}
            </Heading>
            <Text color="gray.600">{about.content}</Text>
          </VStack>
        ))}
      </SimpleGrid>
    </Box>
  );
};