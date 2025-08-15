(()=>{
    // argumentos opcionales

    const fullName = (firstName:string, lastName?:string):string => {
        return `${firstName} ${lastName || '----'}` //el lastname es opcional
    }

    const name = fullName('Tony', 'Stark');
    console.log({name});

})()