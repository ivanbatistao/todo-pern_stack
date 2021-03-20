import React from "react"
import { Link } from "react-router-dom"

export default function Home() {
  return (
    <div className="home">
      <img
        className="img-home"
        src="https://www.pikpng.com/pngl/b/59-590145_pokeball-8-bit-pixel-art-pokemon-clipart.png"
        alt="logo-home"
      />
      <Link to="/pokemones" className="start">
        <div className="start-start-container">
            <div className="start-start">START</div>
        </div>
      </Link>
    </div>
  )
}
