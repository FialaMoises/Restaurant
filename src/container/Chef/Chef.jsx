import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.moises} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Dev Front-End" />
      <h1 className="headtext__cormorant">What I am</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans">Desenvolvedor Front-end Junior com habilidade em construir aplicações web responsiva.</p>
        </div>
        <p className="p__opensans"> utilizando tecnologias como HTML, CSS e JavaScript. Com vontade de aprender e desenvolver novas habilidades, como o uso de frameworks modernos como React. Habilidade para trabalhar em equipe e comprometido com a escrita de código limpo e manutenível. Está sempre buscando aprender e se atualizar com as últimas tendências e tecnologias na indústria.. </p>
      </div>

      <div className="app__chef-sign">
        <p>Moises Fiala</p>
        <p className="p__opensans">Front-End</p>
        <img src={images.assinatura} alt="sign_image" />
      </div>
    </div>
  </div>
);

export default Chef;