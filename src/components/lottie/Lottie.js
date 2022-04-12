import React from 'react';
import Lottie from 'react-lottie';
import lottieLoading from './animations/20641-loading.json';

export const LOTTIE_ANIMATION_TYPE = {
  LOADING: lottieLoading
};

const LottieAnimation = props => {
  const { animation } = props;

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div>
      <Lottie options={defaultOptions} height={400} width={400} />
    </div>
  );
};

export default LottieAnimation;
