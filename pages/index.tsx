import type { NextPage } from "next";

const Home: NextPage = () => {
  return <div>{process.env.NEXT_PUBLIC_ENV}</div>;
};

export default Home;
