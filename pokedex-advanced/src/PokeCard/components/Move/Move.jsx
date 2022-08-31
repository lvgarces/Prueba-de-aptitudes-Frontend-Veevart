import React from 'react';

import './Move.css'


const Move = ({name}) => {

    return (
        <div className="o-move">
            <p>{name}</p>
        </div>
    );
};

export default Move;