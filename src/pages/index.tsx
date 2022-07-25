import type { NextPage } from "next";
import { useState } from "react";
import { Header } from "@/Components/Header";
import { ContentArea } from "@/Components/ContentArea";
import { BottomBar } from "@/Components/BottomBar";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <ContentArea />
      <BottomBar />
    </>
  );
};

export default Home;
