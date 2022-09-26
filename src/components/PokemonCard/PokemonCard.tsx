import {TPokemon} from "../../services/pokemon";

interface IProps {
    pokemon:TPokemon
    position:number
}

const PokemonCard = ({position, pokemon}:IProps) => {
    return (
        <div>
            <p>Pokemon n°{position+1}</p>
            <p>URL : {pokemon.url}</p>
            <p>NAME : {pokemon.name}</p>
        </div>
    );
};

export default PokemonCard;