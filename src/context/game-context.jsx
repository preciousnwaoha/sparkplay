import React from "react"

export const GameContext = React.createContext({
    completed: null,
    pointsGotten: 0,
    totalPoints: 0,
    score: 0,

})


const GameContextProvider = ({children}) => {
    const [score, setScore] = React.useState(0)

    const calculateScore = () => {

    }
    
    const startTimer = () => {

    }


    return <GameContext.Provider value={{
        score: score,
    }}>
        {children}
    </GameContext.Provider>

}

export default GameContextProvider