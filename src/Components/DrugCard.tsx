import React, { MouseEvent, useContext, useEffect, useState } from "react";
import {
  useToast,
  Text,
  Flex,
  IconButton,
  Slide,
  useDisclosure,
} from "@chakra-ui/react";
import { DeleteIcon, CheckIcon } from "@chakra-ui/icons";

import { MedState } from "./interface";
import { MedsContext } from "./context";
import { findNextDose, formatTime } from "./utils";

interface IProps {
  med: MedState;
  idx: number;
}

export function DrugCard({ med, idx }: IProps) {
  const toast = useToast();
  const { isOpen, getButtonProps } = useDisclosure();
  const [isReady, setIsReady] = useState<boolean>(true);
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

  const deleteMed = (e: MouseEvent<HTMLButtonElement>) => {
    const newMeds = meds.filter((med) => med !== meds[idx]);
    localStorage.setItem("meds", JSON.stringify(newMeds));
    setMeds(newMeds);
  };

  const buttonProps = getButtonProps({ onclick: deleteMed });

  return (
    <Slide
      direction="left"
      in={!isOpen}
      unmountOnExit
      style={{ position: "relative" }}
    >
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
        <Flex gap={1.5}>
          <IconButton
            {...buttonProps}
            aria-label="Delete"
            icon={<DeleteIcon />}
            colorScheme={"red"}
            onClick={deleteMed}
          />
          {isReady ? (
            <IconButton
              aria-label="OK"
              onClick={takeDose}
              colorScheme={"whatsapp"}
              icon={<CheckIcon />}
            >
              OK
            </IconButton>
          ) : null}
        </Flex>
      </Flex>
    </Slide>
  );
}
