import React, { MouseEvent, useContext, useEffect, useState } from "react";
import { useToast, Text, Button, Flex } from "@chakra-ui/react";

import { MedState } from "./interface";
import { MedsContext } from "./context";
import { findNextDose, formatTime } from "./utils";

interface IProps {
  med: MedState;
  idx: number;
}

export function DrugCard({ med, idx }: IProps) {
  const toast = useToast();
  const [isReady, setIsReady] = useState<boolean>(false);
  const { meds, setMeds } = useContext(MedsContext);

  useEffect(() => {
    if (med.nextDose! <= Date.now()) {
      toast({
        position: "top",
        title: med.name,
        description: `Time to take ${med.name}`,
        status: "success",
        isClosable: true,
        duration: 3000,
      });
      setIsReady(true);
    } else {
      let timer1 = setTimeout(() => {
        toast({
          position: "top",
          title: med.name,
          description: `Time to take ${med.name}`,
          status: "success",
          isClosable: true,
          duration: 3000,
        });
        setIsReady(true);
      }, (Math.floor(med.nextDose! / 1000) - Math.floor(Date.now() / 1000)) * 1000);

      return () => clearTimeout(timer1);
    }
  }, []);

  const takeDose = (e: MouseEvent<HTMLButtonElement>) => {
    console.time();
    const medsCopy = [...meds];
    medsCopy[idx].lastDose = Math.floor(Date.now());
    medsCopy[idx].nextDose = findNextDose(med);
    localStorage.setItem("meds", JSON.stringify(medsCopy));
    setMeds(medsCopy);
    setIsReady(false);
  };

  return (
    <Flex
      bg={"gray.100"}
      w={["100%", "sm"]}
      h="100"
      border="2px"
      borderColor={isReady ? "cyan.500" : "black"}
      borderRadius={"lg"}
      boxSizing="border-box"
      align={"center"}
      justify={"space-between"}
      px={1.5}
    >
      <Flex direction={"column"}>
        <Text fontSize="lg">
          {med.name} - {med.dosage}mg
        </Text>
        <Text>Taken at: {formatTime(med.lastDose)}</Text>
        <Text>Next dose at: {formatTime(med.nextDose!)}</Text>
      </Flex>
      {isReady ? (
        <Button onClick={takeDose} colorScheme={"whatsapp"}>
          OK
        </Button>
      ) : null}
    </Flex>
  );
}
