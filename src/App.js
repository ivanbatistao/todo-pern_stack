import React, { useState } from "react"
import "./App.css"
import Home from "./components/Home"
import NavBar from "./components/NavBar"
import Cards from "./components/Cards"
import MoreInfo from "./components/MoreInfo"

import { Route } from "react-router-dom"

function App() {
  const [pokemones, setPokemones] = useState([])

  function onSearch(pokemon) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
      .then((r) => r.json())
      .then((resource) => {
        // console.log(resource)
        if (resource.abilities !== undefined) {
          const pokemon = {
            name: resource.name,
            experience: resource.base_experience,
            id: resource.id,
            firstAbility: resource.abilities[0].ability.name,
            attack: resource.base_experience,
          }
          setPokemones((oldPokemones) => [...oldPokemones, pokemon])
        } else {
          alert("Pokemon Not Found")
        }
      })
  }

  console.log(pokemones)

  function onClose(id) {
    setPokemones((oldPokemones) => oldPokemones.filter((p) => p.id !== id))
  }

  function onFilter(pokemonId) {
    let poke = pokemones.filter(p => p.id === parseInt(pokemonId))
    console.log(poke)
    if (poke.length > 0) {
      return poke[0]
    } else {
      return null
    }

  }


  return (
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route path="/pokemones">
        <header className="App-header">
          <NavBar onSearch={onSearch} />
        </header>
      </Route>
      <Route
        exact
        path="/pokemones/:pokemonId"
        render={({ match }) => 
          <MoreInfo moreInfo={onFilter(match.params.pokemonId)} />
        }
      />
      <Route
        exact
        path="/pokemones"
        render={() => <Cards pokemones={pokemones} onClose={onClose} />}
      />
    </div>
  )
}

export default App
