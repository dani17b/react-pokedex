import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import './carrusel.scss';

const Carrusel = (props) => {
  const {
    photos
  } = props;

  return (
    <div className="carousel-element">
      <Carousel showThumbs={false}>
        {photos.map((photo, i) => 
         <div className="phto">
          <img src={photo} alt="Descripcion de la foto"/>
        </div>
        )}
      </Carousel>
    </div>
  );
};

export default Carrusel;
