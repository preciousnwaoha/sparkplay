
import DevPic from "../../public/assets/imgs/dev-1.jpg"
import WallPic from "../../public/assets/imgs/wall2.png"
import AbsPic from "../../public/assets/imgs/abs.jpg"


import { DUMMY_FEEDS, DUMMY_GAMES, DUMMY_GAME_DATA } from "./data"


/**
 * GAME
 */

// unit => game => 

export const getGameData = () => {
  // const response  = await fetch("levels-data.json", {
  //   method: "GET"
  // }).then(res => res.json())
  // .then(dataInJSON => dataInJSON)

  const DUMMY_GAMESFomatted = Object.keys(DUMMY_GAMES).map(id => {
    return {
      ...DUMMY_GAMES[id],
      id: id
    }
  })

  return DUMMY_GAMESFomatted
}

export const getGameByID = (_id) => {
  return DUMMY_GAMES[_id]
}

export const getAllLevelsPaths = () => {
  let allLevelsPaths = []
  Object.keys(DUMMY_GAMES).forEach(id => {
    for (let i = 1; i <= DUMMY_GAMES[id].subLevels; i++) {
        allLevelsPaths.push({ 
          id: id,
          level: `${i}`
        })
    }
  })
  const listOflevelsParams = allLevelsPaths.map((level) => {
    return {
      params: level,
    };
  });

  console.log(listOflevelsParams)

  return listOflevelsParams
}



export const getLevelGamesData = (_game, _level) => {
  // console.log({_game}, {_level})
  return DUMMY_GAME_DATA[`unit-1`][`game-${_game}`][`level-${_level}`]
}

export const getLevelData = (_game) => {
  return DUMMY_GAMES[_game]
}

export const getLevelsQuestions = async () => {
  const response  = await fetch("/levels-questions-data", {
    method: "GET"
  }).then(res => res.json())
  .then(dataInJSON => dataInJSON)

  return response
}


export const getLevelGameOptions = (_game, _level, _answer) => {

  const numberOfOptions = Math.ceil((Math.random() * 2))

  // console.log({_game, _level})
  

  const wrongAnswers = shuffle(DUMMY_GAME_DATA[`unit-1`][`game-${_game}`][`level-${_level}`].answerOptions).filter(_ans => _ans !== _answer)

  const answerSArray =  shuffle([_answer, ...wrongAnswers.slice(0, 2 + numberOfOptions)])

  return answerSArray
}


/**
 * FEED
 */



export const getFeedPaths = () => {
  return
}

export const getAllFeeds = () => {

  const DUMMY_FEEDSFomatted = Object.keys(DUMMY_FEEDS).map(id => {
    return {
      ...DUMMY_FEEDS[id],
      id: id
    }
  })

  return DUMMY_FEEDSFomatted
}


// helpers

export function shuffle (array) {
  let newArr = [...array]
  let currentIndex = newArr.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [newArr[currentIndex], newArr[randomIndex]] = [
      newArr[randomIndex], newArr[currentIndex]];
  }

  return newArr
}


export function formatTime(_stamp) {
  var hours = Math.floor(_stamp / 60 / 60)

  var minutes = Math.floor(_stamp / 60) - (hours * 60)
  var seconds = Math.floor(_stamp % 60)

  var formatted = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`

  return formatted

}