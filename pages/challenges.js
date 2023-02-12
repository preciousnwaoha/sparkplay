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



const Challenges = () => {




  return (
    

      <div>

        <Head>
        <title>Challenges | Sparkplay</title>
          <meta name="description" content="Learn Complex Electrical & Electronics Engineeering Concepts by playing fun trivia games" />
        </Head>


        <TopBar />
        
        <BottomNav />

        

      </div>
  )
}

export default Challenges