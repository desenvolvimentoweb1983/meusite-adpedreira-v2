import React from "react";
import { Helmet } from "react-helmet-async";
import {
  FaWhatsapp,
  FaFacebook,
  FaMapMarkerAlt,
  FaExternalLinkAlt,
} from "react-icons/fa";
import devWebLuis from "../assets/logoLinkedIn4.png";
import contatoJoao from "../assets/slideshow3.jpg";
import contatoPaulo from "../assets/slideshow42.jpg";

import igrejaFacebook from "../assets/slideshow1.jpg"; 
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
          <img
            src={contatoPaulo}
            alt="Pastor Paulo Rosa"
            className="contato-img"
          />
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
      </div>

      {/* ===================== Endereço e Como Chegar ===================== */}
      <section className="contato-endereco">
        <h2>
          <FaMapMarkerAlt className="map-icon" />
          Endereço e Como Chegar
        </h2>
        <p>Rua João Batista, 190 - Jardim Triunfo, Pedreira - SP</p>

        <iframe
          title="Localização - Assembleia de Deus JD Triunfo Pedreira"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3678.3733136912213!2d-46.91184702474536!3d-22.74472337938195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8d77cfa3d0479%3A0x42014dc7f05b8a0!2sR.%20Jo%C3%A3o%20Batista%2C%20190%20-%20Jardim%20Triunfo%2C%20Pedreira%20-%20SP%2C%2013930-000!5e0!3m2!1spt-BR!2sbr!4v1730859000000!5m2!1spt-BR!2sbr"
          width="100%"
          height="350"
          style={{ border: 0, borderRadius: "10px", marginTop: "10px" }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>

        <a
        href="https://www.google.com/maps/search/?api=1&query=R.+Jo%C3%A3o+Batista,+190,+Pedreira+-+SP"
        target="_blank"
        rel="noopener noreferrer"
        className="btn-maps"
>
        <FaExternalLinkAlt style={{ marginRight: "6px" }} />
        Abrir no Google Maps
        </a>

      </section>
    </main>
  );
}