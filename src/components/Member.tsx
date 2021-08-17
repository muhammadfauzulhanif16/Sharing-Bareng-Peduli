import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Stack,
  chakra,
  Image,
  Link,
} from "@chakra-ui/react";
import MFH from "../assets/img/MuhammadFauzulHanif.jpg";

export const Member = () => {
  return (
    <Box p={4}>
      <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
        <Heading fontSize={"3xl"}>Anggota</Heading>
      </Stack>

      <Container maxW={"6xl"} mt={10}>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          <Box w="xs" shadow="lg" rounded="lg" overflow="hidden" mx="auto">
            <Image w="full" h={56} fit="cover" src={MFH} alt="avatar" />
            <Box py={5} textAlign="center">
              <Link display="block" fontSize="2xl" fontWeight="bold">
                Muhammad Fauzul Hanif
              </Link>
              <chakra.span fontSize="sm">IT Support</chakra.span>
            </Box>
          </Box>

          <Box w="xs" shadow="lg" rounded="lg" overflow="hidden" mx="auto">
            <Image w="full" h={56} fit="cover" src={MFH} alt="avatar" />
            <Box py={5} textAlign="center">
              <Link display="block" fontSize="2xl" fontWeight="bold">
                Muhammad Fauzul Hanif
              </Link>
              <chakra.span fontSize="sm">IT Support</chakra.span>
            </Box>
          </Box>

          <Box w="xs" shadow="lg" rounded="lg" overflow="hidden" mx="auto">
            <Image w="full" h={56} fit="cover" src={MFH} alt="avatar" />
            <Box py={5} textAlign="center">
              <Link display="block" fontSize="2xl" fontWeight="bold">
                Muhammad Fauzul Hanif
              </Link>
              <chakra.span fontSize="sm">IT Support</chakra.span>
            </Box>
          </Box>

          <Box w="xs" shadow="lg" rounded="lg" overflow="hidden" mx="auto">
            <Image w="full" h={56} fit="cover" src={MFH} alt="avatar" />
            <Box py={5} textAlign="center">
              <Link display="block" fontSize="2xl" fontWeight="bold">
                Muhammad Fauzul Hanif
              </Link>
              <chakra.span fontSize="sm">IT Support</chakra.span>
            </Box>
          </Box>

          <Box w="xs" shadow="lg" rounded="lg" overflow="hidden" mx="auto">
            <Image w="full" h={56} fit="cover" src={MFH} alt="avatar" />
            <Box py={5} textAlign="center">
              <Link display="block" fontSize="2xl" fontWeight="bold">
                Muhammad Fauzul Hanif
              </Link>
              <chakra.span fontSize="sm">IT Support</chakra.span>
            </Box>
          </Box>

          <Box w="xs" shadow="lg" rounded="lg" overflow="hidden" mx="auto">
            <Image w="full" h={56} fit="cover" src={MFH} alt="avatar" />
            <Box py={5} textAlign="center">
              <Link display="block" fontSize="2xl" fontWeight="bold">
                Muhammad Fauzul Hanif
              </Link>
              <chakra.span fontSize="sm">IT Support</chakra.span>
            </Box>
          </Box>

          <Box w="xs" shadow="lg" rounded="lg" overflow="hidden" mx="auto">
            <Image w="full" h={56} fit="cover" src={MFH} alt="avatar" />
            <Box py={5} textAlign="center">
              <Link display="block" fontSize="2xl" fontWeight="bold">
                Muhammad Fauzul Hanif
              </Link>
              <chakra.span fontSize="sm">IT Support</chakra.span>
            </Box>
          </Box>

          <Box w="xs" shadow="lg" rounded="lg" overflow="hidden" mx="auto">
            <Image w="full" h={56} fit="cover" src={MFH} alt="avatar" />
            <Box py={5} textAlign="center">
              <Link display="block" fontSize="2xl" fontWeight="bold">
                Muhammad Fauzul Hanif
              </Link>
              <chakra.span fontSize="sm">IT Support</chakra.span>
            </Box>
          </Box>

          <Box w="xs" shadow="lg" rounded="lg" overflow="hidden" mx="auto">
            <Image w="full" h={56} fit="cover" src={MFH} alt="avatar" />
            <Box py={5} textAlign="center">
              <Link display="block" fontSize="2xl" fontWeight="bold">
                Muhammad Fauzul Hanif
              </Link>
              <chakra.span fontSize="sm">IT Support</chakra.span>
            </Box>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
};