import * as React from 'react';
import Link from "next/link"
// import { useRouter } from "next/router";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import GameHeader from '../Layout/GameHeader';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
import Image from 'next/image';
import TipPic from "../../../public/assets/imgs/electrical-2.png"
import PaddedContainer from '../Layout/PaddedContainer';


export default function GameTip({onToggleGameTip, onClosePopup,  gameId, gameName, gameImage, gameColor}) {

    const handleExitGameTip = () => {
        onToggleGameTip(false)
    }

  

  return (
    
        <Box>
        
            
          <GameHeader >

          <ClearRoundedIcon onClick={handleExitGameTip} sx={{
          
          fontSize: "1.75rem",
          // border: 1,
          mr: 1,
          color: "grey.gray3",
          cursor: "pointer",
        }}/>

          <Typography
          sx={{
            flexGrow: 1,
            textAlign: "center",
            fontWeight: 600,
            color: "grey.gray3",
          }}
          variant="body1"
          component="h1"
        >
          Greetings
        </Typography>
          </GameHeader>

          <PaddedContainer >

          <Box sx={{
            postion: "relative",
            overflow: "hidden",
            height: "150px",
            width: "100%",
            bgcolor: "secondary.main",
            border: "2px solid",
            borderColor: "grey.gray3",
            borderRadius: 2,
            my: 2,

            "& img": {
                objectFit: "cover"
            }
          }}>
            
            <Image src={TipPic} alt={"Abstract Colors"} width={"100%"} height={"100%"} />
          </Box>

          <Typography variant="body1" sx={{
            fontWeight: 700,
          }}>
            Electrical Components are essential to makeup of electrical circuits
          </Typography>

          <Typography variant="h2" sx={{
            fontSize: "1.125rem",
            fontWeight: 700,
            textAlign: "left"
          }}>
            Learning Components
          </Typography>
          <Typography variant="body1" sx={{
            fontWeight: 500,
            // color: "grey.gray2",
          }}>
            Circuits are not as difficult as you think! While the differents symbols and functions of components may be intimidating at first, Cuicuitry is actually easier than many other topics.
          </Typography>

          <Typography variant="h2" sx={{
            fontSize: "1.125rem",
            fontWeight: 700,
            textAlign: "left"
          }}>
            Rules
          </Typography>
          <Typography variant="body1" sx={{
            fontWeight: 500,
            // color: "grey.gray2",
          }}>
            In Sparkplay we keep it simple with the rules. 
            <br />
            1. Get the correct answer before time runs out
            <br />
            2. Tap &ldquo;Continue&rdquo; move on and earn points
          </Typography>
          
          </PaddedContainer>
          
          
        </Box>
      
  );
}