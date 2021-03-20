import React from "react"
import { Link } from "react-router-dom"

export default function MoreInfo({ moreInfo }) {
  if (moreInfo) {
    return (
      <div className="more-info-container">
        <div>
          <h2 className="more-info-h2">{moreInfo.name.toUpperCase()}</h2>
          <div className="more-info-info-container">
            <div className="more-info-experience">
              <strong>Experience:</strong> {moreInfo.experience}
            </div>
            <div className="more-info-first-ability">
              <strong>First Ability:</strong> {moreInfo.firstAbility}
            </div>
            <div className="more-info-attack">
              <strong>Attack:</strong> {moreInfo.attack}
            </div>
            <Link to="/pokemones" className="go-back-link">
              <p className="go-back">GO BACK</p>
            </Link>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="no-display">
        <p className="no-display-p">
          There are no pokemons to display. Click on the GO BACK buttom, type the name of
          a pokemon or a number (if you want to get a random pokemon) in the
          search bar, hit enter or hit the bottom SUBMIT to get the name of the
          pokemon and an image of it. To display more information about the
          pokemon click on MORE INFO.
        </p>
      </div>
    )
  }
}
