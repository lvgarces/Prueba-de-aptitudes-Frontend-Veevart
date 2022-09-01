import React from 'react';
import './PokeCard.css';
import {Link} from 'react-router-dom'
import Ability from './components/Ability/Ability';
import Move from './components/Move/Move'
import ButtonM from './components/ButtonM/ButtonM';


const PokeCard = ({ name, imgFront, abilities, moves }) => {

    return (
        <>

            <div className="o-card">
                <div className='col-sm-5'>
                <img className="o-cont-img" src={imgFront} alt="" />
                <h3>{name}</h3>
                </ div>
                
                <div className='col o-cont-mov-ab'>
                <div className='row'>
                    <p className='col o-p-mov-ab'>Abilities</p>
                    <div className="o-cont-ability">

                        {
                            abilities.slice(0, 3).map((ability, index) => (
                                <Ability
                                    key={index}
                                    name={ability.ability.name}
                                ></Ability>

                            ))
                        }

                    </div>
                    </div>
                    <div className='row'>
                    <p className='col o-p-mov-ab'>Moves</p>
                    <div className="o-cont-ability">
                        {
                            moves.slice(0, 6).map((move, index) => (
                                <Move
                                    key={index}
                                    name={move.move.name}
                                ></Move>
                            ))

                        }

                    </div>
                    <div className="mb-2">
                    <Link to="/movesinfo">
                    <ButtonM />
                    </Link>
                    </div>
                    </div>
                    </div>
            </div>

        </>
    );

};

export default PokeCard;