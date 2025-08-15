(() => {

    // 3 formas de definir strings
    const batman:string = 'Batman';
    const linternaVerde:string = "Linterna Verde"
    const volvanNegro:string = `Héroe Volvan Negro`

    console.log(` I'm ${batman}`)
    console.log(batman.toUpperCase())

    console.log(batman[10]?.toUpperCase() || 'No está presente')
    // si existe lo presenta en Uppercase sino "No está presente"

})()