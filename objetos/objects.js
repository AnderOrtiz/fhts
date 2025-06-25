"use strict";
(() => {
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Súper velocidad', 'Viajar en el tiempo'],
    };
    //! no se puede agregar mas cosas despues de la definición del objeto
    flash = {
        name: 'Clark Kent',
        //age: 60, // es opcional
        powers: ['Súper fuerza'],
        getName() {
            return this.name;
        },
    };
    console.log(flash);
})();
