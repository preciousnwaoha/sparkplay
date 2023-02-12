/* eslint-disable @next/next/no-img-element */
import React from  'react';
// import VizSensor from 'react-visibility-sensor';
import Head from 'next/head'
import PaddedContainer from '../../../../src/components/Layout/PaddedContainer'
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import GameComplete from '../../../../src/components/Game/GameComplete';
import {  getAllLevelsPaths, getGameByID, getGameData } from '../../../../src/libs/utils';

export const getStaticPaths = () => {
  const paths = getAllLevelsPaths()
  
  console.log(paths)
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = ({ params }) => {
    // console.log("params", params);
    
      const gameData = getGameByID(params.id)


  
    
      return {
        props: {
          gameData,
          gameId: params.id,
          gameLevel: params.level
        },
      };
  };


const Complete = ({gameData, gameId, gameLevel}) => {

  return (
    
      <div>

        <Head>
          <title>Completed Game | Sparkplay</title>
          <meta name="description" content={`You've completed Level ${gameLevel} of ${gameData.name} on Sparkplay`} />
          <link rel="icon" href="/favicon.ico" />
        </Head>


        <PaddedContainer>

        <GameComplete />

        </PaddedContainer>

        

      </div>
  )
}

export default Complete