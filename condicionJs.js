//ej1-switch
//ingresar numero del 1 al 7 y se muestre el dia
let numero=parseInt(prompt("ingrese num del 1 al 7"))
let nombDia
switch (numero)
{
  case 1:
  nombDia="Lunes"
  break;
  case 2:
  nombDia="Martes"
  break;
  default:
  nombDia="No hay ese dia"
}
alert(nombDia)
document.write(nombDia)
document.write("<br>")
//ejercicio2 realizar una tienda de frutas
//el usuario selecciona cualquier producto
//muestra el producto y el precio
let fruta=prompt("seleccione: manzana naranja frutilla pera sandia")
var precio
switch(fruta)
{
    case "manzana":
    precio=2.5
    break;
    case "naranja":
    precio=1.5
    break;
    case "frutilla":
    precio=3.5
    break;
    case "pera":
    precio=1.5
    break;
    case "sandia":
    precio=8
    break;
    default:
    precio="no se encuentra"
}
cantidad=parseInt(prompt("ingrese cantidad de fruta"))
precioT=precio*cantidad
alert("producto agregado correctamente")
document.write("<br>el precio es: "+precio+" Bs")
document.write("<br>la cantidad seleccionada es: "+cantidad)
document.write("<br>el precio totalfruta es: "+precioT+" Bs")
