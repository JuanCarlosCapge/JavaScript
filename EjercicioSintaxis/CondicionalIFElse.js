if (dia == "lunes") 
   document.write ("Que tengas un feliz comienzo de semana")

   if (credito >= precio) { 
    document.write("has comprado el artículo " + nuevoArtículo) //enseño compra 
    carrito += nuevoArticulo //introduzco el artículo en el carrito de la compra 
    credito -= precio //disminuyo el crédito según el precio del artículo 
 } else { 
    document.write("se te ha acabado el crédito") //informo que te falta dinero 
    window.location = "carritodelacompra.html" //voy a la página del carrito	
 }

 /* Este ejemplo es un poco más complejo, y también un poco ficticio. 
 Lo que hago es comprobar si tengo crédito para realizar una supuesta compra.
  Para ello miro si el crédito es mayor o igual que el precio del artículo,
   si es así informo de la compra, introduzco el artículo en el carrito y 
   resto el precio al crédito acumulado. Si el precio del artículo es s
   uperior al dinero disponible informo de la situación y mando al navegador
  a la página donde se muestra su carrito de la compra.*/


var numero1=23 
var numero2=63 
if (numero1 == numero2){ 
   document.write("Los dos números son iguales") 
}else{ 
   if (numero1 > numero2) { 
      document.write("El primer número es mayor que el segundo") 
   }else{ 
      document.write("El primer número es menor que el segundo") 
   } 
}