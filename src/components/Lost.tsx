import React from 'react'
import { useAppDispatch } from '../hooks/redux'
import { restart } from '../store/slices/gameSlice'

export default function Lost() {

    const dispatch = useAppDispatch()

  return (
    <div className='end lost'>
        <p>You Wrong!</p>
        <button onClick={() => dispatch(restart())}>Restart</button>
    </div>
  )
}
