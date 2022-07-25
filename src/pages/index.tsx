import type { NextPage } from "next";
import { useSession } from "next-auth/react";
import { Header } from "@/Components/Header";
import { ContentArea } from "@/Components/ContentArea";
import { BottomBar } from "@/Components/BottomBar";

const Home: NextPage = () => {
  const { data: session } = useSession();
  console.log(session);
  return (
    <>
      {session ? <div>Signed In</div> : null}
      <Header />
      <ContentArea />
      <BottomBar />
    </>
  );
};

export default Home;
