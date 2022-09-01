import { useEffect, useState } from 'react'

const useFetchPokemon = () => {
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)
  const [pokemon, setPokemon] = useState(null)
  const [pokeMoves, setPokeMoves] = useState([])
  const RandomId = Math.floor(Math.random() * 806 + 1)
  const [pokemonID, setPokemonId] = useState()

  const pokemonMoves = () => {
    if (!pokemon) {
      return
    }
    const moves = pokemon.moves.map(move => fetch(move.move.url))

    Promise.all(moves)
    .then(moves => {
      return Promise.all(moves.map(move => move.json()))
    })
    .then(moves => 
      setPokeMoves(moves))
    
  }

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonID}`)
      .then(res => res.json())
      .then(data => {
        setPokemon(data)
        setLoading(false)
        setError(false)
      })
      .catch(err => {
        setLoading(false)
        setError(true)
      })

  }, [pokemonID])

  return { pokemon, loading, error, setPokemon, setLoading, setError, setPokemonId, pokemonMoves, pokeMoves }


}

export default useFetchPokemon;