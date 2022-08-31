import { useEffect, useState } from 'react'

const useFetchPokemon = () => {
    const [ error, setError ] = useState(false)
    const [ loading, setLoading ] = useState(true)
    const [ pokemon, setPokemon ] = useState([])
    const RandomId = Math.floor(Math.random() * 806 + 1)
    const [ pokemonID, setPokemonId ] = useState()

    useEffect(() => {
      console.log(pokemonID)
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonID}`,{
          method: 'GET',
          headers: {'Content-Type': 'application/json'}
        })
          .then(res => res.json())
          .then(data => {
            console.log('hola')
            setPokemon(data)
            setLoading(false)
            setError(false)
          })
          .catch(err => {
            console.log(pokemonID)
            setLoading(false)
            setError(true)
          })
          
      }, [pokemonID])

      return {pokemon, loading, error, setPokemon, setLoading, setError, setPokemonId}

    
}

export default useFetchPokemon;