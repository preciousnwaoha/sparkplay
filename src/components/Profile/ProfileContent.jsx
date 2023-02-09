import React from "react";
import Box from "@mui/material/Box";
import PaddedContainer from "../Layout/PaddedContainer";
import Typography from "@mui/material/Typography";

const ProfileContent = () => {
  return (
    <Box
      sx={{
        borderBottom: "2px solid",
        borderColor: "grey.gray4",
        py: 3
      }}
    >
      <PaddedContainer>
            <Typography sx={{
                flexGrow: 3,
                fontWeight: 700,
                color: "grey.gray1",
            }} variant="body1" component="h1">Profiles <br /> are comming soon!</Typography>
         
      </PaddedContainer>
    </Box>
  );
};

export default ProfileContent;
