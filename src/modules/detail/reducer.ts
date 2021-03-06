import {
  LOAD_POKEMON_DETAIL_REQUEST,
  LOAD_POKEMON_DETAIL_RESPONSE,
  LOAD_POKEMON_FORM_REQUEST,
  LOAD_POKEMON_FORM_RESPONSE,
  REMOVE_MOVE,
} from './actions';

const initialState = {
  loading: false,
  pokemon: null,
  pokemonForms: null,
  loadingForm: false,
};

const detail = (state : any = initialState, action : any) => {
  switch (action.type) {
    case LOAD_POKEMON_DETAIL_REQUEST:
      return {
        ...state,
        loading: true,
        pokemon: null,
        pokemonForms: null,
      };
    case LOAD_POKEMON_DETAIL_RESPONSE:
      let pokemon = {
        ...action.detail,
      };

      // Se ordenan los moves teniendo en cuenta el id numerico que incluye en la url
      pokemon.moves.sort((m1 : any, m2 : any) =>
        parseInt(m1.move.url.slice(0, -1).split('/').reverse()[0]) >
        parseInt(m2.move.url.slice(0, -1).split('/').reverse()[0])
          ? -1
          : -1
      );

      return {
        ...state,
        loading: false,
        pokemon,
      };
    case REMOVE_MOVE:
      return {
        ...state,
        pokemon: {
          ...state.pokemon,
          moves: state.pokemon.moves
            .filter((move : any) => move.move.name !== action.name)
            .slice(0),
        },
      };
    case LOAD_POKEMON_FORM_REQUEST:
      return {
        ...state,
        loadingForm: true,
      };
    case LOAD_POKEMON_FORM_RESPONSE:
      return {
        ...state,
        pokemonForms: action.form,
        loadingForm: false,
      };
    default:
      return state;
  }
};

export default detail;
