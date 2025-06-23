"use strict";
(() => {
    //rest sirve para mandar mas argumentos
    const fullName = (firstName, ...restArgs) => {
        return `${firstName} ${restArgs.join(' ')}`;
    };
    const superman = fullName('Clark', 'Joseph', 'Ken');
    console.log({ superman });
})();
