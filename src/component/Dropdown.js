import DropdownOption from "./DropdownOption"

const Dropdown = ({allPokemons, onPokemonSelected}) => {

    const pokeOption = allPokemons.map((pokemon, index) => {
        return <DropdownOption key={index} pokemon={pokemon} index={index} value={index}/>
    })

    const handleChange = (event) => {
        const chosenPokemon = allPokemons[event.target.value]
        onPokemonSelected(chosenPokemon)
    }

    return (
        <select value="" onChange={handleChange}>
            <option value="" selected>Select a Pokemon</option>
            {pokeOption}
        </select>
    )
}

export default Dropdown;