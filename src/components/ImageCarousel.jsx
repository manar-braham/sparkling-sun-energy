import React from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import './ImageCarousel.css';

function ImageCarousel() {
  const navigate = useNavigate();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
  };

  const handleQuoteClick = () => {
    navigate('/formulaire');
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        <div>
          <img src="/images/slide1.jpg" alt="paneaux solaire" />
        </div>
        <div>
          <img src="/images/slide2.webp" alt="paneaux solaire" />
        </div>
        <div>
          <img src="/images/panneaux-photovoltaiques-3.jpg" alt="Paneaux photovolthéique" />
        </div>
        <div>
          <img src="/images/panneaux-solaires5.jpg" alt="solaires" />
        </div>
         <div>
          <img src="/images/panneaux-solaires4.jpg" alt="solaires" />
        </div>
          <div>
          <img src="/images/slide3.jpg" alt="solaires" />
        </div>
      </Slider>

      <div className="overlay-content">
        <h1 className="half-page-title">Bienvenue à Sparkling Sun Energy</h1>
        <button className="quote-button" onClick={handleQuoteClick}>
          Demander un Devis
        </button>
      </div>
    </div>
  );
}

export default ImageCarousel;
