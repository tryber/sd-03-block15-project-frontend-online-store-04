import React from 'react';
import './Footer.css';


class Footer extends React.Component {

  render() {
    return (
      <footer className="footer">
        <p className="nomes">Desenvolvido por:
        <a href="https://www.linkedin.com/in/fabemiliano/"
          target="_blank" rel="noopener noreferrer"> Fabiano Emiliano</a>,
        <a href="https://www.linkedin.com/in/henrique-ba%C3%AAta-leite-785a4b15a/"
          target="_blank" rel="noopener noreferrer"> Henrique Baêta</a>,
        <a href="https://www.linkedin.com/in/rodrigobrezolin/"
          target="_blank" rel="noopener noreferrer"> Rodrigo Brezolin</a> - 2020
        </p>
      </footer>
    );
  }
}

export default Footer;
