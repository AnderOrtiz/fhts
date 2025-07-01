class Piano{
    constructor(
        public marca:string,
        public octavas:number = 8,
        public idDistorciones:number[] = [],
    ){}

    protected custom (mods:number[]):void{
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

    constructor(
        marca:string,
        octavas:number,
        idDistorciones:number[],
        public dolby:boolean = false
    ){
        super(marca, octavas, idDistorciones)

        this.custom(idDistorciones)
        
        if ( octavas === 8){
            this.isDolby()
        }
    }

    private isDolby (): void{
        this.dolby = true
    }

}

class CheapPiano extends Piano {

    constructor(
        marca: string,
        octavas:number,
        idDistorciones: number[],
        public chino: boolean
    ){
        super(marca, octavas, idDistorciones)
    }
}


const Yamaha = new Piano('Yamaha', 8, [324, 35, 594])
console.table(Yamaha)

const ExpensiveYamaha = new ExpensivePiano('Yamaha', 8, [324, 35, 594])
console.table(ExpensiveYamaha)

const ExpensiveYamaha2 = new ExpensivePiano('Yamaha', 6, [324, 35, 594])
console.table(ExpensiveYamaha2)

const ChaepYamaha = new CheapPiano('Yamaha', 4, [324, 35, 594], true)
console.table(ChaepYamaha)
