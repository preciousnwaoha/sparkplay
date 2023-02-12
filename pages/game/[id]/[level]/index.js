/* eslint-disable @next/next/no-img-element */
import React from  'react';
// import VizSensor from 'react-visibility-sensor';
import Head from 'next/head'
import PaddedContainer from '../../../../src/components/Layout/PaddedContainer'
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import Game from '../../../../src/components/Game/Game';
import { getLevelData, getLevelGamesData, getAllLevelsPaths, shuffle,  } from '../../../../src/libs/utils';

export const getStaticPaths = () => {
    const paths = getAllLevelsPaths()
    
    return {
      paths,
      fallback: false,
    };
  };
  
  export const getStaticProps = ({ params }) => {
    // console.log("params", params);
    
      const levelGamesData = getLevelGamesData(params.id, params.level)

      const levelData = getLevelData(params.id)
  
      // console.log("levelData", levelData);
    
      return {
        props: {
          levelGamesData,
          levelData,
          gameId: params.id,
          gameLevel: params.level
        },
      };
  };


const Level = ({levelGamesData, levelData, gameLevel, gameId}) => {

    // console.log(levelGamesData.games)


  // console.log({levelData})

  return (
    

      <div>

        <Head>
        <title>Gameplay | Sparkplay</title>
          <meta name="description" content="Learn Complex Electrical & Electronics Engineeering Concepts by playing fun trivia games" />
        </Head>


        <PaddedContainer>
        <Game games={levelGamesData.games} pointsPerGame={levelGamesData.pointsPerGame}gameId={gameId} gameLevel={gameLevel}/>

        </PaddedContainer>

        

      </div>
  )
}



export default Level