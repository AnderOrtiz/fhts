import { Pokemon } from "./decorators/pokemon-class";


const charmander = new Pokemon('Charmander');

// (Pokemon.prototype as any).customName = 'Pikachu'

// charmander.savePokemomToDB(50);

charmander.publicApi = 'htts://a.com'
console.log(charmander);
