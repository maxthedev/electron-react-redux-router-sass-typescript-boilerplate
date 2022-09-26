import axios from 'axios'
import {IPokemonApi} from "./type";

export const getAll = () => {
    return axios.get<IPokemonApi>('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0')
}

export type { IPokemonApi, TPokemon } from './type';