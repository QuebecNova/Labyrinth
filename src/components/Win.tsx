import React from 'react'
import { useAppDispatch } from '../hooks/redux'
import { restart } from '../store/slices/gameSlice'

export default function Win() {

    const dispatch = useAppDispatch()

  return (
    <div className='end win'>
        <p>You Right!</p>
        <button onClick={() => dispatch(restart())}>Restart</button>
    </div>
  )
}
