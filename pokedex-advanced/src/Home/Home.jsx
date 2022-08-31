import React from 'react';
import PokeCard from '../PokeCard/PokeCard'
import SearchInput from '../SearchInput/SearchInput';
import useFetchPokemon from './useFetchPokemon';

import './Home.css'


const Home = () => {

    const {pokemon, loading, error} = useFetchPokemon();
    console.log(pokemon);

    if(error){
        return (
          <div>
            <SearchInput></SearchInput>
            <p>No se encuentra</p>
          </div>
        )
      }


    return (
        <div className="o-cont">
        
        <SearchInput></SearchInput>
        <div className="o-cont-search">
        
                
                    <PokeCard
                    key={pokemon.id}
                    imgFront={pokemon.sprites.front_default}
                    name={pokemon.name}
                    abilities={pokemon.abilities}
                    moves={pokemon.moves}
                    ></PokeCard>

            
        </div>
        </div>
    );
};

export default Home;