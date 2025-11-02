import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/navbar.css' // Caminho correto para a pasta styles

const pages = [
  { name: 'Home', path: '/' },
  { name: 'Grupo de Jovens', path: '/ministerio-jovens' },
  { name: 'Louvores', path: '/ministerio-louvor' },
  { name: 'Orações', path: '/oracao-intercessao' },
  { name: 'Estudo Bíblico', path: '/estudos-mensagens' },
  { name: 'Pequeninos', path: '/ministerio-infantil' },
  { name: 'Sobre', path: '/sobre' },
  { name: 'Contato', path: '/contato' },
]

export default function Navbar() {
  return (
    <nav className="navbar">
      {pages.map((page) => (
        <Link key={page.name} to={page.path} className="nav-icon">
          {page.name}
        </Link>
      ))}
    </nav>
  )
}