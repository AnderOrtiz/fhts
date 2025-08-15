(() => {

    let avengers:number = 10;

    console.log(avengers)

    const villians:number = 20;

    if(avengers < villians){
        console.log('Estamos en problemas')
    } else {
        console.log('Nos salvamos')
    }

    avengers = Number('55A'); //warning not a number! pero es considerado como un número para js

    console.log({avengers});


})()