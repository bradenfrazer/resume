import type { NextPage } from "next";
import Head from "next/head";

import Resume from "../components/Resume";
import resume from "../data/resume";
import Toast from "../components/Toast";

const Home: NextPage = () => (
  <>
    <Head>
      <title>Braden Frazer | Resume</title>
    </Head>
    <Toast />
    <Resume resume={resume} />
  </>
);

export default Home;
