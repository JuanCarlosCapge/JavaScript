let autos = ['Ferrari','Porche','Mercedes', 'BMV'];

//while

let i = 0;
while(i< autos.length){
    console.log(autos[i])
    i++
}

//do while

let j = 0;
do{
    console.log('do while: ' ,[j]);
    j++;
}while(j < autos.length)


let hero = ['Goku','Vegeta','Freeazer','Broly','Bobo'];

//for

for(let i = 0 ; i < hero.length; i++){
    console.log(hero[i]);
}

for(let i in hero){
    console.log('Version 2: ' +hero[i]);
}

for(let heros of hero){
    console.log('version 3: ' +heros)
}