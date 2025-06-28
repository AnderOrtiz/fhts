(()=> {

    type Avenger = {
        name:string,
        weapon: string;
    }

    const ironman: Avenger = {
        name: 'Ironman',
        weapon: 'Aemorsuit'
    }

    const captainAmerica: Avenger = {
        name: 'Capitán América',
        weapon: 'Shild'
    }

    const thor: Avenger = {
        name: 'Thor',
        weapon: 'Mjlnir'
    }

    const avengers:Avenger[] = [ironman, thor, captainAmerica]

    for (const avenger of avengers) {
        console.log(avenger.name , avenger.weapon)
    }



})()