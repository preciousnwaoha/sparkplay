import React from "react";
import Box from "@mui/material/Box";
import PaddedContainer from "../Layout/PaddedContainer";
import Typography from "@mui/material/Typography";

const GameHeader = ({children}) => {
  return (
    <Box
      sx={{
        borderBottom: "2px solid",
        borderColor: "grey.gray4",
      }}
    >
      <PaddedContainer>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            py: 1,
          }}
        >
            {children}
         
            
        </Box>
      </PaddedContainer>
    </Box>
  );
};

export default GameHeader;
