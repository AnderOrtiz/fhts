/* una clase abstracta no sirve para crear instacias, sirve para ya sea crear otras clases 
o que otras clases sean etendidas de ellas o asegurarme que un argumento puede ser de 
cualquier otro pipo pero siempre y aundo implemente las caracteristicas de la clase abtracta */

(()=>{

    abstract class Mutante {
        constructor(
            public name:string, 
            public realName:string
        ) {}
    }

    class Xmen extends Mutante {
        salvarMundo() {
            return 'Mundo salvado'
        }
    }

    class Villian extends Mutante {
        consquistarMundo() {
            return 'Mundo conquistado'
        }
    }

    const woleverine = new Xmen('Wolverine', 'Logan')

    const magneto  = new Villian('Magneto', 'Magnus')

    // console.log(woleverine.salvarMundo())
    // console.log(magneto.consquistarMundo())

const printName = (character:Mutante) => console.log(character.realName)

printName(woleverine);


})()