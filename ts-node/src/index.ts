import { getPokemon } from "./generics/get-pokemom";

getPokemon(4)
    .then(resp => console.log(resp.name))
    .catch(error => console.error(error))
    .finally(() => console.log('Game over'))