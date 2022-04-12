import React, { useEffect } from "react";
import { getPokemon, getPokemonForm, removeMove } from "./actions";
import "./detail.scss";

import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import Carrusel from "../../components/carrusel/Carrusel";

const Detail = () => {
  const { name } = useParams();
  const dispatch = useDispatch();
  const { loading, pokemon, pokemonForms, loadingForm } = useSelector((state: any) => state.detail);

  useEffect(() => {
    dispatch(getPokemon(name));
  }, []);

  useEffect(() => {
    if(pokemon){
      dispatch(getPokemonForm(name));
    }
  }, [pokemon])
  
  return (
    <div className="detail">
      {pokemon && 
        <>
          <div className="basic">
            <Carrusel photos={Object.values(pokemon.sprites).filter(photo => typeof photo == 'string')}/>
            <div className="basic__name">{pokemon.name}</div>
          </div>
          <div className="detail__abilities">
            abilities
            <ul>
              {pokemon.abilities.filter(abilities => !abilities.is_hidden).map((abilities, i) => 
                <li>{abilities.ability.name}</li>
              )}
            </ul>
          </div>
          <div className="detail__moves">
            Moves
            <ul>
              {pokemon.moves.map((moves, i) => 
                <li>
                  <span className="move__name">{moves.move.name}</span>
                  <div className="move__remove" onClick={() => dispatch(removeMove(moves.move.name))}>Eliminar</div>
                </li>
              )}
            </ul>
          </div>
        </>
      }
      {pokemonForms && 
        <>
          <div className="title">Form {pokemonForms.id}</div>
          <div className="info">Is for battle only {pokemonForms.is_battle_only ? 'YES' : 'NO'}</div>
        </>
      }
    </div>
  );
};

export default Detail;
