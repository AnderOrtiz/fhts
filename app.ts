// Crear interfaces

// Cree una interfaz para validar el auto (el valor enviado por parametro)

interface auto {
    encender: boolean;
    velocidadMaxima: number;
    acelerar(): void;
}

const conducirBatimovil = (auto: auto): void => {
    auto.encender = true;
    auto.velocidadMaxima = 100;
    auto.acelerar();
}

const batimovil: auto = {
    encender: false,
    velocidadMaxima: 0,
    acelerar() {
        console.log("...... gogogo!!!");
    }
}

// Cree una interfaz con que permita utilzar el siguiente objeto
// utilizando propiedades opcionales


interface Guason {
    reir?: boolean;
    comer?: boolean;
    llorar?: boolean;
}

const guason: Guason = {
    reir: true,
    comer: true,
    llorar: false
}

const reir = (guason:Guason): void => {
    if (guason.reir) {
        console.log("JAJAJAJA");
    }
}


// Cree una interfaz para la siguiente funcion

interface cities {
    (ciudadanos:string[]): number;
}

const ciudadGotica:cities = (ciudadanos: string[]): number => {
    return ciudadanos.length;
}

// Cree una interfaz que obligue crear una clase
// con las siguientes propiedades y metodos

/*
propiedades:
    - nombre
    - edad
    - sexo
    - estadoCivil
    - imprimirBio(): void // en consola una breve descripcion.
*/

interface persona {
    nombre: string;
    edad: number;
    sexo: string;
    estadoCivil: string
    imprimirBio: () => void;
}

class Persona implements persona{
    public nombre: string;
    public edad: number;
    public sexo: string;
    public estadoCivil: string;

    imprimirBio ():void {
        console.log(this.nombre)
    };
}