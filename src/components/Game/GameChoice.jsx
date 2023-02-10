import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import GameChoicePopup from "./GameChoicePopup"
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import CircularProgress, {
  circularProgressClasses,
} from "@mui/material/CircularProgress";
import GameTip from "./GameTip";
import Link from "next/link"
// import { useRouter } from "next/router";
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import UIfx from 'uifx'; 
// import tickAudio from '../../../public/assets/sfx/interface-2.mp3';
// const tick = new UIfx({asset: tickAudio});

const GameChoiceCircularProgress = styled(CircularProgress)(({ theme }) => ({
  borderRadius: 5,
  
  [`& .${circularProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
  },
  [`& .${circularProgressClasses.root}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
  },
  [`& .${circularProgressClasses.circleDeterminate}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
  },
  [`& .${circularProgressClasses.colorPrimary}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
  },
  [`& .${circularProgressClasses.circle}`]: {
    strokeLinecap: "round",
    
  },
}));

export default function GameChoice({name, id, image, color}) {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const [gameTipAnchorState, setGameTipAnchorState] = React.useState(false)



  const toggleGameTip = (open) => {
    console.log("red")
    setGameTipAnchorState(open);
  };

  


    const handleOpenPopover = (event) => {
      setAnchorEl(event.currentTarget);
      // if (!!document) {
      //   tick.volume(0.8).play()
      //   }
    };;

    const handleClosePopover = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    const popoverId = open ? 'level-popover' : undefined;

  return (
    
    <>
    <Box aria-describedby={popoverId} onClick={handleOpenPopover} sx={{
        display: "flex", 
        flexDirection: "column",
        alignItems: "center", 
            justifyContent: "center",
            cursor: "pointer",
    }}>
        <Box sx={{ 
            display: "flex", 
            flexDirection: "column", 
            position: "relative", 
            width: "80px",
            height: "80px", 
            alignItems: "center", 
            justifyContent: "center", border: "6px solid",
            borderColor: "grey.gray4",
        borderRadius: "50%",
        
    }} >
      
        <Paper elevation={0} sx={{
            position: "asbolute",
             top: 0,
             left: 0,
             width: "55px",
             height: "55px",
             borderRadius: "50%",
             bgcolor: `${color}.main`,
        }}>
            
        </Paper>
      
    </Box>

    <Typography variant="body2" sx={{
        width: "100%",
        fontWeight: 700,
        my: 1,
        // border: 1,
        textAlign: "center",
    }}>{name}</Typography>
   
    </Box >
    <GameChoicePopup open={open} anchorEl={anchorEl} popoverId={popoverId} gameId={id} gameName={name} gameImage={image} onClose={handleClosePopover} gameColor={color} onToggleGameTip={toggleGameTip} />

    <Drawer
            anchor={"right"}
            open={gameTipAnchorState}
          >
      <Box
        sx={{ 
          width: "100vw",
        //  border: "2px solid red"
        }}
        role="presentation"
      >
        <GameTip gameId={id} gameName={name} gameImage={image} gameColor={color} onToggleGameTip={toggleGameTip} />
      </Box>
    </Drawer>
    
    </>
  );
}
