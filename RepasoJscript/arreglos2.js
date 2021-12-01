let juegos = ['Goku', 'Spiderman','Yoshi','Mario']

//foreach recorre nuestro elemento

juegos.forEach((elemento,indice,arr)=>{
   
    console.log({elemento,indice,arr});
});

//push agregar un elemento al final del arreglo

let nuevoJuego = juegos.push('Venon');
console.log({juegos});

//metodo para agregarlo al principio

nuevoJuego = juegos.unshift('Oliver Atom');
console.log({nuevoJuego,juegos})

//pop borrar el ultimo elemento del array

let borrarJuego = juegos.pop();
console.log({borrarJuego,juegos})

//splice borrar elementos específicos 

let borrarElemento = juegos.splice(1,2);
console.log({juegos,borrarJuego})

//encontrar una posción

let encontrarJuego = juegos.indexOf('oliver Atom')
console.log({encontrarJuego})