import React, { useEffect } from 'react'

const InfoMoves = ({pokeMoves, pokemonMoves}) => {
  useEffect(() =>{
    pokemonMoves()
  },[]);
  return (
    <div>{
        pokeMoves.slice(0, 6).map((move, index) => (
            <div>
                <p>{move.name}</p>
                <p>{move.pp}</p>
                <p>{move.type.name}</p>
                {
                  move.effect_entries.map(effect_entries => (
                    <p>{effect_entries.short_effect}</p>
                    ))
                }
            </div>
        ))

    }</div>
  )
}
export default InfoMoves;
