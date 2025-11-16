import React from 'react' 
import { Helmet } from 'react-helmet-async'
import Slideshow from '../components/slideshow'
import '../styles/estudosMensagens.css'
import QuizBiblico from "../components/QuizBiblico";

// Imagens do slideshow
import slideshow21 from '../assets/slideshow21.jpg'
import slideshow26 from '../assets/slideshow26.jpg'

export default function EstudosMensagens() {
  return (
    <main className="palavra-container">
      <Helmet>
        <title>Estudos e Mensagens - Assembleia de Deus JD Triunfo Pedreira</title>
        <meta
          name="description"
          content="Estudos bíblicos e mensagens inspiradas pela Palavra de Deus – cresça espiritualmente e aprofunde seu relacionamento com o Senhor."
        />
      </Helmet>

      {/* 1. Cabeçalho */}
      <section className="palavra-header">
        <h1>Estudo Bíblico</h1>
        <p>“A fé vem pelo ouvir, e o ouvir pela Palavra de Deus.” – Romanos 10:17</p>
      </section>

      {/* 2. Slideshow */}
      <div className="palavra-slideshow">
        <Slideshow images={[slideshow21, slideshow26]} />
      </div>

{/* 3. Texto bíblico */}
<section className="palavra-texto">
  <h2>Atos dos Apóstolos 2:14–22</h2>
  <h3>O discurso de Pedro</h3>

  <p><span className="versiculo">14</span> – Então Pedro, pondo-se em pé com os onze, levantou a sua voz e disse-lhes:
  Homens judeus e todos os que habitais em Jerusalém, seja-vos isto notório, e escutai as minhas palavras.</p>

  <p><span className="versiculo">15</span> – Estes homens não estão embriagados, como vós pensais, sendo apenas a terceira hora do dia.</p>

  <p><span className="versiculo">16</span> – Mas isto é o que foi dito pelo profeta Joel:</p>

  <p><span className="versiculo">17</span> – E nos últimos dias acontecerá, diz Deus, que do meu Espírito derramarei sobre toda a carne;
  e os vossos filhos e as vossas filhas profetizarão, os vossos jovens terão visões, e os vossos velhos sonharão sonhos.</p>

  <p><span className="versiculo">18</span> – E também do meu Espírito derramarei sobre os meus servos e sobre as minhas servas naqueles dias, e profetizarão.</p>

  <p><span className="versiculo">19</span> – E farei aparecer prodígios em cima no céu e sinais embaixo na terra: sangue, fogo e vapor de fumo.</p>

  <p><span className="versiculo">20</span> – O sol se converterá em trevas, e a lua em sangue, antes que venha o grande e glorioso dia do Senhor.</p>

  <p><span className="versiculo">21</span> – E acontecerá que todo aquele que invocar o nome do Senhor será salvo.</p>

  <p><span className="versiculo">22</span> – Homens israelitas, ouvi estas palavras: A Jesus Nazareno, homem aprovado por Deus entre vós
  com maravilhas, prodígios e sinais, que Deus por ele fez no meio de vós, como vós mesmos bem sabeis.</p>
</section>

{/* 4. Reflexão cristã */}
<section className="palavra-reflexao">
  <h3>Reflexão</h3>
  <p>
    Atos 2:14–22 revela um momento decisivo na história da igreja: Pedro, agora cheio do Espírito Santo, se levanta diante
    da multidão e anuncia com coragem que as antigas profecias estavam se cumprindo. O derramamento do Espírito não era
    confusão, mas o início de uma nova fase no plano de Deus para a humanidade.
  </p>

  <p>
    Ao citar o profeta Joel, Pedro nos lembra que o Espírito Santo foi prometido para alcançar todas as pessoas — jovens,
    velhos, homens, mulheres, servos e servas. Isso mostra que a obra de Deus é inclusiva e poderosa, convidando todos a
    participar do Seu propósito.
  </p>

  <p>
    Pedro afirma também que Jesus é o centro de toda essa mensagem: o Messias enviado por Deus, confirmado por sinais e
    maravilhas. Assim, este texto nos chama a reconhecer Jesus como Senhor e a permitir que o Espírito Santo nos capacite
    a viver com ousadia e fé, anunciando ao mundo que todo aquele que invocar o nome do Senhor será salvo.
  </p>
</section>

      {/* Quiz Bíblico */}
<section className="palavra-quiz">
  <h2>Teste seus conhecimentos bíblicos!</h2>
  <QuizBiblico />
</section>

    </main>
  )
}