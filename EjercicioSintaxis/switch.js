/* Ejemplo switch */

switch (expresión) {

    case valor1:

    instrucciones;

    break;

    case valor2:

    instrucciones;

    break;

    default:

    sentencias;

    break;

}

  /* Ejemplo de uso switch JavaScript */

  function mostrarMensaje1() {

    switch (mes) {

        case 1:

        alert ("El mes es enero");

        break;

        case 2: alert ("El mes es febrero"); break;

        case 10: alert ("El mes es octubre"); break;

        default: alert ("El mes no es enero, febrero ni octubre"); break;

    }

}