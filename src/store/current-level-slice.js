import { createSlice } from "@reduxjs/toolkit";


const currentLevelSlice = createSlice( {
    name: "currentLevel",
    initialState: {
        
        startTime: 0,
        averageTime: 0,

        points: 0,
        pointsPerGame: 0,
        numberOfGamesInLevel : 0,

        playing: false,
        currentGame: 0,

        timeElapsed: 0,
        score: 0,
    },
    reducers: {
        update(state) {
            state.points += state.pointsPerGame
        },
        initalSetup(state, action) {
            
            state.pointsPerGame = action.payload.pointsPerGame
            state.numberOfGamesInLevel = action.payload.numberOfGamesInLevel
            state.startTime = Date.now()
            state.averageTime = Date.now() + action.payload.averageTime
        },
        getCalculateValues(state) {
            let endTime = Date.now()
            state.timeElapsed = endTime - state.startTime 

            let timeScore = (endTime - state.startTime) / state.averageTime * 100
            let pointsScore = state.points / (state.pointsPerGame * state.numberOfGamesInLevel) * 100

            state.score = (timeScore + pointsScore) / 200 * 100
        },

        togglePlaying (state) {
            state.playing = !state.playing
        },
        nextGame(state) {
            state.currentGame = state.currentGame + 1
        },
        reset (state) {
            state.startTime = 0
            state.averageTime = 0
            state.endTime = 0
            
            state.points = 0
            state.pointsPerGame = 0
            state.numberOfGamesInLevel  = 0
    
            state.playing = false
            state.currentGame = 0
    
            state.timeElapsed = 0
            state.score = 0
        }
        
    }
})

export const currentLevelActions = currentLevelSlice.actions


export default currentLevelSlice;