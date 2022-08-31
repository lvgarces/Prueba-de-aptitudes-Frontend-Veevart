import React from 'react'
import pokeball from './pokeball.png'
import './Navbar.css'

const Navbar = () =>{
    return(
        <nav className="o-navbar">
            <img className='poke-img' src={pokeball} alt="" />
            
        </nav>
        );
}

export default Navbar;

