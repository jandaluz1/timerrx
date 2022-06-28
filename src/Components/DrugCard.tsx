import React, { useEffect } from "react";
import { Box, useToast, Text } from "@chakra-ui/react";

import { MedState } from "./interface";

interface IProps {
  med: MedState;
}

export function DrugCard({ med }: IProps) {
  const toast = useToast();

  const formatTime = (epochTime: number): string => {
    const date = new Date(epochTime * 1000);

    return date.toLocaleTimeString();
  };

  useEffect(() => {
    let timer1 = setTimeout(() => {
      toast({
        position: "top",
        title: med.name,
        description: `Time to take ${med.name}`,
        status: "success",
        isClosable: true,
        duration: 3000,
      });
    }, 5000);

    return () => clearTimeout(timer1);
  }, []);

  return (
    <Box
      bg="yellow.200"
      w={["100%", "md", "lg"]}
      h="100"
      border="1px"
      boxSizing="border-box"
    >
      <Text fontSize="lg">
        {med.name} - {med.dosage}mg
      </Text>
      <Text>Taken at: {formatTime(med.lastDose)}</Text>
      <Text>Next dose at: {formatTime(med.nextDose!)}</Text>
    </Box>
  );
}
