import React, { useState } from "react";
import { ChakraProvider, theme } from "@chakra-ui/react";
import { Header } from "./Components/Header";
import { ContentArea } from "./Components/ContentArea";
import { BottomBar } from "./Components/BottomBar";
import { MedsContext } from "./Components/context";

export const App = () => {
  const [meds, setMeds] = useState<any[]>(() => {
    const _meds = localStorage.getItem("meds");

    return _meds ? JSON.parse(_meds) : [];
  });

  return (
    <ChakraProvider theme={theme}>
      <MedsContext.Provider value={{ meds, setMeds }}>
        <Header />
        <ContentArea />
        <BottomBar />
      </MedsContext.Provider>
    </ChakraProvider>
  );
};
