(()=>{
    // se puede hacer pero es poco comun hacerlo

    interface addTwoNumbers {
        (a:number,b:number):number;
    }

    let addNumbersFunction: addTwoNumbers;

    addNumbersFunction = (a:number, b:number): number => {
        return 3
    }

})()