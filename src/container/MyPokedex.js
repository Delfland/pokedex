import React, {useState, useEffect} from "react";
import Dropdown from "../component/Dropdown";
import Pokeball from "../component/Pokeball";
import PokeEntry from "../component/PokeEntry";


const MyPokedex = () => {

    const [allPokemons, setAllPokemons] = useState([]);
    const [selectedPokemon, setSelectedPokemon] = useState(null);
    const [selectedPokemonDetail, setSelectedPokemonDetail] = useState(null);
    const [selectedPokeball, setSelectedPokeball] = useState([]);


    useEffect(() => {
        getPokemons();
    },[])

    useEffect(() => {
        if(selectedPokemon){
            getSinglePokemon();
        }        
    }, [selectedPokemon])

    const getPokemons = function(){
        fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
        .then(res => res.json())
        .then(data => setAllPokemons(data.results))
    }

    const getSinglePokemon = function(){
        fetch(selectedPokemon.url)
        .then(res => res.json())
        .then(data => setSelectedPokemonDetail(data))
    }

    const onPokemonSelected = function(pokemon) {
        setSelectedPokemon(pokemon)
    }

    const onPokeballSelected = function(pokemon) {
        const pokemonsToAdd = [...selectedPokeball]
        if (pokemonsToAdd.length <= 2) {pokemonsToAdd.push(pokemon)}
        setSelectedPokeball(pokemonsToAdd)
    }

    return (
        <>
        <h1>My Pokedex</h1>
        <div id="content">
            <div id='splash'>
                <Dropdown allPokemons={allPokemons} onPokemonSelected={onPokemonSelected}/>
                {selectedPokemonDetail? <PokeEntry selectedPokemon={selectedPokemon} selectedPokemonDetail={selectedPokemonDetail} onPokeballSelected={onPokeballSelected}/> : null}
            </div>
            <div id="aside">
                <img width="512" alt="Pokebola-pokeball-png-0" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Pokebola-pokeball-png-0.png/512px-Pokebola-pokeball-png-0.png"/>
                <h2>My pokeball:</h2>
                {selectedPokeball? <Pokeball selectedPokeball={selectedPokeball}/> : null}
            </div>
        </div>
        </>
    );
}

export default MyPokedex;