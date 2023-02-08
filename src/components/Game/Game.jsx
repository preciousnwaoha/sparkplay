import React from 'react'
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import GameOptions from './GameOptions';
import GameExitModal from './GameExitModal';
import GameAnswerPopup from './GameAnswerPopup';
import GameLoading from './GameLoading';
import GameComplete from './GameComplete';



const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 14,
  borderRadius: 8,
  width: "100%",
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 300 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 8,
    backgroundColor: theme.palette.mode === 'light' ? theme.palette.primary.dark : theme.palette.primary.light,
  },
}));




const Game = () => {
  const [gamesInLevel, setGamesInLevel] = React.useState(null);
  const [pointsPerGame, setPointsPerGame] = React.useState(0)
  const [playerPoints, setPlayerPoints] = React.useState(0);
  const [isCorrect, setIsCorrect] = React.useState(false);
  const [hasAnswered, setHasAnswered] = React.useState(false);
  const [openExitModal, setOpenExitModal] = React.useState(false);
  const [currentGame, setCurrentGame] = React.useState(null);
  const [loadingGame, setLoadingGame] = React.useState(true);
  const [finishedLevel, setFinishedLevel] = React.useState(false);


  const handleOpenExitModal = () => setOpenExitModal(true);
  const handleCloseExitModal = () => setOpenExitModal(false);
  const handleExitGame = () => {console.log("exit")}

  const handleAnswer = (_ans) => {
    console.log(_ans)

    if (_ans === currentGame.component) {
      setIsCorrect(true);
      setPlayerPoints(prevState => prevState + pointsPerGame)
    }
    setHasAnswered(true)
  }

  const handleNext = () => {
    setHasAnswered(false);
      setIsCorrect(false);

    if ((currentGame + 1) == gamesInLevel.length) {
      setFinishedLevel(true)
      return
    }
    setCurrentGame(prev => prev + 1)
  }


  React.useEffect(() => {
      if (loadingGame === true) {
        const DUMMY_GAMES_DATA = {
          pointsPerGame: 2,
          games: [
          {
            id: "1234",
            component: "resistor",
            image: "x",
            function: "To resist the flow of current",
            options: ["resistor", "inductor", "capacitor"]
          },
          {
            id: "1235",
            component: "diode",
            image: "x",
            function: "To resist the flow of current",
            options: ["diode", "resistor", "inductor", "capacitor"]
          },
        ]
      }

        setGamesInLevel(DUMMY_GAMES_DATA.games)
        setPointsPerGame(DUMMY_GAMES_DATA.pointsPerGame)
        setCurrentGame(0)
        
        setLoadingGame(false)
      }
  }, [loadingGame])

 
  if (!gamesInLevel) {
    return <GameLoading />
  }
 
  const progressBarValue = (playerPoints / (gamesInLevel.length * pointsPerGame)) * 100

  console.log({progressBarValue})


  return (
    <Box sx={{
      // border: "1px solid red",
      height: "100vh",
      // display: "flex",
      // flexDirection: "column",
      // justifyContent: "space-between",
    }}>
      <Box sx={{
        // border: 1,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        py: 2,
      }}>
        <ClearRoundedIcon onClick={handleOpenExitModal} sx={{
          fontSize: "32px",
          // border: 1,
          mr: 1,
          color: "#777777",
          cursor: "pointer",
        }}/>
        <BorderLinearProgress variant="determinate" value={progressBarValue} />
        <Box sx={{
          display: "flex",
          alignItems: "center",
          ml: 1,
          // border: 1,
        }}>
          <ElectricBoltIcon sx={{
            fontSize: "32px",
            color: "secondary.main",

          }}/>
          <Typography variant="body1" sx={{
            // fontSize: "32px",
            fontWeight: 700,
            color: "secondary.main",
            
          }}>2</Typography>
        </Box>
      </Box>
       <GameExitModal open={openExitModal} onClose={handleCloseExitModal} onExit={handleExitGame} />
       <Typography variant="h3" component="h2">
        What does this represent?
       </Typography>

       
          <Box sx={{
            textAlign: "center",
            py: 2,
          }}>
            <Box sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "auto",
                width: "200px",
                height: "200px",
                borderRadius: "2rem",
                bgcolor: "secondary.color1",
                borderBottom: "3px solid #168bc1",
              }}>
                {gamesInLevel[currentGame].image}
              </Box>
          </Box>
            
            <GameOptions options={gamesInLevel[currentGame].options} onAnswer={handleAnswer} hasAnswered={hasAnswered} />
            
           {hasAnswered && <GameAnswerPopup isCorrect={isCorrect} onContinue={handleNext} />}
            
            
    </Box>
  )
}

export default Game