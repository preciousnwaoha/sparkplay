/* eslint-disable @next/next/no-img-element */
import React from  'react';
// import VizSensor from 'react-visibility-sensor';
import Head from 'next/head'
import PaddedContainer from '../src/components/Layout/PaddedContainer'
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import Game from '../src/components/Game/Game';
import TopBar from '../src/components/Layout/TopBar';
import BottomNav from '../src/components/Layout/BottomNav';
import Unit from '../src/components/Unit';
import { getGameData } from '../src/libs/utils';

export const getStaticProps = () => {
  
  const gameData = getGameData()

  // console.log("gameData", gameData);

  return {
    props: {
      gameData,
    },
  };
};


const Home = ({gameData}) => {
  // console.log({gameData})



  return (
    

      <div>

        <Head>
          <title></title>
          <meta name="description" content="" />
          <link rel="icon" href="/favicon.ico" />
        </Head>


        <TopBar />

        <PaddedContainer>
        <Unit gameData={gameData}/>
        </PaddedContainer>
        

        <BottomNav />

        

      </div>
  )
}





export default Home