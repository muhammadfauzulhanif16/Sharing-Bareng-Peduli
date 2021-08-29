import React from "react";
import {
  Box,
  Heading,
  AspectRatio,
  HStack,
  Icon,
  Text,
  Flex,
  SimpleGrid,
} from "@chakra-ui/react";
import { BiMailSend, BiPhone, BiMap } from "react-icons/all";

export const Contact = () => {
  return (
    <Flex py={12} px={8} direction={["column", "column", "row"]}>
      <SimpleGrid w="full" columns={[1, 2, 1]} mb={[4]} spacing={4}>
        <Box>
          <Heading align="start" size="lg">
            Kontak
          </Heading>

          <HStack align="center" mt={4}>
            <Box color="gray.50" mr={4}>
              <Icon
                as={BiMailSend}
                boxSize={8}
                bgColor="green.500"
                rounded={4}
              />
            </Box>

            <Text fontWeight={600}>mail@shabar.com</Text>
          </HStack>

          <HStack align="center" mt={4}>
            <Box color="gray.50" mr={4}>
              <Icon as={BiPhone} boxSize={8} bgColor="green.500" rounded={4} />
            </Box>

            <Text fontWeight={600}>(+62) 123-4567-8901</Text>
          </HStack>
        </Box>

        <Box>
          <Heading align="start" size="lg">
            Alamat
          </Heading>

          <HStack align="center" mt={4}>
            <Box color="gray.50" mr={4}>
              <Icon as={BiMap} boxSize={8} bgColor="green.500" rounded={4} />
            </Box>

            <Text fontWeight={600}>Lorem ipsum dolor sit amet.</Text>
          </HStack>
        </Box>
      </SimpleGrid>

      <AspectRatio ratio={16 / 9} w="full">
        <Box
          as="iframe"
          rounded={16}
          shadow="xl"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.952912260219!2d3.375295414770757!3d6.5276316452784755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1567723392506!5m2!1sen!2sng"
        />
      </AspectRatio>
    </Flex>
  );
};