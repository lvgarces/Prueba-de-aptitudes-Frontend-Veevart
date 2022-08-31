import React from 'react';
import './PokeCard.css';

import Ability from './components/Ability/Ability';
import Move from './components/Move/Move'


const PokeCard = ({ name, imgFront, abilities, moves }) => {

    return (
        <>

            <div className="o-card">
                <div>
                <img className="o-cont-img" src={imgFront} alt="" />
                </div>
                <p>{name}</p>

                    <p>Abilities</p>
                    <div className="o-cont-ability">

                        {
                            abilities.slice(0, 3).map((ability) => (
                                <Ability
                                    name={ability.ability.name}
                                ></Ability>

                            ))
                        }

                    </div>
                    <p>Moves</p>
                    <div className="o-cont-ability">
                        {
                            moves.slice(0, 3).map((move) => (
                                <Move
                                    name={move.move.name}
                                ></Move>
                            ))

                        }

                    </div>
            </div>

        </>
    );

};

export default PokeCard;