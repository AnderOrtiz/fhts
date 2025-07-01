"use strict";
(() => {
    class Avenger {
        static getAvgAge() {
            return this.name;
        }
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
        bio() {
            return `${this.name} (${this.team})`;
        }
    }
    Avenger.avgAge = 35;
    const antman = new Avenger('Antman', 'Capitán', 'Scot Lang');
})();
(() => {
    class Avenger {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
        }
        getFullname() {
            return `${this.name} ${this, this.realName}`;
        }
    }
    class Xmen extends Avenger {
        constructor(name, realName, isMutant) {
            super(name, realName);
            this.isMutant = isMutant;
        }
        getFullNamDesdeXmen() {
            console.log(super.getFullname);
        }
    }
    const wolverine = new Xmen('Wolverine', 'Logan', true);
})();
class Piano {
    constructor(marca, octavas = 8, idDistorciones = []) {
        this.marca = marca;
        this.octavas = octavas;
        this.idDistorciones = idDistorciones;
    }
    custom(mods) {
        switch (this.octavas) {
            case 8:
                mods.push(123);
                break;
            case 6:
                mods.push(456);
                break;
            default:
                mods.push(789);
                break;
        }
    }
}
class ExpensivePiano extends Piano {
    constructor(marca, octavas, idDistorciones, dolby = false) {
        super(marca, octavas, idDistorciones);
        this.dolby = dolby;
        this.custom(idDistorciones);
        if (octavas === 8) {
            this.isDolby();
        }
    }
    isDolby() {
        this.dolby = true;
    }
}
class CheapPiano extends Piano {
    constructor(marca, octavas, idDistorciones, chino) {
        super(marca, octavas, idDistorciones);
        this.chino = chino;
    }
}
const Yamaha = new Piano('Yamaha', 8, [324, 35, 594]);
console.table(Yamaha);
const ExpensiveYamaha = new ExpensivePiano('Yamaha', 8, [324, 35, 594]);
console.table(ExpensiveYamaha);
const ExpensiveYamaha2 = new ExpensivePiano('Yamaha', 6, [324, 35, 594]);
console.table(ExpensiveYamaha2);
const ChaepYamaha = new CheapPiano('Yamaha', 4, [324, 35, 594], true);
console.table(ChaepYamaha);
//# sourceMappingURL=main.js.map