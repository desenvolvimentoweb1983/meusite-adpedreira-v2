import React from "react";
import { Helmet } from "react-helmet-async";
import { FaWhatsapp, FaFacebook, FaInstagram } from "react-icons/fa";
import devWebLuis from "../assets/slideshow2.jpg";
import contatoJoao from "../assets/slideshow3.jpg";
import igrejaFacebook from "../assets/slideshow1.jpg"; // imagem para o card do Facebook e Instagram
import "../styles/contato.css";

export default function Contato() {
  return (
    <main className="contato-container">
      <Helmet>
        <title>Contato - Assembleia de Deus JD Triunfo Pedreira</title>
        <meta
          name="description"
          content="Entre em contato com nossos pastores, o desenvolvedor do site ou acesse nossas redes sociais oficiais."
        />
      </Helmet>

      <h1 className="contato-title">Entre em Contato conosco</h1>

      <div className="contato-grid">
        {/* ===================== Contato Pastor Paulo Rosa ===================== */}
        <div className="contato-card">
          <h2>Pr. Paulo Rosa</h2>
          <p className="contato-funcao">Pastor</p>
          <p className="contato-numero">+55 (19) 99823-7694</p>
          <a
            href="https://wa.me/5519998237694"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp"
          >
            <FaWhatsapp className="whatsapp-icon" />
            Enviar mensagem
          </a>
        </div>

        {/* ===================== Contato Pastor João Batista ===================== */}
        <div className="contato-card">
          <img
            src={contatoJoao}
            alt="Pastor João Batista"
            className="contato-img"
          />
          <h2>Pr. João Batista</h2>
          <p className="contato-funcao">Pastor</p>
          <p className="contato-numero">+55 (19) 99602-1411</p>
          <a
            href="https://wa.me/5519996021411"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp"
          >
            <FaWhatsapp className="whatsapp-icon" />
            Enviar mensagem
          </a>
        </div>

        {/* ===================== Contato Desenvolvedor ===================== */}
        <div className="contato-card">
          <img
            src={devWebLuis}
            alt="Desenvolvedor Web Luís"
            className="contato-img"
          />
          <h2>Luís Oliveira</h2>
          <p className="contato-funcao">Desenvolvedor Web</p>
          <p className="contato-numero">+55 (19) 97408-2724</p>
          <a
            href="https://wa.me/5519974082724"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp"
          >
            <FaWhatsapp className="whatsapp-icon" />
            Enviar mensagem
          </a>
        </div>

        {/* ===================== Card - Facebook da Igreja ===================== */}
        <div className="contato-card">
          <img
            src={igrejaFacebook}
            alt="Assembleia de Deus JD Triunfo Pedreira"
            className="contato-img"
          />
          <h2>Assembleia de Deus JD Triunfo Pedreira</h2>
          <p className="contato-funcao">Página Oficial do Facebook</p>
          <a
            href="https://www.facebook.com/share/1D1RgBLxr6/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-facebook"
          >
            <FaFacebook className="facebook-icon" />
            Visite nosso Facebook
          </a>
        </div>

        {/* ===================== Card - Instagram da Igreja ===================== */}
        <div className="contato-card">
          <img
            src={igrejaFacebook}
            alt="Instagram da Assembleia de Deus JD Triunfo Pedreira"
            className="contato-img"
          />
          <h2>Assembleia de Deus JD Triunfo Pedreira</h2>
          <p className="contato-funcao"> Página Oficial do Instagram</p>
          <a
            href="https://www.instagram.com/adi.pedreira?igsh=MXY2OGo1ejRlOTk3Zw=="
            target="_blank"
            rel="noopener noreferrer"
            className="btn-instagram"
          >
            <FaInstagram className="instagram-icon" />
            Visite nosso Instagram
          </a>
        </div>
      </div>
    </main>
  );
}