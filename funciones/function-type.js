"use strict";
(() => {
    const addNumbers = (a, b) => a + b;
    const greet = (name) => `Hola ${name}`;
    const saveTheWorld = () => `El mundo está salvado!`;
    //let myFunction: Function;
    //* let myFunction: (y:number, z:number) => number;
    //? let myFunction: (y:string) => string;
    let myFunction;
    // myFunction = 10;
    // console.log(myFunction)
    //* myFunction = addNumbers
    //* console.log(myFunction(1, 2))
    //? myFunction = greet
    //? console.log(myFunction('Ander'))
    myFunction = saveTheWorld;
    console.log(myFunction());
})();
