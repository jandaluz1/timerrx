import React, { useEffect, useContext } from "react";
import { Flex } from "@chakra-ui/react";
import { DrugCard } from "./DrugCard";
import { MedsContext } from "../Components/context";

export function ContentArea() {
  const { meds, setMeds } = useContext(MedsContext);

  useEffect(() => {
    //get meds from local storage on first render
    const _meds = localStorage.getItem("meds");
    const parsed: any[] = _meds ? JSON.parse(_meds) : [];

    setMeds(parsed);
  }, []);

  return (
    <Flex
      w="100%"
      overflowY={["scroll", "unset"]}
      direction={["column", "row"]}
      flexWrap={["nowrap", "wrap"]}
      mt="9"
      gap="1.5"
    >
      {meds
        ? meds.map((med, idx) => <DrugCard med={med} idx={idx} key={idx} />)
        : null}
    </Flex>
  );
}
