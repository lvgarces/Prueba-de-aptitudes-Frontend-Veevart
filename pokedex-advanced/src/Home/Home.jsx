import React from 'react';
import PokeCard from '../PokeCard/PokeCard'
import SearchInput from '../SearchInput/SearchInput';
import useFetchPokemon from './useFetchPokemon';

import './Home.css'


const Home = ({pokemon, loading, error, setLoading, setError, setPokemonId}) => {

    

    return (
        <div className="o-cont">
        
        <SearchInput
        setError={setError}
        setLoading={setLoading}
        setPokemonId={setPokemonId}></SearchInput>
        {error && <p>No se encuentra</p>}
        {pokemon &&
        <div className="o-cont-search">
        
                
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