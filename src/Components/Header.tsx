import React from "react";

import { Flex, Heading, Button } from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";
import { FiLogOut } from "react-icons/fi";

import { useSession, signIn, signOut } from "next-auth/react";

export function SignInOut() {
  const { data: session } = useSession();
  if (session) {
    return (
      <Flex gap={2}>
        {/* {session.user?.email} */}
        <Button
          leftIcon={<FiLogOut />}
          variant={"ghost"}
          onClick={() => signOut()}
        >
          Sign out
        </Button>
      </Flex>
    );
  }

  return (
    <>
      <Button
        leftIcon={<FcGoogle />}
        variant={"ghost"}
        onClick={() => signIn()}
      >
        Sign in
      </Button>
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
