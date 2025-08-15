import axios from "axios";
import { Pokemon } from "../interfaces";


export const getPokemon = async(pokemonId:number):Promise<Pokemon> => {
    
    const resp = await axios.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${ pokemonId }`);
    //la interfas sirve para decirle a ts como luse un objeto, no cambia la respuesta

    console.log(resp);
    console.log(resp.data.name);

    return resp.data;
}
