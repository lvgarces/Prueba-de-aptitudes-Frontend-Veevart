import React, { useEffect } from "react";
import { motion } from "framer-motion"
import {Link} from 'react-router-dom'
import MoveCard from "./components/MoveCard";
import Spinner from '../Spinner/Spinner';
import './InfoMoves.css';

const InfoMoves = ({loading, pokemon, pokeMoves, pokemonMoves }) => {
  useEffect(() => {
    pokemonMoves();
  }, []);
  return (
    
    <div className="container o-cont-infomoves">
      <div>
      <Link to="/home"><h3>Regresar</h3></Link>
    </div>
      <h1>{pokemon?.name} moves</h1>
      {loading && <Spinner></Spinner>}
      <div  className="row">
        {pokeMoves.map((move, index) => (
          <motion.div whileHover={{ scale: 1.1 }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="col o-card-cont">
          <MoveCard
            name={move.name}
            accuracy={move.accuracy}
            power={move.power}
            pp={move.pp}
            type={move.type?.name}
            effect_entries={move.effect_entries || []}
          ></MoveCard>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
export default InfoMoves;
