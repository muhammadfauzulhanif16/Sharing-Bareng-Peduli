import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { NavBar } from "./components/NavBar";
import { Caraousel } from "./components/Carousel";
import { About } from "./components/About";
import { Member } from "./components/Member";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";

export const App = () => (
  <ChakraProvider>
    <NavBar />
    <Caraousel />
    <About />
    <Member />
    <CTA />
    <Footer />
  </ChakraProvider>
);