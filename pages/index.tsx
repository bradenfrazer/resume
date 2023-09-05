import type { NextPage } from "next";
import Head from "next/head";

import Resume from "../components/Resume";
import resume from "../data/resume";

const Home: NextPage = () => (
  <>
    <Head>
      <title>Braden Frazer | Resume</title>
    </Head>

    <Resume resume={resume} />
  </>
);

export default Home;
