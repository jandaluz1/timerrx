import React, { useRef } from "react";

import {
  Flex,
  Heading,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  DrawerCloseButton,
  Box,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

export function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Flex
        px="1"
        bg="white"
        w="100vw"
        direction="row"
        justify="flex-end"
        align="center"
        position="fixed"
        top="0"
        color="cyan.600"
        borderBottom="1px"
      >
        <Heading size="lg">TimerRx</Heading>
        <HamburgerIcon onClick={onOpen} boxSize="5" ml="auto" />
      </Flex>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="xs">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody>
            <Box>Sign Up</Box>
            <Box>Log In</Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
