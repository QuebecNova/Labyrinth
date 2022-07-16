import React from 'react'
import { useAppDispatch } from '../hooks/redux'
import { restart } from '../store/slices/gameSlice'

export default function Win() {

    const dispatch = useAppDispatch()

    function restartGame() : void {
        dispatch(restart())
    }

  return (
    <div className='end win'>
        <p>You Right!</p>
        <button onClick={restartGame}>Restart</button>
    </div>
  )
}
