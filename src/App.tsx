import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { NavBar } from "./components/NavBar";
import { Caraousel } from "./components/Carousel";

export const App = () => (
  <ChakraProvider>
    <NavBar />
    <Caraousel />
  </ChakraProvider>
);