import React from 'react'
import { Link } from 'gatsby'

function SingleFighter({fighter}) {
  return(
    <div>
      <Link to={`/fighters/${fighter.slug.current}`}>
        <h2>
          <span className="mark">{fighter.name}</span>
        </h2>
        <p>{fighter.division.map(div => div.name).join(', ')}</p>
      </Link>
    </div>
  )
}

export default function FighterList({fighters}) {
  return(
    <div>{fighters.map(fighter=> (
      <SingleFighter key={fighter.id} fighter={fighter} />
    ))}</div>
  )
}