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

import { useSession, signIn, signOut } from "next-auth/react";

function SignInOut() {
  const { data: session } = useSession();
  console.log(session);
  if (session) {
    return (
      <Flex gap={2}>
        {session.user?.email}
        <button onClick={() => signOut()}>Sign out</button>
      </Flex>
    );
  }

  return (
    <>
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
}

export default function Header() {
  return (
    <>
      <Flex
        px="4"
        bg="white"
        w="100vw"
        direction="row"
        justify="space-between"
        align="center"
        position="fixed"
        top="0"
        color="cyan.600"
        borderBottom="1px"
      >
        <Heading size="lg">TimerRx</Heading>
        <div>
          <SignInOut />
        </div>
      </Flex>
    </>
  );
}
