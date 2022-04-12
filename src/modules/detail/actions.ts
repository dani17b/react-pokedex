import { PokemonClient } from 'pokenode-ts';

export const LOAD_POKEMON_DETAIL_REQUEST = 'LOAD_POKEMON_DETAIL_REQUEST';
export const LOAD_POKEMON_DETAIL_RESPONSE = 'LOAD_POKEMON_DETAIL_RESPONSE';
export const LOAD_POKEMON_FORM_REQUEST = 'LOAD_POKEMON_FORM_REQUEST';
export const LOAD_POKEMON_FORM_RESPONSE = 'LOAD_POKEMON_FORM_RESPONSE';
export const REMOVE_MOVE = 'REMOVE_MOVE';

const api = new PokemonClient();

export const getPokemon = (name : string) => {
  return (dispatch : any) => {
    dispatch({
      type: LOAD_POKEMON_DETAIL_REQUEST,
    });

    api.getPokemonByName(name).then((detail) => {
      dispatch({
        type: LOAD_POKEMON_DETAIL_RESPONSE,
        detail,
      });
    });
  };
};

export const getPokemonForm = (name : string) => {
  return (dispatch : any) => {
    dispatch({
      type: LOAD_POKEMON_FORM_REQUEST,
    });

    api.getPokemonFormByName(name).then((form) => {
      dispatch({
        type: LOAD_POKEMON_FORM_RESPONSE,
        form,
      });
    });
  };
};

export const removeMove = (name : string) => {
  return {
    type: REMOVE_MOVE,
    name,
  };
};
