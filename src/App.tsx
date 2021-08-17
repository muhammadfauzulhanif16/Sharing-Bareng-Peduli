import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { NavBar } from "./components/NavBar";

export const App = () => (
  <ChakraProvider>
    <NavBar />
  </ChakraProvider>
);