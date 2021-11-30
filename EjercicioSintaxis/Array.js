//Crear un Array

let frutas = ["Manzana", "Banana"]

console.log(frutas.length)
//2

//Acceder a un elemento de Array mediante su índice

let primero = frutas[0]
// Manzana

let ultimo = frutas[frutas.length - 1]
// Banana

//Recorrer un Array

frutas.forEach(function(elemento, indice, array) {
    console.log(elemento, indice);
})
// Manzana 0
// Banana 1

//Añadir un elemento al final de un Array

let nuevaLongitud = frutas.push('Naranja') // Añade "Naranja" al final
// ["Manzana", "Banana", "Naranja"]

//Eliminar el último elemento de un Array

let ultimo = frutas.pop() // Elimina "Naranja" del final
// ["Manzana", "Banana"]

//Encontrar el índice de un elemento del Array

frutas.push('Fresa')
// ["Manzana", "Banana", "Fresa"]

let pos = frutas.indexOf('Banana') // (pos) es la posición para abreviar
// 1