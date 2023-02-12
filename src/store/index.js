import {configureStore } from "@reduxjs/toolkit"
import uiSlice from "./ui-slice"
import sfxSlice from "./sfx-slice";
import currentLevelSlice from "./current-level-slice";

const store = configureStore({
    reducer: { 
        ui: uiSlice.reducer,
        sfx: sfxSlice.reducer,
        currentLevel: currentLevelSlice.reducer,
    }
})


export default store;