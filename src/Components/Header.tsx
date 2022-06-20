import React from "react";

import { Flex, Heading } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

export function Header() {
  return (
    <Flex
      px="1"
      bg="red.200"
      w="100vw"
      direction="row"
      justify="flex-end"
      align="center"
      position="fixed"
      top="0"
    >
      <Heading size="lg">TimerRx</Heading>
      <HamburgerIcon boxSize="5" ml="auto" />
    </Flex>
  );
}
