import Typography from "@mui/material/Typography";
import Head from "next/head";
import PaddedContainer from "../src/components/Layout/PaddedContainer";

const About = () => {

  return (
    <>
      <Head>
      <title>About | Sparkplay</title>
          <meta name="description" content="What is Sparkplay, why does it exist, and how do you learn by playing games" />
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
