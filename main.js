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
        get fullName() {
            return `${this.name} --- ${this.realName}`;
        }
        set fullName(name) {
            if (name.length < 3) {
                throw new Error('Nombre muy corto');
            }
            this.name = name;
        }
        getFullNamDesdeXmen() {
            console.log(super.getFullname);
        }
    }
    const wolverine = new Xmen('Wolverine', 'Logan', true);
    wolverine.fullName = 'Ander';
    console.log(wolverine.fullName);
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
//# sourceMappingURL=main.js.map