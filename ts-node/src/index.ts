import { Pokemon } from "./decorators/pokemon-class";


const charmander = new Pokemon('Charmander');

// (Pokemon.prototype as any).customName = 'Pikachu'

charmander.savePokemomToDB(50);

console.log(charmander);
