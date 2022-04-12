import axios from 'axios';
import { Config } from '../../config/Config';

export const LOAD_POKEMONS_REQUEST = 'LOAD_POKEMONS_REQUEST';
export const LOAD_POKEMONS_RESPONSE = 'LOAD_POKEMONS_RESPONSE';

export const find = (props) => {
  const { start, count, filter } = props;

  return (dispatch) => {
    dispatch({
      type: LOAD_POKEMONS_REQUEST,
    });

    axios({
      url: `${Config.serviceURL}/pokemon?start=${start}&count=${count}&filter=${filter}`,
      method: 'get',
    }).then((response) => {
      dispatch({
        type: LOAD_POKEMONS_RESPONSE,
        pokemons: response.data,
      });
    });
  };
};
