(() => {

    class Avenger {
        // private name:string;
        // public team: string;
        // public realName?: string;
        static avgAge: number = 35;
        static getAvgAge(){
            return this.name;
        }

        constructor(
            private name:string,
            private team:string, 
            public realName?: string,
            // avgAge:number = 55, /* Normalmente esto nunca se hace */
        ){}

        bio() {
            return `${this.name} (${this.team})`
        }


        //     Avenger.avgAge = avgAge; /* Normalmente esto nunca se hace */
        // }
    }

    const antman:Avenger = new Avenger('Antman', 'Capitán', 'Scot Lang');
    // console.log(antman)

    // console.log(Avenger.avgAge)

    // console.log(antman.bio()); // Se ve porque es un propiedad públilca, si fuera privada no se puede
    // console.log(Avenger.getAvgAge())
})()