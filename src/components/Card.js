import React from "react"
import { Link } from "react-router-dom"

export default function Card({
  name,
  id,
  onClose,
}) {
  return (
    <div className="card">
      <button className="button-close" onClick={onClose}>
        X
      </button>
      <h1 className="poke-name"> {name} </h1>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${id}.gif`}
      />
      <Link to={`/pokemones/${id}`} className="more-info-link" >
        <p className="more-info">MORE INFO</p>
      </Link>
    </div>
  )
}
