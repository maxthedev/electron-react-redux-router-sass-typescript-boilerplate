import {useEffect, useState} from "react";
import {getAll, TPokemon} from "../../services/pokemon";
import PokemonCard from "../../components/PokemonCard";

const Pokemons = () => {
    const [pokemons, setPokemons] = useState<TPokemon[]>([]);

    useEffect(()=>{
        getAll().then(res=>setPokemons(res.data.results))
    }, [])

    return (
        <div>
            {pokemons.map((pokemon, index)=><PokemonCard key={index} position={index} pokemon={pokemon}/>)}
        </div>
    )
}

export default Pokemons