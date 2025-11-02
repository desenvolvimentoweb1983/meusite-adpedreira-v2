import React, { useState, useEffect } from 'react'
import '../styles/slideshow.css' // importando o CSS do slideshow

export default function Slideshow({ images }) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length)
    }, 4000) // troca de imagem a cada 4 segundos

    return () => clearInterval(interval)
  }, [images.length])

  if (!images || images.length === 0) return null

  return (
    <div className="slideshow">
      <img
        src={images[index]}
        alt={`Slide ${index + 1}`}
        className="slideshow-img"
      />
    </div>
  )
}