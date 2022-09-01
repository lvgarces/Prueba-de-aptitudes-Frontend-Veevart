import React, {useState} from 'react';
import './SearchInput.css';
import IconSearch from './search.png';


const SearchInput = ({setLoading, setError, setPokemonId}) => {
  const [poke, setPoke] = useState('');

  const handleSubmit = e => {
    e.preventDefault()
    if(poke !== ''){
      setError(false)
      setLoading(true)
      const pokemonID = poke
      setPokemonId(pokemonID)
      setPoke('')
      return
    }
    setError(true)
  }
  return (
   
      <form className="search-input-container" onSubmit={handleSubmit}>
      <input type="text" placeholder='Nombre' className='search-field'name="pokemon"
        value={poke} onChange={e => setPoke(e.target.value)}
        autoComplete="off"/>
      <button className='search-button' type='submit' value="">
          <img src={IconSearch} alt="search icon" />
      </button>
      </form>
  )
}

export default SearchInput