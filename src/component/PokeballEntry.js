const PokeballEntry = ({pokemon, onPokemonRemoved}) => {

    const capitalizePokeName = (pokeName) => {
        return pokeName.charAt(0).toUpperCase() + pokeName.slice(1)
    }

    const handleClick = () => {
        onPokemonRemoved(pokemon)
    }

    return (
        <div id="pokeball">
        <h4>No. {pokemon.id}</h4>
        <h2>{capitalizePokeName(pokemon.name)}</h2>
        <img src={pokemon.sprites.front_default} alt={pokemon.name}></img>
        <br></br>
        <button id="remove" onClick={handleClick}>Remove</button>
        </div>
    )
}

export default PokeballEntry;