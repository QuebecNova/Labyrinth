import React, { useEffect, useState } from 'react'
import { useAppSelector } from '../hooks/redux'
import { v4 as uuid } from 'uuid';
import Arrow from './Arrow';

export default function Arrows() {

  const game = useAppSelector(state => state.game)

  const [arrowsElements, setArrowsElements] = useState<JSX.Element[]>([])

  useEffect(() => {
    let count = 0

    const interval = setInterval(() => {
      if (count >= game.arrowsNumber) return

      const arrowElement = <Arrow direction={game.arrows[count]} key={uuid()}/>
      
      setArrowsElements(element => [...element, arrowElement])

      count++
    }, 8000 / game.arrowsNumber)
  
    return () => {
      return clearInterval(interval)
    }
  }, [game.arrows, game.arrowsNumber])

  return (
    <div className='arrows'>
      {arrowsElements}
    </div>
  )
}
