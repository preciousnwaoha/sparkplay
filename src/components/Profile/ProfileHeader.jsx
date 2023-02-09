import React from "react";
import Box from "@mui/material/Box";
import PaddedContainer from "../Layout/PaddedContainer";
import Typography from "@mui/material/Typography";

const ProfileHeader = () => {
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
            <Typography sx={{
                flexGrow: 3,
                textAlign: "center",
                fontWeight: 700,
                color: "grey.gray3",
            }} variant="body1" component="h1">Profile</Typography>
         
            
        </Box>
      </PaddedContainer>
    </Box>
  );
};

export default ProfileHeader;
