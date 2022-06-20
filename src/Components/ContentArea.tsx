import React, { ReactNode } from "react";
import { Flex } from "@chakra-ui/react";

interface IProps {
  children: ReactNode;
}
export function ContentArea({ children }: IProps) {
  return (
    <Flex
      bg="green.200"
      w={["100vw", "sm", "lg"]}
      overflowY="scroll"
      overflowX="hidden"
      direction="column"
      mt="2.5"
      gap="1"
    >
      <h2>Content Area</h2>
      {children}
    </Flex>
  );
}
