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
import ProfileHeader from '../../src/components/Profile/ProfileHeader';
import ProfileContent from '../../src/components/Profile/ProfileContent';
import GameHeader from '../../src/components/Layout/GameHeader';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { useRouter } from 'next/router';


const Profile = () => {
const router = useRouter()



  return (
    

      <div>

        <Head>
          <title></title>
          <meta name="description" content="" />
          <link rel="icon" href="/favicon.ico" />
        </Head>


        <GameHeader>
       
            <Typography sx={{
                flexGrow: 3,
                textAlign: "center",
                fontWeight: 700,
                color: "grey.gray3",
            }} variant="body1" component="h1">Profile</Typography>
         
            
            <SettingsOutlinedIcon onClick={
              () => router.push("/profile/settings")
            } sx={{
              fontSize: "1.75rem",
              color: "color1.main",
              cursor: "pointer",

              "&:hover": {
                color: "color1.dark",
              }
            }}/>
        </GameHeader>
        <ProfileContent />
        
        <BottomNav />

        

      </div>
  )
}

export default Profile