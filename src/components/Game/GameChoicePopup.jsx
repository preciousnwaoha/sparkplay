import * as React from 'react';

import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useRouter } from 'next/router';
import GameTip from './GameTip';

export default function GameChoicePopup({ open, anchorEl, popoverId, onToggleGameTip, gameId, gameName, gameImage, gameColor, onClose }) {
  const router = useRouter()
    
    const handleClose = () => {
        onClose()
    }

    const handleClickedTips = () => {
      console.log("green")
      onClose()
      onToggleGameTip(true)
    }

    let level = 1
  const handleRouteToGame = () => {
    router.push(`/game/${gameId}/${level}`)
  }
 
    
  

  return (
    <div>
      <Popover
        id={popoverId}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
        
          sx={{
            bgcolor: "transparent",
            boxShadow: 0,
            borderRadius: "14px",

            "& div": {
              borderRadius: "14px",
            }
          }}
          
      >
        <Box sx={{
            width: {xs: "calc(100vw - 4rem)", md: "400px"},
            maxWidth: "400px",
            bgcolor: `${gameColor}.dark`,
            p: 2,
            borderRadius: "14px",
          }}>
            <Typography variant="body1" component="h4" sx={{ 
                fontWeight: 700,
                color: "common.white",
             }}>Level 1</Typography>
             <Button aria-label="view game tips"
              aria-controls="menu-appbar"
              aria-haspopup="true" varant="contained" onClick={handleClickedTips} sx={{
                my: 1,
                width: "100%",
                bgcolor: `${gameColor}.dark`,
                border: "1px solid",
                borderBottom: "3px solid",
                color: `common.white`,
                borderColor: "#0000007b",

                "&:hover": {
                    bgcolor: `${gameColor}.dark`,
                border: "1px solid",
                borderBottom: "3px solid",
                color: `common.white`,
                borderColor: "#0000007b",
                }
             }}>tips</Button>
             <Button varant="contained" onClick={handleRouteToGame} sx={{
                width: "100%",
                bgcolor: "background.paper",
                borderBottom: "3px solid",
                color: `${gameColor}.dark`,
                borderColor: `${gameColor}.light`,

                "&:hover": {
                    bgcolor: "background.paper",
                    borderBottom: "3px solid",
                    color: `${gameColor}.dark`,
                    borderColor: `${gameColor}.light`,
                }
             }}>Start</Button>
        </Box>
        
      </Popover>
    </div>
  );
}