import React from 'react'

type Props = {
  direction: string;
}

export default function Arrow({direction}: Props) {

  return (
    <div 
    className={`arrow arrow-${direction}`}
    >
      &#10140;
    </div>
  )
}