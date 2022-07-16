import { Difficulty } from './../../types/IGame';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import createSquares from '../../services/createSquares';
import createArrows from '../../services/createArrowsDirections';
    
const initialState = {
    started: false,
    arrowsNumber: 7,
    arrows: [''],
    playerChoosedField: -1,
    endField: -1,
    squares: createSquares()
}

export const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        setPlayerField(state, action: PayloadAction<number>) {
            state.squares[action.payload].playerHere = true
        },
        setEndField(state, action: PayloadAction<number>) {
            state.squares[action.payload].endHere = true
        },
        setStartingField(state, action: PayloadAction<number>) {
            state.squares[action.payload].startingField = true
        },
        setDifficulty(state, action: PayloadAction<Difficulty>) {
            switch (action.payload) {
                case Difficulty.Hard:
                    state.arrowsNumber = 20
                    break;
                case Difficulty.Medium:
                    state.arrowsNumber = 14
                    break;
                case Difficulty.Easy:
                    state.arrowsNumber = 7
                    break;
            }
        },
        generateArrows(state, action: PayloadAction<number>) {
            const result = createArrows(state.arrowsNumber, action.payload)
            state.arrows = result.arrows
            state.squares[result.endField].endHere = true
        },
        start(state) {
            state.started = true
        },
        restart(state) {
            state.started = false
            state.arrowsNumber = 7
            state.arrows = ['']
            state.playerChoosedField = -1
            state.endField = -1
            state.squares = createSquares()
        }
    }
})

export const { 
    setPlayerField,
    setEndField, 
    setStartingField, 
    generateArrows, 
    setDifficulty, 
    start,
    restart
} = gameSlice.actions

export default gameSlice.reducer