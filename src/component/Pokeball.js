import PokeballEntry from "./PokeballEntry";

const Pokeball = ({selectedPokeball}) => {

    const pokeballPokemon = selectedPokeball.map((pokemon, index) => {
        return <li key={index}><PokeballEntry pokemon={pokemon}/></li>
    })

    return (
        <ul>
            {pokeballPokemon}
        </ul>
    )
}

export default Pokeball;