import React from "react";
import Image from "next/image"
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import GameOptions from "./GameOptions";
import GameExitModal from "./GameExitModal";
import GameAnswerPopup from "./GameAnswerPopup";
import GameLoading from "./GameLoading";
import GameComplete from "./GameComplete";
import { useRouter } from "next/router";
import Pic1 from "../../../public/assets/imgs/circuit-components/wire.png"

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 14,
  borderRadius: 8,
  width: "100%",
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 300 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 8,
    backgroundColor:
      theme.palette.mode === "light"
        ? theme.palette.primary.dark
        : theme.palette.primary.light,
  },
}));

const Game = ({ games = null, pointsPerGame = 0, gameId, gameLevel }) => {
  const router = useRouter();
  const [playerPoints, setPlayerPoints] = React.useState(0);
  const [isCorrect, setIsCorrect] = React.useState(false);
  const [hasAnswered, setHasAnswered] = React.useState(false);
  const [openExitModal, setOpenExitModal] = React.useState(false);
  const [currentGame, setCurrentGame] = React.useState(0);
  const [failedPlays, setFailedPlays] = React.useState([]);

  const handleOpenExitModal = () => setOpenExitModal(true);
  const handleCloseExitModal = () => setOpenExitModal(false);
  const handleExitGame = () => {
    console.log("exit");
  };

  const handleAnswer = (_ans) => {
    if (_ans === games[currentGame].component) {
      // console.log({_ans})
      setIsCorrect(true);
      setPlayerPoints((prevState) => prevState + pointsPerGame);
    } else {
      setIsCorrect(false);
      setFailedPlays((prevState) => {
        if (!prevState.includes(currentGame)) {
          return [...prevState, currentGame];
        }
      });
    }
    setHasAnswered(true);
  };

  const handleNext = () => {
    setHasAnswered(false);
    setIsCorrect(false);

    if (currentGame + 1 === games.length) {
      if (failedPlays.length !== 0) {
        // setCurrentGame(games[failedPlays[]])
      }
      router.push(`/game/${gameId}/${gameLevel}/complete`);
      return;
    }
    setCurrentGame((prev) => prev + 1);
  };

  if (games === null || games === undefined) {
    return <GameLoading />;
  }

  if (games.length === 0) {
    return <Box>No Game</Box>;
  }

  const progressBarValue =
    (playerPoints / (games.length * pointsPerGame)) * 100;

  // console.log(games)

  return (
    <Box
      sx={{
        // border: "1px solid red",
        height: "100vh",
        // display: "flex",
        // flexDirection: "column",
        // justifyContent: "space-between",
      }}
    >
      <Box
        sx={{
          // border: 1,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          py: 2,
        }}
      >
        <ClearRoundedIcon
          onClick={handleOpenExitModal}
          sx={{
            fontSize: "32px",
            // border: 1,
            mr: 1,
            color: "#777777",
            cursor: "pointer",
          }}
        />
        <BorderLinearProgress variant="determinate" value={progressBarValue} />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            ml: 1,
            // border: 1,
          }}
        >
          <ElectricBoltIcon
            sx={{
              fontSize: "32px",
              color: "secondary.main",
            }}
          />
          <Typography
            variant="body1"
            sx={{
              // fontSize: "32px",
              fontWeight: 700,
              color: "secondary.main",
            }}
          >
            {playerPoints}
          </Typography>
        </Box>
      </Box>
      <GameExitModal
        open={openExitModal}
        onClose={handleCloseExitModal}
        onExit={handleExitGame}
      />
      <Typography variant="h3" component="h2">
        What does this represent?
      </Typography>

      <Box
        sx={{
          textAlign: "center",
          py: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "auto",
            width: "200px",
            height: "200px",
            borderRadius: "2rem",
            bgcolor: "secondary.color1",
            borderBottom: "3px solid #168bc1",
            position: "relative",

            "& img": {
              objectFit: "contain",
            },
          }}
        >
          <Image
            src={`/assets/imgs/circuit-components/${games[currentGame].image}.png`}
            alt={games[currentGame].component}
            fill
          />
        </Box>
      </Box>

      <GameOptions
        options={games[currentGame].options}
        onAnswer={handleAnswer}
        hasAnswered={hasAnswered}
      />

      {hasAnswered && (
        <GameAnswerPopup isCorrect={isCorrect} onContinue={handleNext} />
      )}
    </Box>
  );
};

export default Game;
