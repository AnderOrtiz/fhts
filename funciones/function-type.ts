(() => {

    const addNumbers = (a: number, b:number):number => a + b;
    const greet = (name:string):string => `Hola ${name}`;
    const saveTheWorld = ():string => `El mundo está salvado!`

    //let myFunction: Function;
    //* let myFunction: (y:number, z:number) => number;
    //? let myFunction: (y:string) => string;
    let myFunction: () => string;

    // myFunction = 10;
    // console.log(myFunction)

    //* myFunction = addNumbers
    //* console.log(myFunction(1, 2))

    //? myFunction = greet
    //? console.log(myFunction('Ander'))

    myFunction = saveTheWorld
    console.log(myFunction())

})()