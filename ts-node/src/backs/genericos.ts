import { genericFunction, genericFunctionArrow, printObject } from "../generics/generics";
import { Hero, Villain } from "../interfaces";

// printObject('hello')
// printObject(new Date())


// console.log(genericFunctionArrow('Generic Hello').toUpperCase())
// console.log(genericFunction(3.1416).toFixed(2))
// console.log(genericFunction(new Date()).getDate())

const deadpoll = {
    name: 'Deadpoll',
    realName: 'Wade Winston Wilson',
    dangerLevel: 130,
}

console.log(genericFunctionArrow<Villain>(deadpoll).dangerLevel)