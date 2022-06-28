import * as React from "react";
import { ChakraProvider, theme } from "@chakra-ui/react";
import { Header } from "./Components/Header";
import { ContentArea } from "./Components/ContentArea";
import { BottomBar } from "./Components/BottomBar";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Header />
    <ContentArea></ContentArea>
    <BottomBar />
  </ChakraProvider>
);
