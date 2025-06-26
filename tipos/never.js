"use strict";
(() => {
    //never es un función que retorna un error
    const error = (message) => {
        if (false) {
            throw new Error(message);
        }
        return 1;
    };
    error('auxilio');
})();
//# sourceMappingURL=never.js.map