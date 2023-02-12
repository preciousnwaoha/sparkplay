/* eslint-disable @next/next/no-img-element */
import React from  'react';
// import VizSensor from 'react-visibility-sensor';
import Head from 'next/head'
import PaddedContainer from '../../src/components/Layout/PaddedContainer'
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import Game from '../../src/components/Game/Game';
import TopBar from '../../src/components/Layout/TopBar';
import BottomNav from '../../src/components/Layout/BottomNav';
import Unit from '../../src/components/Unit';
import { getGameData } from '../../src/libs/utils';

export const getStaticProps = () => {
  
  const gameData = getGameData()

  // console.log("gameData", gameData);

  return {
    props: {
      gameData,
    },
  };
};


const GameHome = ({gameData}) => {
  // console.log({gameData})



  return (
    

      <div>

        <Head>
        <title>Game | Sparkplay</title>
          <meta name="description" content="Play a Game on Sparkplay to learn Complex Electrical & Electronics Engineeering Concepts in no time" />
        </Head>


        <TopBar />

        <PaddedContainer>
        <Unit gameData={gameData}/>
        </PaddedContainer>
        

        <BottomNav />

        

      </div>
  )
}





export default GameHome