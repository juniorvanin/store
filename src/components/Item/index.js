import React from 'react';

import './styles.css';

const Item = () => (
    <div className="item">
        <img className="item-image" src="https://www.ikea.com/es/es/images/es_images-es_es-/ikea-decora-tu-sal%C3%B3n-con-nuestros-favoritos-%7C-ikea__1364682272013-s3.png" />
        <div className="item-content">
        <h2 className="item-title"> Jogo de Cama Queen 100% algodão xadrez </h2>
        <span className="item-price"> somente pelo site <span className="item-price-actual">R$ 15,00!</span> <span className="item-price-old"> R$ 18,00 </span> </span>
        <button className="reservation-button"> Quero reservar! </button>
        </div>
    </div>
);

export { Item };