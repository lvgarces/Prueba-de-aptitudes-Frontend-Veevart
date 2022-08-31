import React, { useState } from 'react';
import './PokeCard.css';

import Modal from 'react-bootstrap/Modal';

import Ability from '../Ability/Ability';
import Move from '../Move/Move'


const PokeCard = ({ name, imgFront, imgBack, abilities, moves }) => {

    const [show, setLgShow] = useState(false);

    console.log(abilities)

    return (
        <>

            <div className="o-card" onClick={() => setLgShow(true)}>
                <img src={imgFront} alt="" />
                <p>{name}</p>
            </div>

        <div className="o-cont-modal">
            <Modal
                show={show}
                onHide={() => setLgShow(false)}
                className="o-modal"

            >
                <Modal.Header closeButton closeVariant='white' className="o-modal-head">
                    <Modal.Title id="example-modal-sizes-title-lg">
                        {name}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="o-modal-body">
                    <div className="o-cont-img">
                        <img src={imgFront} alt="" />
                        <img src={imgBack} alt="" />
                    </div>
                    <p>Abilities</p>
                    <div className="o-cont-ability">

                        {
                            abilities.map((ability) => (
                                <Ability
                                    name={ability.ability.name}
                                ></Ability>

                            ))
                        }

                    </div>
                    <p>Moves</p>
                    <div className="o-cont-ability">
                        {
                            moves.map((move) => (
                                <Move
                                    name={move.move.name}
                                ></Move>
                            ))

                        }

                    </div>
                </Modal.Body>
            </Modal>
            </div>

        </>
    );

};

export default PokeCard;