import React from 'react';
import PokeCard from '../PokeCard/PokeCard'
import SearchInput from '../SearchInput/SearchInput';
import useFetchPokemon from './useFetchPokemon';

import './Home.css'


const Home = ({pokemon, loading, error, setLoading, setError, setPokemonId}) => {

    

    return (
        <div className="container o-cont">
        
        <div className='row' >
        <h2>Busca al pokemon que quieras</h2>
        <SearchInput
        setError={setError}
        setLoading={setLoading}
        setPokemonId={setPokemonId}></SearchInput>
        </div>
        
        {error && <p>No se encuentra</p>}
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