(()=>{
    //rest sirve para mandar mas argumentos

    const fullName = (firstName:string, ...restArgs:string[]):string =>{
        return `${firstName} ${restArgs.join(' ')}`;
    }

    const superman = fullName('Clark', 'Joseph', 'Ken');

    console.log({superman})

})()