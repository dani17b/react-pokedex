import { LOAD_POKEMONS_REQUEST, LOAD_POKEMONS_RESPONSE } from './actions';

const initialState = {
  loading: false,
  pokemons: [],
  total: null,
};

const home = (state = initialState, action : any) => {
  switch (action.type) {
    case LOAD_POKEMONS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LOAD_POKEMONS_RESPONSE:
      return {
        ...state,
        loading: false,
        total: action.pokemons.total,
        pokemons: action.pokemons.results,
      };
    default:
      return state;
  }
};

export default home;
