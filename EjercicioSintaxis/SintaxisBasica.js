/* No se tienen en cuenta los espacios en blanco y las nuevas líneas:
 el intérprete de JavaScript ignora cualquier espacio en blanco sobrante,
  por lo que el código se puede ordenar de forma adecuada para entenderlo mejor
. (tabulando las líneas, añadiendo espacios, creando nuevas líneas, etc.)*/

var palabra = "Hola";
var saludo = 
"Hola Mundo"

/*Diferencia las letras mayúsculas de las minúsculas, 
es decir case sensitive. Lo que significa que si definimos estas variables, 
de la siguiente manera, ambas se crearan sin ningún problema y con su valor asignado.*/

var numero = 1;
var Numero = 2;

N/*o se define el tipo de las variables: al crear una variable,
 no es necesario indicar el tipo de dato que almacenará. De esta forma, 
 una misma variable puede almacenar diferentes tipos de datos
  durante la ejecución del script.*/

var dato = 1;
dato = "Tutorial Sintaxis JavaScript";

/*JavaScript tiene tres tipos de declaraciones de variables.

var
Declara una variable, opcionalmente la inicia a un valor.
let
Declara una variable local con ámbito de bloque, opcionalmente la inicia a un valor.
const
Declara un nombre de constante de solo lectura y ámbito de bloque.*/

var
let
const

var a;
console.log('El valor de a es ' + a); // El valor de a es undefined

console.log('El valor de b es ' + b); // El valor de b es undefined
var b;
// Esto puede desconcertarte hasta que leas 'Elevación de variable' a continuación

console.log('El valor de c es ' + c); // Error de referencia no detectado: c no está definida

let x;
console.log('El valor de x es ' + x); // El valor de x es undefined

console.log('El valor de y es ' + y); // Error de referencia no detectada: y no está definida
let y;