import React from "react";
import { Flex, Button } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

const handleClick = () => {
  console.log("CLICKED");
};

export function BottomBar() {
  return (
    <Flex
      bg="blackAlpha.900"
      w="100vw"
      position="fixed"
      bottom="0"
      color="whiteAlpha.900"
      justify="center"
      align="center"
      zIndex="100"
      p="2"
    >
      <Button onClick={handleClick} colorScheme="cyan" size="sm">
        <AddIcon boxSize="5" />
      </Button>
    </Flex>
  );
}
