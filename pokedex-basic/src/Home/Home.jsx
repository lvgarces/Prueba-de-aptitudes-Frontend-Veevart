import React from 'react';
import PokeCard from './components/PokeCard/PokeCard'
import pokemon from './poke-json.json'

import './Home.css'


const Home = () => {

    return (
        <div className="o-cont">
            {
                pokemon.map(pokemon =>(
                    <PokeCard
                    imgFront={pokemon.sprites.front_default}
                    imgBack={pokemon.sprites.back_default}
                    name={pokemon.name}
                    abilities={pokemon.abilities}
                    moves={pokemon.moves}
                    ></PokeCard>
                ))

            }
            
        </div>
    );
};

export default Home;