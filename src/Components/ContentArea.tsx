import React, { ReactNode } from "react";
import { Flex } from "@chakra-ui/react";

interface IProps {
  children: ReactNode;
}
export function ContentArea({ children }: IProps) {
  return (
    <Flex
      w={["100vw", "sm", "lg"]}
      overflowY="scroll"
      direction="column"
      mt="9"
      gap="1"
    >
      {children}
    </Flex>
  );
}
