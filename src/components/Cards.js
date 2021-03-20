import React from 'react';
import Card from './Card'

export default function Cards ( {pokemones, onClose} ) {
    return (
        <div className="poke-cards-container" >
            { pokemones.map((pokemon, i) => 
                <Card 
                    key = {i}
                    name = {pokemon.name.toUpperCase()}
                    experience = {pokemon.experience}
                    id = {pokemon.id}
                    firstAbility = {pokemon.firstAbility}
                    attack = {pokemon.attack}
                    onClose = {() => onClose(pokemon.id)}
                />
            )
            }
        </div>
    )
}