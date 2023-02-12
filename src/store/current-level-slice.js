import { createSlice } from "@reduxjs/toolkit";


const currentLevelSlice = createSlice( {
    name: "currentLevel",
    initialState: {
        
        startTime: 0,
        averageTime: 0,
        endTime: 0,
        
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
            state.endTime = Date.now()
        },
        initalSetup(state, action) {
            
            state.pointsPerGame = action.payload.pointsPerGame
            state.numberOfGamesInLevel = action.payload.numberOfGamesInLevel
            state.startTime = Date.now()
            state.averageTime = Date.now() + action.payload.averageTime
        },
        getCalculateValues(state) {
            state.timeElapsed = state.endTime - state.startTime 

            let timeScore = (state.endTime - state.startTime) / state.averageTime * 100
            let pointsScore = state.points / (state.pointsPerGame * state.numberOfGamesInLevel) * 100

            state.score = (timeScore + pointsScore) / 200 * 100
        },

        togglePlaying (state) {
            state.playing = !state.playing
        },
        nextGame(state) {
            state.currentGame = state.currentGame + 1
        }
        
    }
})

export const currentLevelActions = currentLevelSlice.actions


export default currentLevelSlice;