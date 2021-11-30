/*Por ejemplo, el siguiente código define una función simple llamada
 square ("cuadrado"):*/

function square(number) {
  return number * number;
}

/*Copy to Clipboard
La función square toma un parámetro, llamado number.
 La función consta de una declaración que dice devuelva el parámetro 
 de la función (es decir, number) multiplicado por sí mismo. 
 La instrucción return especifica el valor devuelto por la función:*/

return number * number;
/*Copy to Clipboard
Los parámetros primitivos (como un number) 
se pasan a las funciones por valor; el valor se pasa a la función, 
pero si la función cambia el valor del parámetro, este cambio no se 
refleja globalmente ni en la función que llama.

Si pasas un objeto (es decir, un valor no primitivo,
     como Array o un objeto definido por el usuario) 
     como parámetro y la función cambia las propiedades del objeto, 
     ese cambio es visible fuera de la función, como se muestra en el 
     siguiente ejemplo:*/

function myFunc(theObject) {
  theObject.make = 'Toyota';
}

//[parcial]var mycar = { make: 'Honda', model: 'Accord', year: 1998 };
var x, y;

x = mycar.make; // x obtiene el valor "Honda"

myFunc(mycar);
y = mycar.make; // y obtiene el valor "Toyota"
                // (la propiedad make fue cambiada por la función)



//Esta función puede ser anónima; no tiene por qué tener un nombre.
 //Por ejemplo, la función square se podría haber definido como:

const square = function(number) { return number * number }
var x = square(4) // x obtiene el valor 16

const factorial = function fac(n) { return n < 2 ? 1 : n * fac(n - 1) }

console.log(factorial(3))

/*Las expresiones function son convenientes cuando se pasa una
 función como argumento a otra función. El siguiente ejemplo 
 muestra una función map que debería recibir una función como primer
  argumento y un arreglo como segundo argumento.*/

function map(f, a) {
  let result = []; // Crea un nuevo arreglo
  let i; // Declara una variable
  for (i = 0; i != a.length; i++)
    result[i] = f(a[i]);
  return result;
}



/*En el siguiente código, la función recibe una función 
definida por una expresión de función y la ejecuta por cada 
elemento del arreglo recibido como segundo argumento.*/

function map(f, a) {
  let result = []; // Crea un nuevo arreglo
  let i; // Declara una variable
  for (i = 0; i != a.length; i++)
    result[i] = f(a[i]);
  return result;
}
const f = function(x) {
   return x * x * x;
}
let numbers = [0, 1, 2, 5, 10];
let cube = map(f,numbers);
console.log(cube);