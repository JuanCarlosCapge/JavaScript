class Persona{


    nombre= '';
    apellido = '';
    email ='';
    codigo = '';
    frase =''
    
    constructor(nombre = 'sin valor',
    apellido='sin valor',
    email='sin valor'){
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        
    }
    // codigo fuente cargo con un metodo

setCodigo(codigo){
    this.codigo = codigo;

}
setFrase(frase){
    this.frase = frase;

}


getFrase(){
    return this.codigo;
}

getCodigo(){
    return this.codigo
}


}
    
    const objPersona = new Persona('Chufi','Perdraza','chufi@gmail.com');
    objPersona.setCodigo("putoAmo")
    objPersona.setFrase("merengue merengue")
    
    console.log(objPersona);
    console.log(objPersona.getCodigo())
    console.log(objPersona.getFrase())

    const objPersona2 = new Persona('Carlos','Perdraza','carlos@gmail.com');
    objPersona.setCodigo("castita")
    objPersona.setFrase("hala madrid merengue")

    console.log(objPersona2);
    console.log(objPersona.getCodigo())
    console.log(objPersona.getFrase())


