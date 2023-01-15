import PokeballEntry from "./PokeballEntry";

const Pokeball = ({selectedPokeball, onPokemonRemoved}) => {

    const pokeballPokemon = selectedPokeball.map((pokemon, index) => {
        return <li key={index}><PokeballEntry pokemon={pokemon} onPokemonRemoved={onPokemonRemoved}/></li>
    })

    return (
        <ul>
            {pokeballPokemon}
        </ul>
    )
}

export default Pokeball;