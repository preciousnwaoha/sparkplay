import React from "react";
import Box from "@mui/material/Box";
import PaddedContainer from "../Layout/PaddedContainer";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import DiamondRoundedIcon from "@mui/icons-material/DiamondRounded";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";

const TopBar = () => {
  return (
    <Box
      sx={{
        borderBottom: "2px solid",
        borderColor: "grey.A200",
      }}
    >
      <PaddedContainer>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            py: 1,
          }}
        >
          <Box sx={{
             display: "flex",
            alignItems: "center",
            color: "secondary.color1",
            fontWeight: 700,
          }}>
            <DiamondRoundedIcon sx={{
                mr: 0.5,
            }} /> 459
          </Box>

          <Box sx={{
             display: "flex",
            alignItems: "center",
            color: "secondary.main",
            fontWeight: 700,
          }}>
            <LocalFireDepartmentIcon sx={{
                mr: 0.5,
            }} /> 1
          </Box>

          <Box sx={{
             display: "flex",
            alignItems: "center",
            color: "secondary.color2",
            fontWeight: 700,
          }}>
            <FavoriteRoundedIcon sx={{
                mr: 0.5,
            }} /> 5
          </Box>
        </Box>
      </PaddedContainer>
    </Box>
  );
};

export default TopBar;
