import React, { useState, useEffect } from "react";
import { Flex } from "@chakra-ui/react";
import { DrugCard } from "./DrugCard";

export function ContentArea() {
  const [meds, setMeds] = useState<any[]>(() => {
    const _meds = localStorage.getItem("meds");

    return _meds ? JSON.parse(_meds) : [];
  });

  useEffect(() => {
    //eslint-disable-next-line
    addEventListener("storage", (e: StorageEvent) => {
      console.log("STORAGE EVENT", e.newValue);
    });
  }, []);

  return (
    <Flex w="100%" overflowY="scroll" direction="column" mt="9" gap="1">
      {meds ? meds.map((med, idx) => <DrugCard med={med} key={idx} />) : null}
    </Flex>
  );
}
