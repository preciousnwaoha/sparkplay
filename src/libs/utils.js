  // unit => game => level
const DUMMY_GAMES = {
  "123": {
      name: "Cicuitry 1",
      color: "color3",
      image: "x",
      subLevels: 3
  },
  "124": {
      name: "Cicuitry 2",
      color: "secondary",
      image: "x",
      subLevels: 3
  },
  "125": {
      name: "Cicuitry 3",
      color: "color2",
      image: "x",
      subLevels: 3
  }
}

const DUMMY_GAME_DATA = {
  pointsPerGame: 2,
  games: [
  {
    id: "1234",
    component: "resistor",
    image: "x",
    function: "To resist the flow of current",
    options: ["resistor", "inductor", "capacitor"],
    answer: 0,
    question: "What does this represent?"
  },
  {
    id: "1235",
    component: "diode",
    image: "x",
    function: "To resist the flow of current",
    options: ["diode", "resistor", "inductor", "capacitor"],
    answer: 0,
    question: "What does this represent?",
  },
  ]
}




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



export const getLevelData = (_game, _level) => {
  // console.log({_game}, {_level})
  return DUMMY_GAME_DATA
}

export const getLevelsQuestions = async () => {
  const response  = await fetch("/levels-questions-data", {
    method: "GET"
  }).then(res => res.json())
  .then(dataInJSON => dataInJSON)

  return response
}



/**
 * FEED
 */

let DUMMY_FEEDS = {
  "123": {
    title: "Delevoper",
    text: "recious Nwoaha",
    date: "Day 01",
    image: "x",
    link: {
      text: "Github",
      url: "https://github.com/preciousnwaoha",
    },
  }
}

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
