import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { generateArrows, setStartingField } from '../store/slices/gameSlice'
import Arrows from './Arrows'
import Lost from './Lost'
import Square from './Square'
import Win from './Win'

type Props = {
    startingField: number
}

export default function Game({startingField} : Props) {

    // 0 - not set, 1 - win, 2 - lost
    const [win, setWin] = useState<number>(0)
    const [winLostElement, setWinLostElement] = useState<JSX.Element>(<></>)

    const game = useAppSelector(state => state.game)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(setStartingField(startingField))
        dispatch(generateArrows(startingField))
    }, [dispatch, startingField])


    const renderedSquares = game.squares.map(square => {
        return <Square square={square} key={square.id} setWin={setWin} win={win}/>
    })

    if (!!win) {
        setTimeout(() => {
            win === 1 ? setWinLostElement(<Win/>) : setWinLostElement(<Lost/>)
        }, 1000)
    }

  return (
    <div className='game'>
        <div className='welcome'> Welcome to Labyrinth! </div>
        <div className='squares'>
            {renderedSquares}
        </div>
        {winLostElement}
        <Arrows/>
    </div>
  )
}
