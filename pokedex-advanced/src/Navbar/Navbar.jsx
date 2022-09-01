import React from 'react'
import pokeball from './pokeball.png'
import {Link} from 'react-router-dom'
import './Navbar.css'

const Navbar = () =>{
    return(
        <nav className="o-navbar">
            <Link to="/home">
            <img className='poke-img' src={pokeball} alt="" />
            </Link>
        </nav>
        );
}

export default Navbar;

