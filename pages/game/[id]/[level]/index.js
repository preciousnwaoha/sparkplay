/* eslint-disable @next/next/no-img-element */
import React from  'react';
// import VizSensor from 'react-visibility-sensor';
import Head from 'next/head'
import PaddedContainer from '../../../../src/components/Layout/PaddedContainer'
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import Game from '../../../../src/components/Game/Game';
import { getLevelData, getAllLevelsPaths } from '../../../../src/libs/utils';

export const getStaticPaths = () => {
    const paths = getAllLevelsPaths()
    
    return {
      paths,
      fallback: false,
    };
  };
  
  export const getStaticProps = ({ params }) => {
    // console.log("params", params);
    
      const levelData = getLevelData(params.id, params.level)
  
      // console.log("levelData", levelData);
    
      return {
        props: {
          levelData,
          gameId: params.id,
          gameLevel: params.level
        },
      };
  };


const Level = ({levelData, gameLevel, gameId}) => {

    // console.log(levelData.games)




  return (
    

      <div>

        <Head>
          <title></title>
          <meta name="description" content="" />
          <link rel="icon" href="/favicon.ico" />
        </Head>


        <PaddedContainer>

        <Game games={levelData.games} pointsPerGame={levelData.pointsPerGame}gameId={gameId} gameLevel={gameLevel}/>

        </PaddedContainer>

        

      </div>
  )
}



export default Level