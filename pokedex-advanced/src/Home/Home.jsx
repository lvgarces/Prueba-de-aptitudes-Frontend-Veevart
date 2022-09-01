import React from 'react';
import PokeCard from '../PokeCard/PokeCard'
import SearchInput from '../SearchInput/SearchInput';
import Spinner from '../Spinner/Spinner';
import NotFound from '../NotFound/NotFound';

import './Home.css'


const Home = ({pokemonID, pokemon, loading, error, setLoading, setError, setPokemonId}) => {

    

    return (
        <div className="container o-cont">
        
        <div className='row' >
        <h2>Find the pokemon you want!</h2>
        <SearchInput
        setError={setError}
        setLoading={setLoading}
        setPokemonId={setPokemonId}></SearchInput>
        </div>
        {loading && !pokemon && <Spinner/>}
        {error && <NotFound pokemon={pokemonID} />}
        {pokemon &&
        <div className="row o-cont-search">
        
                
                    <PokeCard
                    key={pokemon.id}
                    imgFront={pokemon.sprites?.front_default}
                    name={pokemon.name}
                    abilities={pokemon.abilities || []}
                    moves={pokemon.moves || []}
                    ></PokeCard>

            
        </div>}
        </div>
    );
};

export default Home;