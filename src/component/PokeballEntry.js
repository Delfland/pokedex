const PokeballEntry = ({pokemon}) => {

    const capitalizePokeName = (pokeName) => {
        return pokeName.charAt(0).toUpperCase() + pokeName.slice(1)
    }

    return (
        <>
        <h4>No. {pokemon.id}</h4>
        <h2>{capitalizePokeName(pokemon.name)}</h2>
        <img src={pokemon.sprites.front_default} alt={pokemon.name}></img>
        </>
    )
}

export default PokeballEntry;