import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
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
import { sfxActions } from "../../store/sfx-slice";
import { currentLevelActions } from "../../store/current-level-slice";
import { getLevelGameOptions } from "../../libs/utils";

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
  const dispatch = useDispatch()
  const currentLevel = useSelector(state => state.currentLevel)

  const { points: playerPoints, currentGame } = currentLevel;

  const router = useRouter();
  const [isCorrect, setIsCorrect] = React.useState(false);
  const [hasAnswered, setHasAnswered] = React.useState(false);
  const [openExitModal, setOpenExitModal] = React.useState(false);
  const [failedPlays, setFailedPlays] = React.useState([]);
  const [missedPoints, setMissedPoints] = React.useState(0);

  const handleOpenExitModal = () => setOpenExitModal(true);
  const handleCloseExitModal = () => setOpenExitModal(false);
  const handleExitGame = () => {
    dispatch(currentLevelActions.reset())
    router.push("/game")

  };

  const handleAnswer = (_ans) => {
  
    if (_ans.toLowerCase() === games[currentGame].component.toLowerCase() ) {
      // console.log({_ans})
      dispatch(sfxActions.playSfx("answer-correct"))
      setIsCorrect(true);
      dispatch(currentLevelActions.update() )
      

    } else {
      dispatch(sfxActions.playSfx("answer-wrong"))
      setIsCorrect(false);
      setMissedPoints(prev => prev + 1)
      setFailedPlays((prevState) => {
        if (!prevState.includes(currentGame)) {
          return [...prevState, currentGame];
        }
      });
    }
    setHasAnswered(true);
  };

  const handleNext = () => {
    

    if (currentGame + 1 === games.length) {
      if (failedPlays.length !== 0) {
        // setCurrentGame(games[failedPlays[]])
      }

      dispatch(currentLevelActions.getCalculateValues())
      router.push(`/game/${gameId}/${gameLevel}/complete`);
      return;
    }
    setHasAnswered(false);
    setIsCorrect(false);
    dispatch(currentLevelActions.nextGame())
  };

  useEffect(() => {
    if (games === null || games === undefined) {
      return 
    }
  
    if (games.length === 0) {
      return ;
    }
    dispatch(currentLevelActions.togglePlaying())
    dispatch(currentLevelActions.initalSetup({pointsPerGame, numberOfGamesInLevel: games.length, averageTime: (100000)}))


  }, [games, pointsPerGame, dispatch])

  if (games === null || games === undefined) {
    return <GameLoading />;
  }

  if (games.length === 0) {
    return <Box>No Game</Box>;

  }

  
  // console.log(games[currentGame], currentGame)
  // console.log(games)
  

  const progressBarValue =
    ((playerPoints + (missedPoints * pointsPerGame) )/ (games.length * pointsPerGame)) * 100;

  const gameOptions = getLevelGameOptions(gameId, gameLevel, games[currentGame].component)

  console.log(games[currentGame], currentGame, games.length)

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
            alt={games[currentGame].component.toLowerCase()}
            fill
          />
        </Box>
      </Box>

      <GameOptions
        options={gameOptions}
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
