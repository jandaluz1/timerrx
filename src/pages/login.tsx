import { signIn } from "next-auth/react";

export default function SignIn() {
  return (
    <>
      <div>Sign in with Google</div>
      <button onClick={() => signIn("google")}>Sign In</button>
    </>
  );
}
