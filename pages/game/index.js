/* eslint-disable @next/next/no-img-element */
import React from  'react';
// import VizSensor from 'react-visibility-sensor';
import Head from 'next/head'
import PaddedContainer from '../../src/components/Layout/PaddedContainer'
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import Game from '../../src/components/Game/Game';



const Home = () => {




  return (
    

      <div>

        <Head>
          <title></title>
          <meta name="description" content="" />
          <link rel="icon" href="/favicon.ico" />
        </Head>


        <PaddedContainer>

        <Game />

        </PaddedContainer>

        

      </div>
  )
}

export const getStaticPaths = () => {
    const paths = getAllLevelsPaths()
    
    console.log(paths)
    return {
      paths,
      fallback: false,
    };
  };
  
  export const getStaticProps = ({ params }) => {
    console.log("params", params);
    
      const propsData = getLevelData(params?.id)
  
      // console.log("propsData", propsData);
    
      return {
        props: {
          propsData,
        },
      };
  };

export default Home