import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import GameChoicePopup from "./GameChoicePopup"
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import CircularProgress, {
  circularProgressClasses,
} from "@mui/material/CircularProgress";

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

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);

    };;

    const handleClosePopover = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    const popoverId = open ? 'level-popover' : undefined;

  return (
    
    <>
    <Box aria-describedby={popoverId} onClick={handleClick} sx={{
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
    <GameChoicePopup open={open} anchorEl={anchorEl} popoverId={popoverId} gameId={id} gameName={name} gameImage={image} onClose={handleClosePopover} gameColor={color} />
    </>
  );
}
