/* eslint-disable @next/next/no-img-element */
import React from  'react';
// import VizSensor from 'react-visibility-sensor';
import Head from 'next/head'
import PaddedContainer from '../../src/components/Layout/PaddedContainer'
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Game from '../../src/components/Game/Game';
import TopBar from '../../src/components/Layout/TopBar';
import BottomNav from '../../src/components/Layout/BottomNav';
import GameHeader from '../../src/components/Layout/GameHeader';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
import { useRouter } from 'next/router';
import GeneralSettings from '../../src/components/Profile/GeneralSettings';


const ProfileSettings = () => {
const router = useRouter()

const handleExitSettings = () => {
    router.push("/profile")
}


  return (
    

      <div>

        <Head>
          <title></title>
          <meta name="description" content="" />
          <link rel="icon" href="/favicon.ico" />
        </Head>


        <GameHeader>
        <ClearRoundedIcon onClick={handleExitSettings} sx={{
          
          fontSize: "1.75rem",
          // border: 1,
          mr: 1,
          color: "grey.gray3",
          cursor: "pointer",
        }}/>
            <Typography sx={{
                flexGrow: 3,
                textAlign: "center",
                fontWeight: 700,
                color: "grey.gray3",
            }} variant="body1" component="h1">Settings</Typography>
         
            
           
        </GameHeader>

        <GeneralSettings />
        
        <BottomNav />

        

      </div>
  )
}

export default ProfileSettings