import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Slideshow from '../components/slideshow';
import { slideshowImages } from '../assets/slideshowImages';
import '../styles/home.css';

// Ícones de navegação horizontal
import slideshow13 from '../assets/slideshow13.jpg';
import slideshow6 from '../assets/slideshow6.jpg';
import slideshow20 from '../assets/slideshow20.jpg';
import slideshow19 from '../assets/slideshow19.jpg';
import slideshow4 from '../assets/slideshow4.jpg';
import slideshow1 from '../assets/slideshow1.jpg';
import slideshow21 from '../assets/slideshow21.jpg';

// Imagens específicas para o slideshow principal
import slideshow23 from '../assets/slideshow23.jpg';
import slideshow24 from '../assets/slideshow24.jpg';
import slideshow25 from '../assets/slideshow25.jpg';
import slideshow26 from '../assets/slideshow26.jpg';
import slideshow35 from '../assets/slideshow35.jpg';
import slideshow39 from '../assets/slideshow39.jpg';
import slideshow40 from '../assets/slideshow40.jpg';
import slideshow41 from '../assets/slideshow41.jpg';
import slideshow43 from '../assets/slideshow43.jpg';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');

  const navIcons = [
    { title: 'Grupo de Jovens', image: slideshow13, link: '/ministerio-jovens' },
    { title: 'Louvor', image: slideshow6, link: '/ministerio-louvor' },
    { title: 'Orações', image: slideshow20, link: '/oracao-intercessao' },
    { title: 'Estudo Bíblico', image: slideshow21, link: '/estudos-mensagens' },
    { title: 'Pequeninos', image: slideshow19, link: '/ministerio-infantil' },
    { title: 'Sobre', image: slideshow4, link: '/sobre' },
    { title: 'Contato', image: slideshow1, link: '/contato' },
  ];

  const shortcuts = [
    { title: 'Grupo de Jovens', description: 'Atividades e encontros para os nossos jovens.', image: slideshowImages[12], link: '/ministerio-jovens' },
    { title: 'Louvor', description: 'Ministério de louvor e adoração.', image: slideshowImages[5], link: '/ministerio-louvor' },
    { title: 'Orações', description: 'Venha participar de momentos de oração e libertação.', image: slideshowImages[19], link: '/oracao-intercessao' },
    { title: 'Estudo Bíblico', description: 'Aprofunde-se na Palavra de Deus e cresça espiritualmente com nossos estudos.', image: slideshowImages[20], link: '/estudos-mensagens' },
    { title: 'Pequeninos', description: 'Atividades educativas através do Evangelho para as nossas crianças.', image: slideshowImages[18], link: '/ministerio-infantil' },
    { title: 'Sobre', description: 'Saiba mais sobre a história e missão da Assembleia de Deus Ipiranga.', image: slideshowImages[3], link: '/sobre' },
    { title: 'Contato', description: 'Entre em contato conosco.', image: slideshowImages[0], link: '/contato' },
  ];

  const filteredShortcuts = shortcuts.filter((sc) =>
    sc.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className="home-container">
      <Helmet>
        <title>Assembleia de Deus JD Triunfo Pedreira - SP</title>
        <meta
          name="description"
          content="Conheça a Assembleia de Deus Pedreira: cultos, orações, ministério e atividades para toda a família."
        />
      </Helmet>

      {/* Título */}
      <h1 className="home-title">Assembleia de Deus Ipiranga JD Triunfo Pedreira - SP</h1>

      {/* Barra de pesquisa */}
      <div className="home-search-google">
        <div className="search-box">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            placeholder="Pesquisar no site..."
            className="search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Navegação horizontal */}
      <nav className="home-nav-horizontal">
        {navIcons.map((icon, idx) => (
          <a key={idx} href={icon.link} className="nav-icon-horizontal">
            <img src={icon.image} alt={icon.title} />
            <span>{icon.title}</span>
          </a>
        ))}
      </nav>

      {/* Slideshow */}
      <div className="slideshow-wrapper">
        <Slideshow
          images={[
            slideshow23,
            slideshow24,
            slideshow25,
            slideshow26,
            slideshow35,
            slideshow39,
            slideshow40,
            slideshow41,
            slideshow43
          ]}
        />
      </div>

      <hr className="separator-line" />

      {/* Cards verticais filtrados */}
      <div className="home-shortcuts">
        {filteredShortcuts.map((sc, idx) => (
          <div key={idx} className="shortcut-card">
            <a href={sc.link}>
              <img src={sc.image} alt={sc.title} className="shortcut-image" />
            </a>
            <div className="shortcut-text">
              <h2>{sc.title}</h2>
              <p>{sc.description}</p>
            </div>
          </div>
        ))}

        {filteredShortcuts.length === 0 && (
          <p style={{ textAlign: 'center', marginTop: '20px' }}>
            Nenhum resultado encontrado.
          </p>
        )}
      </div>
    </main>
  );
}