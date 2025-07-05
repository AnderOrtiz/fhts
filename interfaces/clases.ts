(()=> {

    interface Xmen {
        name: string;
        realName: string;
        mutantPower(id:number):string;
    }

    interface Human {
        age: number;
    }

    class Mutant implements Xmen, Human{ // implements se utiliza para forzar todo lo que yo quiera de la interfaz
        public age: number;
        public name: string;
        public realName: string;

        public mutantPower(id: number): string {
            return `${this.name} ${this.realName}`
        }
    }


})()