/* eslint-disable @next/next/no-img-element */
import React from  'react';
import Link from "next/link"
// import VizSensor from 'react-visibility-sensor';
import Head from 'next/head'
import PaddedContainer from '../src/components/Layout/PaddedContainer'
import Button from "@mui/material/Button"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"

const Home = () => {



  return (
    

      <div>

        <Head>
          <title>Home | Sparkplay</title>
          <meta name="description" content="Learn Complex Electrical & Electronics Engineeering Concepts by playing fun trivia games" />
        </Head>


        
        <Box sx={{
          bgcolor: "primary.main",

          width: "100%",
          height: "100vh",
           display: "flex",
           flexDirection: "column",
           alignItems: "center",
           justifyContent: "center",

        }}>
        <PaddedContainer >
          <Box sx={{
          
        }}>
          <Typography variant="h1" sx={{
            color: "primary.contrastText",
            Weight: 800,
            fontSize: "1.25rem",
          }}>sparkplay</Typography>
          
          <Grid container item xs={12} sx={{
            display: "flex",
            textAlign: "center",
            justifyContent: "center"
          }}>
            <Link href="/game" style={{
              display: "inline-block",
              width : "100%",
              "& a": {
                textDecoration: "none"
              }
            }}>
            <Button variant="contained" sx={{
          width: "80%",
          maxWidth: "400px",
          fontSize: "1rem",
          bgcolor: "background.paper",
            color: "primary.dark",
            
            my: 2,
            border: "3px solid",
            borderColor: "primary.dark",

          "&:hover": {
            bgcolor: "background.paper",
            color: "primary.dark",
            border: "3px solid",
            borderColor: "primary.dark",
            outline: "none",
            boxShadow: "none",
          }
        }}>
          Enter Game
        </Button>
            </Link>
         </Grid>
          </Box>
          
         
         
          
        </PaddedContainer>
        </Box>

        

      </div>
  )
}





export default Home