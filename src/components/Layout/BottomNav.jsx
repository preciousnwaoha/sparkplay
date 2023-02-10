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
import { useRouter } from "next/router";

const BottomNav = () => {

  const router = useRouter()

  // console.log(router.pathname)
  
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
        bgcolor: "background.paper"
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
            {(router.pathname === "/") ? <HomeRoundedIcon
              sx={{
                mr: 0.5,
                color: "secondary.dark",
                fontWeight: 200,
                fontSize: "1.75rem",
                cursor: "pointer",

                "&:hover": {
                  color: "secondary.dark",
                },
              }}
            /> :  <HomeOutlinedIcon
              sx={{
                mr: 0.5,
                color: "grey.gray3",
                fontWeight: 200,
                fontSize: "1.75rem",
                cursor: "pointer",

                "&:hover": {
                  color: "secondary.dark",
                },
              }}
            />}
          </Link>

          <Link href="/profile">
           {( ["/profile", "/profile/settings"].includes(router.pathname)) ? <Face4RoundedIcon
              sx={{
                mr: 0.5,
                color: "secondary.color3",
                fontWeight: 200,
                fontSize: "1.75rem",
                cursor: "pointer",

                "&:hover": {
                  color: "secondary.color3",
                },
              }}
            /> : <Face4OutlinedIcon
              sx={{
                mr: 0.5,
                color: "grey.gray3",
                fontWeight: 200,
                fontSize: "1.75rem",
                cursor: "pointer",

                "&:hover": {
                  color: "secondary.color3",
                },
              }}
            />}
          </Link>

          {/* <Link href="/challenges">
            {(router.pathname === "/challenges") ? <ShieldRoundedIcon
              sx={{
                mr: 0.5,
                color: "secondary.main",
                fontWeight: 200,
                fontSize: "1.75rem",
                cursor: "pointer",

                "&:hover": {
                  color: "secondary.main",
                },
              }}
            /> : <ShieldOutlinedIcon
              sx={{
                mr: 0.5,
                color: "grey.gray3",
                fontWeight: 200,
                fontSize: "1.75rem",
                cursor: "pointer",

                "&:hover": {
                  color: "secondary.main",
                },
              }}
            />}
          </Link> */}

              {/* <Link href="/achievements">
             {(router.pathname === "/achievements") ? <EmojiEventsRoundedIcon
            sx={{
              mr: 0.5,
              color:  "secondary.color2",
              fontWeight: 200,
              fontSize: "1.75rem",
              cursor: "pointer",

              "&:hover": {
                color: "secondary.color2",
              },
            }} /> : <EmojiEventsOutlinedIcon
            sx={{
              mr: 0.5,
              color: "grey.gray3",
              fontWeight: 200,
              fontSize: "1.75rem",
              cursor: "pointer",

              "&:hover": {
                color: "secondary.color2",
              },
            }}
          />}
              </Link> */}

              <Link href="/feed">
           { (router.pathname === "/feed") ? <CampaignRoundedIcon
              sx={{
                mr: 0.5,
                color: "color2.main",
                fontWeight: 200,
                fontSize: "1.75rem",
                cursor: "pointer",

                "&:hover": {
                  color: "color3.main",
                },
              }}
            /> : <CampaignOutlinedIcon
              sx={{
                mr: 0.5,
                color: "grey.gray3",
                fontWeight: 200,
                fontSize: "1.75rem",
                cursor: "pointer",

                "&:hover": {
                  color: "secondary.main",
                },
              }}
            />}
          </Link>
          
        </Box>
      </PaddedContainer>
    </Box>
  );
};

export default BottomNav;
