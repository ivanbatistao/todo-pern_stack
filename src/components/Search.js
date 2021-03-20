import React, { useState } from "react"

export default function Search({ onSearch }) {
  const [pokemon, setPokemon] = useState("")

  const onChangeHandler = (e) => {
    // console.log(e.target.value)
    setPokemon(e.target.value)
  }

  const onSubmitHandler = (e) => {
    e.preventDefault()
    onSearch(pokemon)
    setPokemon("")
  }

  return (
    <form className="search-bottom" onSubmit={onSubmitHandler}>
      <input className="search-input" placeholder=" Type here..." type="text" value={pokemon} onChange={onChangeHandler}/>
      <input className="search-submit" type="submit" value="SUBMIT" />
    </form>
  )
}
