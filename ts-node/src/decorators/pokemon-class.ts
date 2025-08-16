function printToConsole(constructor: Function){
    console.log(constructor);
    
}

const printToConsoleConditional = (print: boolean= false):Function => {
    if (print){
        return printToConsole
    } else {
        return () => {}
    }
}

const bloquearPrototipo = function(constructor: Function) {
    Object.seal(constructor)
    Object.seal(constructor.prototype)
}

function CheckValidPokemonId():Function {
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor){
        // console.log({target, propertyKey, descriptor})

        const originalMethod = descriptor.value;

        descriptor.value = (id:number) => {
            if (id < 1 || id > 800) {
                return console.error('El id del pokemomn debe estar entre 1 y 800')
            } else {
                return originalMethod(id)
            }
        }
    }
}

function readonly (isWritable: boolean = true): Function {
    return function(target: any, propertyKey: string){ // en propiedades no hay descriptor
        const descriptor: PropertyDescriptor = {
            get(){
                console.log(this);
                return 'Ander'
            },
            set(this, val){
                // console.log(this, val)
                Object.defineProperty(this, propertyKey,{
                    value: val,
                    writable: !isWritable,
                    enumerable: false
                })
            }
        }
        return descriptor
    }
}




@bloquearPrototipo
@printToConsoleConditional(false)
export class Pokemon {

    @readonly()
    public publicApi: string = 'https://pokeapi.co'

    constructor (
        public name: string
    ){}

    @CheckValidPokemonId()
    savePokemomToDB(id:number){
        console.log(`Pokemon guardado en DB con id ${id}`);
    }

}