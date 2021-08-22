import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Routes } from "./routes";

export const App = () => {
  return (
    <ChakraProvider>
      <Routes />
    </ChakraProvider>
  );
};