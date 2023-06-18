import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Carrousel = () => {
  return (
    <div className="carrousel-container">
      <Carousel showStatus={false} showThumbs={false}> 
        <div>
          <img
            src="https://http2.mlstatic.com/D_NQ_647649-MLA69501936330_052023-OO.webp"
            alt="Ofertas"
          />
        </div>
        <div>
          <img
            src="https://http2.mlstatic.com/D_NQ_989868-MLA69514356431_052023-OO.webp"
            alt="..."
          />
        </div>
        <div>
          <img
            src="https://http2.mlstatic.com/D_NQ_782348-MLA69499768646_052023-OO.webp"
            alt="..."
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Carrousel;