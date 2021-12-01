let persona = {

    nombre:'Juan Carlos',
    nombreClave:'Chufi',
    vivo: false,
    edad: 31,
    coordenadas:{
        lat:0.333333,
        lng: -23.454554
    },
    trajes:['Mark I','Mark XXV','Hulkvuster'],
    direccion:{
        zip:'102212, 232323',
        ubicacion:'Colmenar viejo, Madrid'
    }


};

console.log(persona);
console.log('Nombre ' + persona.nombre);
console.log('Edad: '+ persona['edad']);

//borrar objeto
delete persona.edad;
console.log(persona)

//agregar objetos 
persona.vivo = false;
console.log(persona)

//visualizar valor indice

const vista1 = Object.entries(persona);
console.log(persona)

//visualizar como array

const vista2 = Object.getOwnPropertyNames(persona);
console.log(vista2)

//vista array y valores

const vista3= Object.values(persona);
console.log(vista3)