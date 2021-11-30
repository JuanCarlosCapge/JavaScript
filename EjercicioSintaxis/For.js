/*Un ciclo for se repite hasta que una condición especificada
 se evalúe como false. El bucle for de JavaScript es similar al
  bucle for de Java y C.

Una declaración for tiene el siguiente aspecto:*/

for ([expresiónInicial]; [expresiónCondicional]; [expresiónDeActualización])
  instrucción

  var i 
for (i=0;i<=10;i++) { 
   	document.write(i)
   	document.write("<br>") 
}

/*Por ejemplo si queremos escribir los número del 1 al 1.000
 de dos en dos se escribirá el siguiente bucle.*/

for (i=1;i<=1000;i+=2) 
   	document.write(i)


       //EJPLOS DEL BUCLE WHILE

       var frase = "";
       var n = 1;
       while (n < 10) 
           { 
           frase += "El valor de n es " + n + "<br>"; 
           n++;
           }
       document.writeln(frase);