import React from 'react'
import { Helmet } from 'react-helmet-async'
import Slideshow from '../components/slideshow'
import { slideshowImages } from '../assets/slideshowImages'
import '../styles/home.css'

// Ícones de navegação horizontal
import iconHome from '../assets/icons/home.svg'
import iconJovens from '../assets/icons/jovens.svg'
import iconLouvor from '../assets/icons/louvor.svg'
import iconOracao from '../assets/icons/oracao.svg'
import iconPequeninos from '../assets/icons/pequeninos.svg'
import iconSobre from '../assets/icons/sobre.svg'
import iconContato from '../assets/icons/contato.svg'

// Ícone de compartilhamento para atalhos
import shareIcon from '../assets/icons/share.svg'

export default function Home() {
  // Barra de navegação horizontal
  const navIcons = [
    { title: 'Home', image: iconHome, link: '/' },
    { title: 'Ministério de Jovens', image: iconJovens, link: '/ministerio-jovens' },
    { title: 'Ministério de Louvor', image: iconLouvor, link: '/ministerio-louvor' },
    { title: 'Oração e Intercessão', image: iconOracao, link: '/oracao-intercessao' },
    { title: 'Ministério Infantil', image: iconPequeninos, link: '/ministerio-infantil' },
    { title: 'Sobre', image: iconSobre, link: '/sobre' },
    { title: 'Contato', image: iconContato, link: '/contato' },
  ]

  // Atalhos verticais para cada página
  const shortcuts = [
    {
      title: 'Cultos e Ministério',
      description:
        'Participe dos cultos semanais e conheça os ministérios da Assembleia de Deus Pedreira.',
      image: slideshowImages[0],
      link: '/contato',
    },
    {
      title: 'Ministério de Jovens',
      description: 'Atividades e encontros para os jovens da congregação.',
      image: slideshowImages[1],
      link: '/ministerio-jovens',
    },
    {
      title: 'Ministério de Louvor',
      description:
        'Nosso ministério se dedica a conduzir a congregação em adoração através da música.',
      image: slideshowImages[2],
      link: '/ministerio-louvor',
    },
    {
      title: 'Oração e Intercessão',
      description: 'Participe de momentos de oração e intercessão.',
      image: slideshowImages[3],
      link: '/oracao-intercessao',
    },
    {
      title: 'Ministério Infantil',
      description: 'Atividades educativas e espirituais para crianças.',
      image: slideshowImages[4],
      link: '/ministerio-infantil',
    },
    {
      title: 'Sobre',
      description: 'Saiba mais sobre a história e missão da Assembleia.',
      image: slideshowImages[5],
      link: '/sobre',
    },
    {
      title: 'Contato',
      description: 'Entre em contato com a nossa congregação.',
      image: slideshowImages[6],
      link: '/contato',
    },
  ]

  return (
    <main className="home-container">
      <Helmet>
        <title>Assembleia de Deus JD Triunfo Pedreira - SP</title>
        <meta
          name="description"
          content="Conheça a Assembleia de Deus Pedreira: cultos, orações, ministério e atividades para toda a família."
        />
      </Helmet>

      {/* H1 principal */}
      <h1 className="home-title">Assembleia de Deus JD Triunfo Pedreira - SP</h1>

      {/* Slideshow */}
      <div className="slideshow-wrapper">
        <Slideshow images={slideshowImages} />
      </div>

      {/* Barra de navegação horizontal de ícones */}
      <nav className="home-nav-horizontal">
        {navIcons.map((icon, idx) => (
          <a key={idx} href={icon.link} className="nav-icon-horizontal">
            <img src={icon.image} alt={icon.title} />
            <span>{icon.title}</span>
          </a>
        ))}
      </nav>

      {/* Atalhos verticais */}
      <div className="home-shortcuts">
        {shortcuts.map((sc, idx) => (
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
      </div>
    </main>
  )
}