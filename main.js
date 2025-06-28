"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
(() => {
    const avenger = {
        nick: 'Samuel L. Jackson',
        ironman: 'Robert Downey Jr',
        vision: 'Paul Bettany',
        activo: true,
        poder: 1500,
    };
    const { poder, vision } = avenger;
    const printerAnvengers = (_a) => {
        var { ironman } = _a, resto = __rest(_a, ["ironman"]);
        console.log(ironman, resto);
    };
    const avengerArr = ['Cap. América', true, 150.15];
    const [cap, ironman, seriaUnNumero] = avengerArr;
})();
(() => {
    const ironman = {
        name: 'Ironman',
        weapon: 'Aemorsuit'
    };
    const captainAmerica = {
        name: 'Capitán América',
        weapon: 'Shild'
    };
    const thor = {
        name: 'Thor',
        weapon: 'Mjlnir'
    };
    const avengers = [ironman, thor, captainAmerica];
    for (const avenger of avengers) {
        console.log(avenger.name, avenger.weapon);
    }
})();
(() => {
    const nombre = 'Ander';
    const getName = () => {
        console.log('viejo Getname');
    };
})();
//# sourceMappingURL=main.js.map