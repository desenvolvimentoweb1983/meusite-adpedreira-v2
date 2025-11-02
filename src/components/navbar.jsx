import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/navbar.css' // Caminho correto para a pasta styles

const pages = [
  { name: 'Home', path: '/' },
  { name: 'Jovens', path: '/ministerio-jovens' },
  { name: 'Louvor', path: '/ministerio-louvor' },
  { name: 'Oremos', path: '/oracao-intercessao' },
  { name: 'Palavra', path: '/estudos-mensagens' },
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