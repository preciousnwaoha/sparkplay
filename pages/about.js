import Typography from "@mui/material/Typography";
import Head from "next/head";
import PaddedContainer from "../src/components/Layout/PaddedContainer";

const About = () => {

  return (
    <>
      <Head>
        <title></title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <main >
        <PaddedContainer>
          <Typography variant="h2" component="h1" gutterBottom>
            About Trustee
          </Typography>

          
        </PaddedContainer>
      </main>
      <footer>

      </footer>
    </>
  );
};

export default About;
