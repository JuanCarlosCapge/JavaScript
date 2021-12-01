// esperar que una ejecución termine

const promesa = new Promise((resolve,reject)=>{

    setTimeout(() =>{

        const exito= true;

        if(exito){
            resolve();
        }else{
            reject();
        }


    },4000);

})

promesa.then(() =>{
    alert("Exito");
});

promesa.catch(() =>{
    alert("No funciona");
});