(()=>{

    type Avengers = {
    nick: string;
    ironman: string;
    vision: string;
    activo: boolean;
    poder: number;
    }


    const avenger = {
        nick:'Samuel L. Jackson',
        ironman: 'Robert Downey Jr',
        vision: 'Paul Bettany',
        activo: true,
        poder: 1500,
    }

    const {poder, vision} = avenger

    // console.log(poder.toFixed(2), vision.toUpperCase())

    const printerAnvengers = ({ironman, ...resto}:Avengers) => {
        console.log(ironman, resto)
    }

printerAnvengers(avenger);

})()