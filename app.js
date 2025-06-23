"use strict";
(() => {
    // Tipos
    const batman = 'Bruce';
    const superman = 'Clark';
    const existe = false;
    // Tuplas
    const parejaHeroes = [batman, superman];
    const villano = ['Lex Lutor', 5, true];
    // Arreglos
    const aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    //Enumeraciones
    let power;
    (function (power) {
        power[power["fuerzaAcuaman"] = 0] = "fuerzaAcuaman";
        power[power["fuerzaSuperman"] = 100] = "fuerzaSuperman";
        power[power["fuerzaFlash"] = 5] = "fuerzaFlash";
        power[power["fuerzaBatman"] = 1] = "fuerzaBatman";
    })(power || (power = {}));
    const fuerzaFlash = power.fuerzaFlash;
    const fuerzaSupermanpower = power.fuerzaSuperman;
    const fuerzaBatmanpower = power.fuerzaBatman;
    const fuerzaAcuamanpower = power.fuerzaAcuaman;
    // Retorno de funciones
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    // Aserciones de Tipo
    const poder = '100';
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
