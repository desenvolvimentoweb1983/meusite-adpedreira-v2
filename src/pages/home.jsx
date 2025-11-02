import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import Slideshow from '../components/slideshow'
import { slideshowImages } from '../assets/slideshowImages'
import '../styles/home.css'

// Ícones de navegação horizontal
import slideshow13 from '../assets/slideshow13.jpg'
import slideshow6 from '../assets/slideshow6.jpg'
import slideshow20 from '../assets/slideshow20.jpg'
import slideshow19 from '../assets/slideshow19.jpg'
import slideshow4 from '../assets/slideshow4.jpg'
import slideshow1 from '../assets/slideshow1.jpg'
import slideshow21 from '../assets/slideshow21.jpg'

// Ícone de compartilhamento para atalhos
import shareIcon from '../assets/icons/share.svg'

export default function Home() {
  // Estado para barra de pesquisa
  const [searchTerm, setSearchTerm] = useState('')

  // Ícones de navegação horizontal
  const navIcons = [
    { title: 'Grupo de Jovens', image: slideshow13, link: '/ministerio-jovens' },
    { title: 'Louvor', image: slideshow6, link: '/ministerio-louvor' },
    { title: 'Orações', image: slideshow20, link: '/oracao-intercessao' },
    { title: 'Estudo Bíblico', image: slideshow21, link: '/oracao-intercessao' },
    { title: 'Pequeninos', image: slideshow19, link: '/ministerio-infantil' },
    { title: 'Sobre', image: slideshow4, link: '/sobre' },
    { title: 'Contato', image: slideshow1, link: '/contato' },
  ]

  // Cards verticais
  const shortcuts = [
    {
      title: 'Grupo de Jovens',
      description: 'Atividades e encontros para os jovens da congregação.',
      image: slideshowImages[12],
      link: '/ministerio-jovens',
    },
    {
      title: 'Louvor',
      description:
        'Nosso ministério se dedica a conduzir a congregação em adoração através da música.',
      image: slideshowImages[5],
      link: '/ministerio-louvor',
    },
    {
      title: 'Orações',
      description: 'Participe de momentos de oração e intercessão.',
      image: slideshowImages[19],
      link: '/oracao-intercessao',
    },
    {
      title: 'Pequeninos',
      description: 'Atividades educativas e espirituais para crianças.',
      image: slideshowImages[18],
      link: '/ministerio-infantil',
    },
    {
      title: 'Sobre',
      description: 'Saiba mais sobre a história e missão da Assembleia.',
      image: slideshowImages[3],
      link: '/sobre',
    },
    {
      title: 'Contato',
      description: 'Entre em contato com a nossa congregação.',
      image: slideshowImages[0],
      link: '/contato',
    },
  ]

  // Filtra os cards conforme o texto digitado
  const filteredShortcuts = shortcuts.filter((sc) =>
    sc.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <main className="home-container">
      <Helmet>
        <title>Assembleia de Deus JD Triunfo Pedreira - SP</title>
        <meta
          name="description"
          content="Conheça a Assembleia de Deus Pedreira: cultos, orações, ministério e atividades para toda a família."
        />
      </Helmet>

      {/* 1. Título da igreja */}
      <h1 className="home-title">Assembleia de Deus JD Triunfo Pedreira - SP</h1>

      {/* 2. Barra de pesquisa estilo Google */}
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

      {/* 3. Navegação horizontal */}
      <nav className="home-nav-horizontal">
        {navIcons.map((icon, idx) => (
          <a key={idx} href={icon.link} className="nav-icon-horizontal">
            <img src={icon.image} alt={icon.title} />
            <span>{icon.title}</span>
          </a>
        ))}
      </nav>

      {/* 4. Slideshow */}
      <div className="slideshow-wrapper">
        <Slideshow images={slideshowImages} />
      </div>

      {/* Linha de separação */}
      <hr className="separator-line" />

      {/* 5. Cards verticais filtrados */}
      <div className="home-shortcuts">
        {filteredShortcuts.map((sc, idx) => (
          <div key={idx} className="shortcut-card">
            <a href={sc.link}>
              <img src={sc.image} alt={sc.title} className="shortcut-image" />
            </a>
            <div className="shortcut-text">
              <h2>{sc.title}</h2>
              <p>{sc.description}</p>
              <button className="shortcut-share">
                <img src={shareIcon} alt="Compartilhar" />
              </button>
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
  )
}