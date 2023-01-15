import React, {useState} from 'react';
import './PokeEntry.css';
import PokeAbilities from './PokeAbilities';

const PokeEntry = ({selectedPokemon, selectedPokemonDetail, onPokeballSelected}) => {

    const pokeHeight = selectedPokemonDetail.height * 10;
    const pokeWeight = selectedPokemonDetail.weight / 10;

    const capitalizePokeName = (pokeName) => {
        return pokeName.charAt(0).toUpperCase() + pokeName.slice(1)
    }

    const pokeAbility = selectedPokemonDetail.abilities.map((ability, index) => {
        return <PokeAbilities key={index} ability={ability} index={index}/>
    })

    const handleClick = () => {
        onPokeballSelected(selectedPokemonDetail)
    }

    return (
        <>
        <h4>No. {selectedPokemonDetail.id}</h4>
        <h2>{capitalizePokeName(selectedPokemon.name)}</h2>
        <img src={selectedPokemonDetail.sprites.front_default} alt={selectedPokemon.name}></img>
        <p>Height: {pokeHeight} cms </p>
        <p>Weight: {pokeWeight} kg</p>
        <br></br>
        <h4>Abilities:</h4>
        <ol>{pokeAbility}</ol>
        <button onClick={handleClick} >Add to Pokeball</button>
        </>
    )
}

export default PokeEntry;