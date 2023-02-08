/* eslint-disable @next/next/no-img-element */
import React from  'react';
// import VizSensor from 'react-visibility-sensor';
import Head from 'next/head'
import PaddedContainer from '../src/components/Layout/PaddedContainer'
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import GameComplete from '../src/components/Game/GameComplete';



const Home = () => {




  return (
    

      <div>

        <Head>
          <title></title>
          <meta name="description" content="" />
          <link rel="icon" href="/favicon.ico" />
        </Head>


        <PaddedContainer>

        <GameComplete />

        </PaddedContainer>

        

      </div>
  )
}

export default Home