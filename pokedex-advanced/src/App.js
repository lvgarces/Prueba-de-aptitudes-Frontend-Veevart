import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Navbar from '../src/Navbar/Navbar'
import Home from '../src/Home/Home'
import InfoMoves from '../src/InfoMoves/InfoMoves'
import useFetchPokemon from './Home/useFetchPokemon';
import './App.css';


function App() {

  const {pokemonID, pokemon, loading, error, setLoading, setError, setPokemonId, pokemonMoves, pokeMoves} = useFetchPokemon();

  return (
    <Router>
      <div className="App bg">
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home
          pokemonID={pokemonID}
          pokemon={pokemon}
          loading={loading}
          error={error}
          setLoading={setLoading}
          setError={setError}
          setPokemonId={setPokemonId} />} />
          <Route path="/movesinfo" element={<InfoMoves
          loading={loading}
          pokemon={pokemon}
          pokeMoves={pokeMoves}
          pokemonMoves={pokemonMoves} />} />
          <Route
            path="*"
            element={<Navigate to="/home" replace />}
          />
        </Routes>

      </div>
    </Router>
  );
}

export default App;
