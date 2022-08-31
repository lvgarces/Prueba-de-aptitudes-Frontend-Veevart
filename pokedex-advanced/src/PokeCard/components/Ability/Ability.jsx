import React from 'react';

import './Ability.css'


const Ability = ({name}) => {

    return (
        <div className="o-ability">
            <p>{name}</p>
        </div>
    );
};

export default Ability;