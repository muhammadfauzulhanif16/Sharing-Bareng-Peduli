import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import {
  About,
  Carousel,
  CTA,
  Footer,
  Member,
  NavBar,
  Program,
} from "./components";
import { Payment } from "./components/Payment";
import { Address } from "./components/Address";

export const App = () => (
  <ChakraProvider>
    <NavBar />
    <Carousel />
    <About />
    <Program />
    <Member />
    <Payment />
    <Address />
    <CTA />
    <Footer />
  </ChakraProvider>
);