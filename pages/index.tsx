import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      {/*<Head>*/}
      {/*  <title>HOME</title>*/}
      {/*</Head>*/}
      {process.env.NEXT_PUBLIC_ENV}
    </div>
  );
};

export default Home;
