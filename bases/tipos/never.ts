"use strict";
(() => {


    //never es un función que retorna un error
    const error = (message: string): (never | number) => {

        if (false) {
            throw new Error(message)
        }
        
        return 1
    }


    error('auxilio')


})();
