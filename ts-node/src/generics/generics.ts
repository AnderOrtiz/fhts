

export const printObject = (argumen:any) => {
    console.log(argumen)
}

export function genericFunction<T>(argument:T):T{
    return argument
}


export const genericFunctionArrow = <T>(argument:T):T => argument