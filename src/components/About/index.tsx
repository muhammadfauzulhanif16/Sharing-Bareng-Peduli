import {
  Box,
  Flex,
  Heading,
  Text,
  HStack,
  VStack,
  Icon,
} from "@chakra-ui/react";
import { BiCheckDouble } from "react-icons/all";
import { MissionList as mission } from "./MissionList";

export const About = () => {
  return (
    <Box px={8} py={12} align="center">
      <Text fontSize="xl" fontWeight="500" color="green.500">
        TENTANG KOMUNITAS
      </Text>

      <Heading size="lg" my={4}>
        “Berbagi Bersama Menebar Kebaikan”
      </Heading>

      <Text mx={48} mb={8} color="gray.500">
        Komunitas yang disusun oleh kelompok anak muda yang memiliki empati
        dengan tujuan untuk selalu berusaha menebar kebaikan dalam kehidupan
        sosial di masyarakat.
        <br />
        <br />
        Kami berharap masyarakat ikut serta melakukan kebaikan untuk membantu
        meringankan masyarakat yang kurang mampu.
      </Text>

      <Flex mx={16}>
        <Box w="full" align="start" fontWeight="500" fontSize="lg">
          <Text>Visi</Text>

          <HStack align="center" mt={4}>
            <Box color="gray.50" mr={4}>
              <Icon
                as={BiCheckDouble}
                boxSize={8}
                bgColor="green.500"
                rounded={4}
              />
            </Box>

            <Text fontWeight={600}>
              Menjadi komunitas yang bermanfaat atas prinsip kepedulian sosial
            </Text>
          </HStack>
        </Box>

        <Box w="full" align="start" fontWeight="500" fontSize="lg">
          <Text>Misi</Text>

          <VStack align="start">
            {mission.map(({ title }) => (
              <HStack align="center" mt={4}>
                <Box color="gray.50" mr={4}>
                  <Icon
                    as={BiCheckDouble}
                    boxSize={8}
                    bgColor="green.500"
                    rounded={4}
                  />
                </Box>

                <Text fontWeight={600}>{title}</Text>
              </HStack>
            ))}
          </VStack>
        </Box>
      </Flex>
    </Box>
  );
};