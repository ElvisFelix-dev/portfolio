/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { FaTwitter, FaInstagram, FaWhatsapp, FaTelegram } from 'react-icons/fa';
import { GlobalStyle } from './styles/global';

import { Container } from './styles';
import fotoProfile from '../src/assets/fotoProfile.jpg'

export function App() {
  return (
    <Container>
      <GlobalStyle />
      <div className="parent">

        <div className="sidebar">

          <div className="sidebar-pos">
              <div className="img-sidebar">
                <img src={fotoProfile} />
              </div>

              <div className="menu">
                <a className="selected" href="#">Sobre</a>
                <a href="https://github.com/ElvisFelix-dev" target="_blank">Experiência</a>
                <a href="https://www.linkedin.com/in/elvis-felix/" target="_blank">Educação</a>
              </div>
          </div>

        </div>

        <div className="content">

          <section className="descricao">
            <h2>Elvis <span>Felix</span></h2>
            <h3>Brasil · São Paulo, Matão 15991-340 · <span>(16) 99631-8063 · elvisfelix_575@hotmail.com</span></h3>
            <p>
              Experiência com desevolvimento web frontend, backend e mobile.<br/>
              Usando frameworks como: ReactJS, React Native, NodeJS.
            </p>

            <div className="icons-social">
                <a href="https://www.instagram.com/elvis_felixx/" target="_blank"><FaInstagram size={25} color="#6c757d" /></a>
                <a href="https://twitter.com/elvis__felix" target="_blank"><FaTwitter size={25}  color="#6c757d" /></a>
                <a href="https://wa.me/5516996318063" target="_blank"><FaWhatsapp size={25}  color="#6c757d" /></a>
                <a href="https://t.me/elvisfelixx" target="_blank"><FaTelegram  size={25} color="#6c757d" /></a>
            </div>

          </section>



        </div>
      </div>
    </Container>
  );
}


/*
    <div className="menu">
              <a className="selected" href="#">Sobre</a>
              <a href="https://github.com/ElvisFelix-dev">Experiência</a>
              <a href="https://www.linkedin.com/in/elvis-felix/">Educação</a>
            </div>
*/

/*
   <h2>Elvis <span>Felix</span></h2>
          <h3>Brasil · São Paulo, Matão 15991-340 · <span>(16) 99631-8063 · elvisfelix_575@hotmail.com</span></h3>
          <p>
            Experiência com desevolvimento web frontend, backend e mobile.<br/>
            Usando frameworks como: ReactJS, React Native, NodeJS.
          </p>
*/

/*
   <div className="icons-social">
            <a href="https://t.me/elvisfelixx"><i className="fab fa-telegram"></i></a>
            <a href="https://www.instagram.com/elvis_felixx/"><i  className="fab fa-instagram"></i></a>
            <a href="https://wa.me/5516996318063"><i  className="fab fa-whatsapp"></i></a>
            <a href="https://twitter.com/elvis__felix"><i  className="fab fa-twitter"></i></a>
          </div>
*/
