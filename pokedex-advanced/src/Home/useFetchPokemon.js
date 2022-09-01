import { useEffect, useState } from 'react'

const useFetchPokemon = () => {
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)
  const [pokemon, setPokemon] = useState(null)
  const [pokeMoves, setPokeMoves] = useState([])
  const RandomId = Math.floor(Math.random() * 806 + 1)
  const [pokemonID, setPokemonId] = useState(RandomId)

  const pokemonMoves = () => {
    if (!pokemon) {
      return
    }
    const moves = pokemon.moves.map(move => fetch(move.move.url))
    setLoading(true)
    Promise.all(moves)
    .then(moves => {
      return Promise.all(moves.map(move => move.json()))
    })
    .then(moves => {
      setPokeMoves(moves)
      setLoading(false)})
    
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
        
        setPokemonId(pokemonID)
        setPokemon(null)
        setLoading(false)
        setError(true)
        
      })

  }, [pokemonID])

  return { pokemonID, pokemon, loading, error, setLoading, setError, setPokemonId, pokemonMoves, pokeMoves }


}

export default useFetchPokemon;