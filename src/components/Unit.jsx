import React from 'react'
import Box from "@mui/material/Box"
import Paper from "@mui/material/Paper"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import GameChoice from './Game/GameChoice'



const Unit = ({gameData = []}) => {

    // console.log(gameData)


    if (!gameData) {
        return <Box>
            Loading Data
        </Box>
    }

    if (gameData.lenght === 0) {
        return <Box>
            No Data
            </Box>
    }

  return (
    
    <Box sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        // border: 1,
        px: 3,
        py: 2,
        textAlign: "center",
    }}>
        
        <Grid container spacing={2} sx={{
            // border: "1px solid blue",
            // justifyContent: "center",
        }}>
            {gameData.map((game, index) => {
                return <Grid item key={game.id} xs={([1, 2, 4, 5].includes(index) ? 6 : 12)} sx={{
                    // border: "1px solid red",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                }}>
                    <GameChoice name={game.name} id={game.id} image={game.image} color={game.color}/>
                </Grid>
            })}
        </Grid>
    </Box>
  )
}

export default Unit