import React from 'react'
import Box from "@mui/material/Box"
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import OutlinedFlagRoundedIcon from '@mui/icons-material/OutlinedFlagRounded';

// Good, Excellent, Amazing, Correct

const GameAnswerPopup = ({isCorrect, onContinue}) => {

    const handleContinue = () => {
      onContinue();
    }

    // console.log({isCorrect})

  return (
    
        <Box sx={{
            bgcolor: isCorrect ? "#e3ffd2" : "#ffdada",
            p: 2,
            position: "fixed",
            bottom: 0,
            left: 0,
            width: "100%",
        }}>
            <Box sx={{
                display: "flex",
                justifyContent: "space-between",
                mb: 2,
                width: "100%"
            }}>
            <Typography variant="body1" sx={{
                fontWeight: 700,
                fontSize: "1.125rem",
                color: isCorrect ? "#3a9907" : "#ce4242",
            }}>{isCorrect ? "Correct!" : "That's wrong!"}</Typography>
                <OutlinedFlagRoundedIcon sx={{
                    color: isCorrect ? "primary.dark" : "#ce4242",
                    fontWeight: 700,
                }} />
            </Box>
            <Button variant="contained" onClick={handleContinue} sx={{
                width: "100%",
                bgcolor: isCorrect ?  "primary.dark" : "#ff4b4b",
            
                fontSize: "0.85rem",
                fontWeight: 600,
                boxShadow: isCorrect ? "0px 3px #3a9907" : "0px 3px #ce4242",
                py: 1,

                "&:hover": {
                    bgcolor: isCorrect ?  "primary.dark" : "#ff4b4b",
                    boxShadow: isCorrect ? "0px 3px #3a9907" : "0px 3px #ce4242",
                }
            }}>continue</Button>
        </Box>
  )
}

export default GameAnswerPopup