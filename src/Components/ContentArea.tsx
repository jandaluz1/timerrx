import React, { useEffect, useContext, useState } from "react";
import { Flex } from "@chakra-ui/react";
import { DrugCard } from "./DrugCard";
import { useSession } from "next-auth/react";
import { SignInOut } from "./Header";
import { trpc } from "@/utils/trpc";

export function ContentArea() {
  const [meds, setMeds] = useState<Array<any>>();
  const { data: session } = useSession();

  // useEffect(() => {
  //   //get meds from local storage on first render
  //   const _meds = localStorage.getItem("meds");
  //   const parsed: any[] = _meds ? JSON.parse(_meds) : [];

  //   setMeds(parsed);
  //   //eslint-disable-next-line
  // }, []);

  const _meds = trpc.useQuery(["get-user-meds"]);
  console.log(_meds.data);

  if (!session && !meds) {
    return (
      <Flex
        px={4}
        direction={"column"}
        textAlign={"center"}
        w={"100vw"}
        h={"100vh"}
        justify={"center"}
        align={"center"}
      >
        Sign In with your Google Account to start tracking your medications{" "}
        <br />
        <SignInOut />
      </Flex>
    );
  }

  if (!meds) {
    return (
      <Flex
        px={4}
        position={"relative"}
        overflowY={["unset"]}
        direction={"column"}
        textAlign={"center"}
        w={"100vw"}
        h={"100vh"}
        justify={"center"}
        align={"center"}
      >
        Welcome to TimerRx.
        <br />
        Use the button at the bottom of the page to add medications
      </Flex>
    );
  }

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
