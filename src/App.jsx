import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Navbar from './components/navbar';
import Footer from './components/footer';

import Home from './pages/home';
import Contato from './pages/contato';
import MinisterioJovens from './pages/ministerio-jovens';
import MinisterioLouvor from './pages/ministerio-louvor';
import OracaoIntercessao from './pages/oracao-intercessao';
import EstudosMensagens from './pages/estudos-mensagens';
import MinisterioInfantil from './pages/ministerio-infantil';
import Sobre from './pages/sobre';

// Componente auxiliar para controlar o layout
function Layout({ children }) {
  const location = useLocation();
  const hideNavbarOnPaths = ['/']; // Adicione aqui as rotas onde não quer Navbar

  const showNavbar = !hideNavbarOnPaths.includes(location.pathname);

  return (
    <>
      {showNavbar && <Navbar />}
      {children}
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/ministerio-jovens" element={<MinisterioJovens />} />
          <Route path="/ministerio-louvor" element={<MinisterioLouvor />} />
          <Route path="/oracao-intercessao" element={<OracaoIntercessao />} />
          <Route path="/estudos-mensagens" element={<EstudosMensagens />} />
          <Route path="/ministerio-infantil" element={<MinisterioInfantil />} />
          <Route path="/sobre" element={<Sobre />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;