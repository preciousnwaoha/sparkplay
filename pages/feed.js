/* eslint-disable @next/next/no-img-element */
import React from "react";
// import VizSensor from 'react-visibility-sensor';
import Head from "next/head";
import PaddedContainer from "../src/components/Layout/PaddedContainer";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import BottomNav from "../src/components/Layout/BottomNav";
import GameHeader from "../src/components/Layout/GameHeader";
import { getAllFeeds } from "../src/libs/utils";
import FeedItem from "../src/components/Feed/FeedItem";

export const getStaticProps = () => {
  const feeds = getAllFeeds();

  // console.log("feeds", feeds);

  return {
    props: {
      feeds,
    },
  };
};

const Feed = ({ feeds }) => {
  return (
    <div>
      <Head>
      <title>Feed | Sparkplay</title>
          <meta name="description" content="See information on news, updates and other stuff happening with Sparkplay" />
      </Head>

      <GameHeader>
        <Typography
          sx={{
            flexGrow: 3,
            textAlign: "center",
            fontWeight: 700,
            color: "grey.gray3",
          }}
          variant="body1"
          component="h1"
        >
          Feed
        </Typography>
      </GameHeader>

      <PaddedContainer >
        {feeds.map((feed) => {
          return (
            <FeedItem
              key={feed.id}
              date={feed.date}
              text={feed.text}
              link={feed.link}
              image={feed.image}
              title={feed.title}
            />
          );
        })}

      </PaddedContainer>

      <BottomNav />
    </div>
  );
};

export default Feed;
