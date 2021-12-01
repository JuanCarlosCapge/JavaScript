function saludar (){// se llama a la funcion y al cerrarla se ejecuta lo que es´tá dentro de ella
    console.log('Hola saluda al publico')
}

saludar();

// 
const saludar2 = function(){

    console.log('Hola como estamos por segunda vez')
}

saludar2();


const saludar3 = () =>{
    console.log('Hola por tercera vez');
}

saludar3();


// return

function suma (){
    return 8;
    //otra manera
    // let suma = 8;
    // return suma;
    // si le quito el return me devuelve un no definido 
}

//conole.log(suma());



//funciones con parametros

function hola(nombre){
    console.log('Hola' +nombre);

}
/*
const hola2 = (nombre) >={
    console.log('Hola' +nombre)
}

const hola3 = function(nombre){
    conole.log('hola3 ' +nombre)
}
hola("Chufi");
hola2('Chufi2');
hola3('Chufi3');*/

//ejemplo de return

function sumar (a,b){
    return a+b;
}

const restar = (a,b) =>{
    return a-b;
}
console.log(sumar(100,50));
console.log(sumar(100,80));