import React from "react";
import { Box, Center, Icon, useColorModeValue } from "@chakra-ui/react";
import { Header } from "../../Header";
import { Hero } from "../../Hero";
import { About } from "../../About";
import { Member } from "../../Member";
import { Program } from "../../Program";
import { Payment } from "../../Payment";
import { Contact } from "../../Contact";
import { CTA } from "../../CTA";
import { Footer } from "../../Footer";
import { ArrowUpIcon } from "@chakra-ui/icons";

export const Home = () => {
  const theme = useColorModeValue("gray.50", "gray.800"),
    scrollTop = () => {
      window.scrollTo(0, 0);
    };

  return (
    <Box bgColor={theme} userSelect="none">
      <Header />
      <Hero />
      <About />
      <Member />
      <Program />
      <Payment />
      <Contact />
      <CTA />
      <Footer />

      <Center
        m="1rem"
        pos="fixed"
        rounded="100%"
        w="2rem"
        h="2rem"
        bgColor="green.500"
        bottom={0}
        left={0}
        onClick={scrollTop}
        cursor="pointer"
        _hover={{ bgColor: "green.400" }}
      >
        <Icon as={ArrowUpIcon} />
      </Center>
    </Box>
  );
};