import React from 'react'
import { Helmet } from 'react-helmet-async'
import Slideshow from '../components/slideshow'
import '../styles/oracaoIntercessao.css'

// Imagens do slideshow
import slideshow5 from '../assets/slideshow5.jpg'
import slideshow10 from '../assets/slideshow10.jpg'
import slideshow20 from '../assets/slideshow20.jpg'
import slideshow37 from '../assets/slideshow37.jpg'

export default function OracaoIntercessao() {
  return (
    <main className="oracao-container">
      <Helmet>
        <title>Ministério de Oração e Intercessão - AD JD Triunfo Pedreira</title>
        <meta
          name="description"
          content="Participe do Ministério de Oração e Intercessão — um tempo de comunhão, fé e busca pela presença de Deus."
        />
      </Helmet>

      {/* 1. Cabeçalho */}
      <section className="oracao-header">
        <h1>Ministério de Oração</h1>
        <p>“Orai sem cessar.” – 1 Tessalonicenses 5:17</p>
      </section>

      {/* 2. Slideshow */}
      <div className="oracao-slideshow">
        <Slideshow images={[slideshow5, slideshow10, slideshow20, slideshow37]} />
      </div>

      {/* 3. Texto introdutório */}
      <section className="oracao-texto">
        <h2>Um Ministério de Fé e Clamor</h2>
        <p>
          O Ministério de Oração é um espaço dedicado a buscar a presença de Deus por
          meio da oração constante, súplica e gratidão.
        </p>

        <p>
          Acreditamos que a oração é a chave que abre portas impossíveis e fortalece o coração dos
          servos do Senhor. Junte-se a nós em nossos momentos de oração!
        </p>

        <p>
          <strong>Venha participar conosco!</strong> Nossos Cultos de Libertação acontecem semanalmente nas sextas-feiras as 19:30 horas</p>
      </section>
    </main>
  )
}