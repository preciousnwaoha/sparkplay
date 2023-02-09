import React from 'react';
import Image from "next/image";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const FeedItem = ({date, text, image, link, title }) => {
  return (
    <Paper sx={{
        p: 2,
    }}>
        <Box>

        </Box>
        <Typography>{date}</Typography>
        <Typography>{text}</Typography>
    </Paper>
  )
}

export default FeedItem