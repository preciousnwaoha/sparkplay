import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { sfxActions } from "../../store/sfx-slice";
import { currentLevelActions } from "../../store/current-level-slice";
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Grid from "@mui/material/Grid"
import Button from "@mui/material/Button"
import Paper from "@mui/material/Paper"
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded';
import CrisisAlertRoundedIcon from '@mui/icons-material/CrisisAlertRounded';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import { useRouter } from 'next/router'

const GameComplete = () => {
    const dispatch = useDispatch()
    const currentLevel = useSelector(state => state.currentLevel)
    const router = useRouter()


    const  {points, score, playing, timeElapsed } = currentLevel

    const handleContinue = () => {
        dispatch(currentLevelActions.togglePlaying())
        router.push('/game')
    }

    useEffect(() => {
    //     dispatch(sfxActions.playSfx("game-complete"))
    }, [dispatch])


    console.log({timeElapsed, points, score, playing})

  return (
    <Box sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        py: 2,
        height: "100vh",
    }}>
        <Typography variant="h1" sx={{
            color: "secondary.main",
            fontSize: "3rem",
            fontWeight: 800,
        }}>Practice complete!</Typography>

        <Box>

        </Box>

        <Grid container spacing={2} >
            <Grid item xs={4} >
                <Paper sx={{
                    bgcolor: "secondary.main",borderRadius: "14px", p: "2px",
                }}>
                    <Typography variant="body2" component='h6' sx={{
                        textAlign: "center",
                        textTransform: "uppercase",
                        color: "background.paper",
                        fontSize: "0.75rem",
                        fontWeight: 700,
                        py: "4px",
                    }}>
                        total xp
                    </Typography>
                    <Box sx={{
                        borderRadius: "14px",
                        bgcolor: "background.paper",
                        py: 2,
                        px: 1,
                        textAlign: "center",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontWeight: 700,
                        color: "secondary.main"
                    }}>
                        <ElectricBoltIcon /> {points}
                    </Box>
                </Paper>
            </Grid> 
            <Grid item xs={4} >
                <Paper sx={{
                    bgcolor: "secondary.color1",
                    borderRadius: "14px",
                    p: "2px",
                }}>
                    <Typography variant="body2" component='h6' sx={{
                        textAlign: "center",
                        textTransform: "uppercase",
                        color: "background.paper",
                        fontSize: "0.75rem",
                        fontWeight: 700,
                        py: "4px",
                    }}>
                        committed
                    </Typography>
                    <Box sx={{
                        borderRadius: "14px",
                        bgcolor: "background.paper",
                        py: 2,
                        px: 1,
                        textAlign: "center",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontWeight: 700,
                        color: "secondary.color1"
                    }}>
                        <AccessTimeRoundedIcon /> {`${timeElapsed}`}
                    </Box>
                </Paper>
            </Grid> 
            <Grid item xs={4} >
                <Paper sx={{
                    bgcolor: "primary.dark",
                    borderRadius: "14px",
                    p: "2px",
                }}>
                    <Typography variant="body2" component='h6' sx={{
                        textAlign: "center",
                        textTransform: "uppercase",
                        color: "background.paper",
                        fontSize: "0.75rem",
                        fontWeight: 700,
                        py: "4px",
                    }}>
                        score
                    </Typography>
                    <Box sx={{
                        borderRadius: "14px",
                        bgcolor: "background.paper",
                        py: 2,
                        px: 1,
                        textAlign: "center",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontWeight: 700,
                        color: "primary.dark"
                    }}>
                     <CrisisAlertRoundedIcon  /> {score}%
                    </Box>
                </Paper>
            </Grid>
        </Grid>

        <Button variant="contained" onClick={handleContinue} sx={{
            bgcolor: "color1.main",

            "&:hover": {
                bgcolor: "color1.dark"
            }
        }}>continue</Button>
    </Box>
  )
}

export default GameComplete