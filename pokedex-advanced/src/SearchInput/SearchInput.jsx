import React, {useState} from 'react';
import './SearchInput.css';
import IconSearch from './search.png';


const SearchInput = ({setPokemon, setLoading, setError, setPokemonId}) => {
  const [poke, setPoke] = useState('');

  const handleSubmit = e => {
    e.preventDefault()
    if(poke !== ''){
      setError(false)
      setLoading(true)
      const pokemonID = window.isNaN(parseInt(poke)) ? poke.toLowerCase() : poke
      setPokemonId(pokemonID)
      setPoke('')
      return
    }
    setPokemon(null)
    setError(true)
  }
  return (
   
      <form className="search-input-container" onSubmit={handleSubmit}>
      <input type="text" placeholder='Name or ID' className='search-field'name="pokemon"
        value={poke} onChange={e => setPoke(e.target.value)}
        autoComplete="off" required/>
      <button className='search-button' type='submit' value="">
          <img src={IconSearch} alt="search icon" />
      </button>
      </form>
  )
}

export default SearchInput