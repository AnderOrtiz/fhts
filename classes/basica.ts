(() => {

    class Avenger {
        // private name:string;
        // public team: string;
        // public realName?: string;
        static avgAge: number = 35;

        constructor(
            private name:string,
            private team:string, 
            public realName?: string,
            // avgAge:number = 55, /* Normalmente esto nunca se hace */
        ){}
        //     Avenger.avgAge = avgAge; /* Normalmente esto nunca se hace */
        // }
    }

    const antman:Avenger = new Avenger('Antman', 'Capitán', 'Scot Lang');
    console.log(antman)


    console.log(Avenger.avgAge)

})()