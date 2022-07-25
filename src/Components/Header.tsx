import React from "react";

import {
  Flex,
  Heading,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  DrawerCloseButton,
  DrawerHeader,
  useDisclosure,
  Icon,
  Button,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { GoSignIn } from "react-icons/go";

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
          <DrawerHeader>TimerRx</DrawerHeader>
          <DrawerBody>
            <Flex direction="column" gap="2">
              <Button disabled colorScheme="cyan">
                Sign Up
              </Button>
              <Button
                disabled
                colorScheme="cyan"
                leftIcon={<Icon as={GoSignIn} />}
              >
                Log In
              </Button>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
