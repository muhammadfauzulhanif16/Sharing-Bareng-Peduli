import React from "react";
import { Box, useColorModeValue } from "@chakra-ui/react";
import { Header } from "../../Header";
import { Hero } from "../../Hero";
import { About } from "../../About";
import { Member } from "../../Member";
import { Program } from "../../Program";
import { Payment } from "../../Payment";
import { Contact } from "../../Contact";
import { CTA } from "../../CTA";
import { Footer } from "../../Footer";

export const Home = () => {
  const theme = useColorModeValue("gray.50", "gray.800");

  return (
    <Box bg={theme} userSelect="none">
      <Header />
      <Hero />
      <About />
      <Member />
      <Program />
      <Payment />
      <Contact />
      <CTA />
      <Footer />
    </Box>
  );
};