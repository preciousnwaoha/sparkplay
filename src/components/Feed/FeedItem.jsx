import React from 'react';
import Image from "next/image";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const FeedItem = ({date, text, image, link, title }) => {
  return (
    <Paper variant="outlined" elevation={0} sx={{
        overflow: "hidden",
        borderRadius: 2,
        border: "2px solid",
        borderColor: "grey.gray4",
        my: 2,
    }}>
        <Box sx={{
          width: "100%",
          height: "100px",
          position: "relative",

          "& img": {
            objectFit: "cover"
          }
        }}>
          <Image src={image} alt={title} fill />
        </Box>

        <Box sx={{
           p: 1.5,
        }}>
        <Typography variant="body1" sx={{
          color: "grey.gray3",
          fontWeight: 500,
          fontSize: "0.85rem",
        }}>{date}</Typography>
        {title && <Typography variant="body1" component="h4" sx={{
          color: "grey.gray1",
          fontWeight: 700,
          fontSize: "1.125rem",
        }}>{title}</Typography>}
        <Typography variant="body1" sx={{
          fontWeight: 600,
          color: "grey.gray2",
        }}>{text}</Typography>
        {(link.text && link.url) && <a href={link.url} target='_blank' rel="noreferrer" style={{
          
          textDecoration: "none",
        }}>
        <Typography variant="body1" sx={{
          fontWeight: 600,
          color: "color1.main",
        }}>{link.text}</Typography>
        </a>}
        </Box>
        
        
        
    </Paper>
  )
}

export default FeedItem