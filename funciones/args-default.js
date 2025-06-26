"use strict";
(() => {
    // argumentos opcionales van al final
    const fullName = (firstName, lastName, upper = false) => {
        if (upper) {
            return `${firstName} ${lastName || '----'}`.toUpperCase(); //el lastname es opcional
        }
        return `${firstName} ${lastName || '----'}`;
    };
    const name = fullName('Tony', 'Stark', true); // es un parámetro opcional ya que tiene un valor por defaul; 
    console.log({ name });
})();
//# sourceMappingURL=args-default.js.map