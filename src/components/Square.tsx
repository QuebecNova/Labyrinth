import React, { SetStateAction } from 'react'
import { useAppDispatch } from '../hooks/redux'
import { setPlayerField } from '../store/slices/gameSlice'
import { ISquare } from '../types/ISquare'

type Props = {
    square: ISquare,
    setWin: React.Dispatch<SetStateAction<number>>
    win: number
}

export default function Square({square, setWin, win}: Props) {

  const dispatch = useAppDispatch()

  function choosenSquare() : void {
    dispatch(setPlayerField(square.id))

    const isChoosenRight = square.endHere
    
    if (isChoosenRight) {
      setWin(1)
    } else {
      setWin(2)
    }

  }

  return (
    <div className='square' onClick={choosenSquare}>
        {
        square.startingField && 
        <div className='start'>
            Start
        </div>
        }
        {
          square.endHere && !!win &&
          <div className={`end-square end-markups`}>
            <span>&#9989;</span>
          </div>
        }
        {
          square.playerHere && win === 2 &&
          <div className={`player-choosen-square end-markups`}>
            <span>&#10060;</span>
          </div>
        }
    </div>
  )
}