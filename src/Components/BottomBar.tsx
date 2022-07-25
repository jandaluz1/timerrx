import React from "react";
import {
  Flex,
  Button,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  DrawerBody,
  useDisclosure,
  DrawerFooter,
  DrawerCloseButton,
  Text,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { AddMedForm } from "./AddMedForm";

export function BottomBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex
        bg="white"
        borderTop="1px"
        w="100vw"
        position="fixed"
        bottom="0"
        color="cyan.600"
        justify="center"
        align="center"
        zIndex="100"
        p="2"
      >
        <Button onClick={onOpen} colorScheme="cyan" size="sm">
          <AddIcon boxSize="5" />
          <Text display={["none", "inline"]} ml={[0, 2]}>
            Add Medicine
          </Text>
        </Button>
      </Flex>
      <Drawer isOpen={isOpen} onClose={onClose} placement="bottom" size="xs">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody>
            <AddMedForm close={onClose} />
          </DrawerBody>
          <DrawerFooter>
            <Button colorScheme="cyan" type="submit" form="addMed">
              Submit
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
