import { createSlice } from "@reduxjs/toolkit";
import UIfx from 'uifx'; 
import count1 from '../../public/assets/sfx/count-1.mp3';
import decide from '../../public/assets/sfx/decide.mp3';
import fail1 from '../../public/assets/sfx/fail-1.mp3';
import stickBreak1 from '../../public/assets/sfx/stick-break.mp3';
import interface1 from '../../public/assets/sfx/interface-1.mp3';
import interface2 from '../../public/assets/sfx/interface-2.mp3';
import win1 from '../../public/assets/sfx/win-1.mp3';
import win2 from '../../public/assets/sfx/win-2.mp3';
import success1 from '../../public/assets/sfx/success-1.mp3';
import success2 from '../../public/assets/sfx/success-2.mp3';
import success3 from '../../public/assets/sfx/success-3.mp3';



const sfxSlice = createSlice( {
    name: "sfx",
    initialState: {
        volume: 0.5,
        audio: "",
    },
    reducers: {
        changeVolume(state, action) {
                state.volume = action.volume / 100
        },
        playSfx(state, action) {
            let tickAudio;
            let actionType = action.payload
            // console.log({actionType})
            switch(actionType) {
                case "game-choice-tap":
                    tickAudio = interface1;
                    break;
                case "answer-correct":
                    tickAudio = success1;
                    break;
                case "answer-wrong":
                    console.log("red")
                    tickAudio = fail1;
                    break;
                case "game-complete":
                    tickAudio = win1;
                    break;
                default:
                    tickAudio = interface1
                    break;
            }

            // console.log({documentType: typeof document, windowType: typeof window})

            if (typeof window === "undefined") {
                return
            }

            if (typeof document === "undefined") {
                return
            }

            // console.log("tick it")
            
            const tick = new UIfx(tickAudio, {
                volume: state.volume, // number between 0.0 ~ 1.0
                throttleMs: 1,
              });
            // console.log(tick)
            tick.setVolume(state.volume).play()
            
        }
    }
})


export const sfxActions = sfxSlice.actions


export default sfxSlice;