"use strict";
(() => {
    // argumentos opcionales
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName || '----'}`; //el lastname es opcional
    };
    const name = fullName('Tony', 'Stark');
    console.log({ name });
})();
