"use strict";
(() => {
    const hero = ['Dr Strange', 100, false];
    hero[0] = 'Ironman'; // solo admite string
    hero[1] = 123; // solo admite string
    hero[2] = false; // solo admite string
    console.log(hero);
})();
