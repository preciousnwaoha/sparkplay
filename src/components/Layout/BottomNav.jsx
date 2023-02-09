import React from "react";
import Link from "next/link";
import Box from "@mui/material/Box";
import PaddedContainer from "../Layout/PaddedContainer";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import Face4OutlinedIcon from "@mui/icons-material/Face4Outlined";
import Face4RoundedIcon from "@mui/icons-material/Face4Rounded";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import ShieldRoundedIcon from "@mui/icons-material/ShieldRounded";
import CampaignOutlinedIcon from '@mui/icons-material/CampaignOutlined';
import CampaignRoundedIcon from '@mui/icons-material/CampaignRounded';
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import EmojiEventsRoundedIcon from "@mui/icons-material/EmojiEventsRounded";

const BottomNav = () => {
  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        borderTop: "2px solid",
        borderColor: "grey.gray4",
        py: 2,
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
          <Link href="/">
            <HomeOutlinedIcon
              sx={{
                mr: 0.5,
                color: "grey.gray3",
                fontWeight: 700,
                fontSize: "1.75rem",
                cursor: "pointer",

                "&:hover": {
                  color: "secondary.dark",
                },
              }}
            />
          </Link>

          <Link href="/profile">
            <Face4OutlinedIcon
              sx={{
                mr: 0.5,
                color: "grey.gray3",
                fontWeight: 700,
                fontSize: "1.75rem",
                cursor: "pointer",

                "&:hover": {
                  color: "secondary.color3",
                },
              }}
            />
          </Link>

          {/* <Link href="/challenges">
            <ShieldOutlinedIcon
              sx={{
                mr: 0.5,
                color: "grey.gray3",
                fontWeight: 700,
                fontSize: "1.75rem",
                cursor: "pointer",

                "&:hover": {
                  color: "secondary.main",
                },
              }}
            />
          </Link> */}

              {/* <Link href="/achievements">
              <EmojiEventsOutlinedIcon
            sx={{
              mr: 0.5,
              color: "grey.gray3",
              fontWeight: 700,
              fontSize: "1.75rem",
              cursor: "pointer",

              "&:hover": {
                color: "secondary.color2",
              },
            }}
          />
              </Link> */}

              <Link href="/feed">
            <CampaignOutlinedIcon
              sx={{
                mr: 0.5,
                color: "grey.gray3",
                fontWeight: 700,
                fontSize: "1.75rem",
                cursor: "pointer",

                "&:hover": {
                  color: "secondary.main",
                },
              }}
            />
          </Link>
          
        </Box>
      </PaddedContainer>
    </Box>
  );
};

export default BottomNav;
