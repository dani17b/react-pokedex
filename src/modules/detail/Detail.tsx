import React, { useEffect } from 'react';
import { getPokemon, getPokemonForm, removeMove } from './actions';
import './detail.scss';

import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Carrusel from '../../components/carrusel/Carrusel';
import Fade from 'react-reveal/Fade';
import { IoIosClose } from 'react-icons/io';
import { useTranslation } from 'react-i18next';
import LottieAnimation, {
  LOTTIE_ANIMATION_TYPE
} from '../../components/lottie/Lottie';

const Detail = () => {
  const { name } = useParams();
  const dispatch = useDispatch();
  const { loading, pokemon, pokemonForms, loadingForm } = useSelector(
    (state: any) => state.detail
  );
  const { t } = useTranslation('common');

  console.log(loading, loadingForm);

  useEffect(() => {
    dispatch(getPokemon(name));
  }, [dispatch, name]);

  useEffect(() => {
    if (!pokemonForms && pokemon) {
      dispatch(getPokemonForm(name));
    }
  }, [pokemon, dispatch, name]);

  return (
    <div className="detail">
      {(loading || loadingForm) && <LottieAnimation animation={LOTTIE_ANIMATION_TYPE.LOADING} />}
      {pokemon && (
        <>
          <div className="basic">
            <Carrusel
              photos={Object.values(pokemon.sprites).filter(
                (photo) => typeof photo == 'string'
              )}
            />
            <div className="basic__name">{pokemon.name}</div>
          </div>
          <div className="detail__abilities">
            <ul>
              {pokemon.abilities
                .filter((abilities : any) => !abilities.is_hidden)
                .map((abilities : any, i : number) => (
                  <li key={i}>{abilities.ability.name}</li>
                ))}
            </ul>
          </div>
          <ul className="detail__moves">
            {pokemon.moves.map((moves : any, i : number) => (
              <Fade key={i} bottom>
                <li>
                  <div className="move">
                    <span className="move__name">{moves.move.name}</span>
                    <IoIosClose
                      className="move__icon"
                      size={32}
                      onClick={() => dispatch(removeMove(moves.move.name))}
                    />
                  </div>
                </li>
              </Fade>
            ))}
          </ul>
        </>
      )}
      {pokemonForms && pokemonForms.is_battle_only && (
        <div className="info">{t('only_for_battle')}</div>
      )}
    </div>
  );
};

export default Detail;
