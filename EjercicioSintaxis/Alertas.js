/*1. Crear un mensaje de alerta con alert()
La función alert() nos permite desde JavaScript crear
 un mensaje de alerta sin algo más que un botón para aceptar,
  de modo que el mensaje desaparecerá cuando el usuario presione 
  aceptar o cierre la ventana.*/

Sintaxis:
alert("mensaje de alerta");

<input type="button" onclick="alert('¡Hola, soy un mensaje de alerta!')
" value="Click para ver un mensaje de alerta" />

/* 2. Crear un mensaje de confirmación con confirm()
A diferencia de la función Alert, la función confirm()
 además de mostrar un mensaje emergente nos permite aceptar 
 o denegar dicho mensaje.

*/ 
Sintaxis:
confirm("mensaje de confirmación");

/*<html>
<head>
<script type="text/javascript">
function ConfirmDemo() {
//Ingresamos un mensaje a mostrar
//var mensaje = confirm("¿Te gusta Desarrollo Geek?");
//Detectamos si el usuario acepto el mensaje
if (mensaje) {
alert("¡Gracias por aceptar!");

//Detectamos si el usuario denegó el mensaje
else {
alert("¡Haz denegado el mensaje!");


</script>
</head>
<body>
<form>
<input type="button" onclick="ConfirmDemo()" value="Click para ver un mensaje de confirmación" />
</form>
</body>
</html>*/

/* 3. Crear un mensaje personalizado con Prompt()
La función prompt() nos permite enviar un mensaje emergente 
con una caja de texto de modo que el usuario puede ingresar 
un valor dentro de ella. En caso de presionar «aceptar» el valor de establecerá,
 en caso de presionar «cancelar» en valor quedará vacío.

 <html>
<head>
<script type="text/javascript">
function PromptDemo() {
//Ingresamos un mensaje a mostrar
var mascota = prompt("¿Cuál es tu mascota favorita?", "");
//Detectamos si el usuario ingreso un valor
if (mascota != null){
alert("Tu mascota favorita es " + mascota);
}
//Detectamos si el usuario NO ingreso un valor
else {
alert("No has ingresado una mascota");
}
}
</script>
</head>
<body>
<form>
<input type="button" onclick="PromptDemo()" value="Click para ver un mensaje personalizado" />
</form>
</body>
</html>
*/

Sintaxis:
prompt("mensaje personalizado", "valor por defecto");