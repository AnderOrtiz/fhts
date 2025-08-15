(()=>{

    class Avenger {
        constructor (
            public name: string,
            public realName: string, // puedo acceder desde fuera de la clase
        ){
            // console.log('Constructor Avenger llamado!')
        }
        // private getFullname () { // private se usa solo dentro de esta clase extend no cuenta
        protected getFullname () { // protected se puede extender, pero no se puede usar afuera
            return `${this.name} ${this,this.realName}`
        }
    }

class Xmen extends Avenger {

    constructor(
        name: string, // Esta propiedad es eredada
        realName: string, // Esta propiedad es eredada
        public isMutant:boolean,
    ){
        super(name, realName) // El super se llama tan pronto como se puede
    }

    get fullName(){ //tiene que regresar un valor
        return `${this.name} --- ${this.realName}`
    }

    set fullName(name:string){ // el set no puede llamar mas de un argumento
        if (name.length <  3) {
            throw new Error('Nombre muy corto')
        }
        this.name = name
    }


    getFullNamDesdeXmen(){
        console.log(super.getFullname)
    }

}

const wolverine = new Xmen('Wolverine', 'Logan', true)

// wolverine.fullName = 'Ander'

//console.log(wolverine.fullName) // los getters no llevan parentesis
// wolverine.getFullNamDesdeXmen()
})()