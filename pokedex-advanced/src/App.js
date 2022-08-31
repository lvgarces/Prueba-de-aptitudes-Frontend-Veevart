import React from 'react';
import Navbar from '../src/Navbar/Navbar'
import Home from '../src/Home/Home'
import useFetchPokemon from '../src/Home/useFetchPokemon';


function App() {
  useFetchPokemon();
  return (
    <div className="App bg">
      <Navbar/>
      <Home/>
    </div>
  );
}

export default App;
