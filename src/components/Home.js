import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Home.css';

import Video from './images/WhatsApp Video 2023-06-11 at 22.50.32.mp4';
import Image1 from './images/WhatsApp Image 2023-06-11 at 22.50.29 (1).jpeg';
import Image2 from './images/WhatsApp Image 2023-06-11 at 22.50.29.jpeg';
import Image3 from './images/WhatsApp Image 2023-06-11 at 22.50.30.jpeg';
import Image4 from './images/WhatsApp Image 2023-06-11 at 22.50.32.jpeg';
import Image5 from './images/WhatsApp Image 2023-06-11 at 22.50.34 (1).jpeg';
import Image6 from './images/WhatsApp Image 2023-06-11 at 22.50.34.jpeg';
import Image7 from './images/WhatsApp Image 2023-06-11 at 22.51.24.jpeg';
import Image8 from './images/WhatsApp Image 2023-06-11 at 22.50.33 (2).jpeg';
import Image9 from './images/WhatsApp Image 2023-06-11 at 22.50.34 (2).jpeg';
import Image10 from './images/WhatsApp Image 2023-06-11 at 22.51.24 (1).jpeg';

const Home = () => {
  return (
    <div className="container">
      <h1>Dedicado para a mulher da minha vida</h1>
      <div className="video-container">
        <video autoPlay muted loop>
          <source src={Video} type="video/mp4" />
        </video>
      </div>
      <div className="carousel-container">
        <Carousel showThumbs={false} showArrows={false} className="image-carousel">
          <div>
            <img className="carousel-image" src="https://i.imgur.com/hZpQuuL.jpeg" alt="Foto 1" />
          </div>
          <div>
            <img className="carousel-image" src="https://i.imgur.com/dlyVdQb.jpeg" alt="Foto 2" />
          </div>
          <div>
            <img className="carousel-image" src="https://i.imgur.com/8WPGJ95.jpeg" alt="Foto 3" />
          </div>
          <div>
            <img className="carousel-image" src="https://i.imgur.com/qR5Eeds.jpeg" alt="Foto 4" />
          </div>
          <div>
            <img className="carousel-image" src="https://i.imgur.com/tbiCSGt.jpeg" alt="Foto 5" />
          </div>
          <div>
            <img className="carousel-image" src="https://i.imgur.com/gW1FtjZ.jpeg" alt="Foto 6" />
          </div>
          <div>
            <img className="carousel-image" src="https://i.imgur.com/HvSNKU8.jpeg" alt="Foto 7" />
          </div>
          <div>
            <img className="carousel-image" src="https://i.imgur.com/ztjF8d9.jpeg" alt="Foto 8" />
          </div>
          <div>
            <img className="carousel-image" src="https://i.imgur.com/MfifEtD.jpeg" alt="Foto 9" />
          </div>
          <div>
            <img className="carousel-image" src="https://i.imgur.com/7q9j7NT.jpeg" alt="Foto 10" />
          </div>
        </Carousel>
      </div>
      <div className="text-container">
        <p>O primeiro dia dos namorados das nossas vidas</p>
        <div className="custom-text-container">
          {/* Insira seu texto neste elemento abaixo */}
          <p>Eu nem sei por onde começar nem quais palavras poderia utilizar para falar de você e expressar como me sinto neste dia. Desde o primeiro momento que tivemos nossa primeira conversa, eu já sentia que algo na minha vida estava prestes a mudar. Desde a primeira vez em que olhei nos seus olhos e consegui esquecer tudo ao meu redor, eu soube que você era a pessoa que meu coração tinha escolhido. Poder abrir meu coração novamente e compartilhar o melhor da vida, mesmo com todos os meus medos e temores em relação a um novo relacionamento, tornou-se tão fácil e real com você. Inconscientemente, eu já me via ao seu lado e fazia de tudo para estar com você.

            O que dizer desses 2 meses de namoro? Desses quase 7 meses juntos, de todas as histórias, passeios, conversas e da sua maravilhosa companhia? Só consigo dizer MUITO OBRIGADO, SAMARA! Você me fez acreditar no amor novamente, fez com que eu desejasse me entregar completamente. Estou me entregando 100% a isso. Entre todas as pessoas do mundo, não tenho a menor dúvida de que meu coração escolheu a pessoa certa! Amo seu cheiro, seu jeito, seu toque, a maneira como você fala, como você demonstra seus sentimentos, não apenas comigo, mas com todos ao seu redor. Admiro seu esforço, sua grandeza e sua gentileza. Ainda não sei como descrever uma pessoa que, nos seus mínimos detalhes, como gesticular ao falar, olhar e os traços mais bonitos e singelos que já vi, consegue ser a pessoa mais apaixonante que meus olhos tiveram o prazer de enxergar.

            Samara, você se tornou uma parte crucial e essencial da minha vida. Não consigo imaginar um cenário futuro sem você ao meu lado. Sinto que temos muitas coisas para fazer e faremos juntos. Se quero conhecer o mundo, é com você. Se quero experimentar algo diferente, é com você. Se quero conversar a tarde inteira sem preocupações, é com você! Este é apenas o primeiro de muitos anos que estão por vir. Obrigado por fazer parte da minha vida, obrigado por ser você: Samara Pereira Brito, a mulher à qual dedico este site que ficará para o resto de nossas vidas, e a mulher à qual dediquei meu coração pela eternidade. EU TE AMO!</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
