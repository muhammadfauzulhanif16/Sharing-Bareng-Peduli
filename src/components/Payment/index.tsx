import React from "react";
import {
  Box,
  SimpleGrid,
  Heading,
  Text,
  Center,
  Image,
} from "@chakra-ui/react";
import { PaymentList as payment } from "./PaymentList";

export const Payment = () => {
  return (
    <Box py={12} px={8} align="center">
      <Text fontSize="xl" fontWeight="500" color="green.500" mb={4}>
        MITRA PEMBAYARAN DONASI
      </Text>

      <Heading size="lg" mb={4}>
        Lorem ipsum dolor.
      </Heading>

      <Text mx={48} mb={8} color="gray.500">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
        consequatur dolorum eaque quia sed veritatis? Aut, eaque ut. Nam nihil
        quod voluptate. Accusamus asperiores est id molestias perferendis
        sapiente, ut.
      </Text>

      <SimpleGrid columns={[1, 7]}>
        {payment.map(({ name, img }) => {
          return (
            <Center>
              <Image alt={`${name}'s icon`} src={img} title={name} w="7rem" />
            </Center>
          );
        })}
      </SimpleGrid>
    </Box>
  );
};