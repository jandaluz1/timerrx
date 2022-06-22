import React from "react";
import { Box } from "@chakra-ui/react";

export function DrugCard() {
  return (
    <Box
      bg="yellow.200"
      w={["100%", "md", "lg"]}
      h="100"
      border="1px"
      boxSizing="border-box"
    >
      <h1>Drug Card</h1>
    </Box>
  );
}
