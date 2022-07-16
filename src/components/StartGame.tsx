import React from 'react'
import { useAppDispatch } from '../hooks/redux'
import { setDifficulty, start } from '../store/slices/gameSlice'
import { Difficulty } from '../types/IGame'

export default function StartGame() {

    const dispatch = useAppDispatch()

    function changeDifficulty(e : React.ChangeEvent<HTMLSelectElement>) : void {
        switch (e.target.value) {
            case 'Hard':
                dispatch(setDifficulty(Difficulty.Hard))
                break;
            case 'Medium':
                dispatch(setDifficulty(Difficulty.Medium))
                break;
            case 'Easy':
                dispatch(setDifficulty(Difficulty.Easy))
                break;
        }
    }

    function startGame() : void {  
        dispatch(start())
    }

  return (
    <div className='starting-settings'>
        <p>You need to move through labyrinth using arrows</p>
        <p>Choose difficulty:</p>
        <select 
            name="difficulty" 
            className='difficulty' 
            onChange={changeDifficulty}
        >
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
        </select>
        <button onClick={startGame}>StartGame</button>
    </div>
  )
}
