//Ejercicio 1 - Switch
//Solicitar al usuario que ingrese un numero del 1 al 7 y que se muestre con respecto al numero el dia
//1=Lunes, 2=Martes, 3=Miercoles, 4=Jueves, 5=Viernes ....
document.write("<h1>EJERCICIO 1</h1>")
let numero= parseInt(prompt("Ingrese un numero del 1 al 7: "))
let nombreDia

switch (numero){
    case 1:
    nombreDia="Lunes"
    break
    case 2:
    nombreDia="Martes"
    break
    case 3:
    nombreDia= "Miercoles"
    break
    case 4:
    nombreDia="Juves"
    break
    case 5:
    nombreDia="Viernes"
    break
    case 6:
    nombreDia="Sabado"
    break
    case 7:
    nombreDia="Domingo"
    break
    default:
    nombreDia="Dia no valido"
}
alert(nombreDia)
document.write(nombreDia)

document.write("<br>")
document.write("<h1>EJERCICIO 2</h1>")
//Ejercicio 2-Realizar un tienda frutas en el cual el usuario pueda seleccionar cualquier producto y que le muestre el precio del producto, 
/*let frutas=prompt("Seleccione la fruta que desea: manzana, naranja, frutilla, pera, sandia ")
var precio
switch (frutas){
    case "manzana":
    precio=2.5 
    break
    case "naranja":
    precio=1.5
    break
    case "frutilla":
    precio=3.5
    break
    case "pera":
    precio=1.80
    break
    case "sandia":
    precio=8
    break
    default:
    precio="El producto no se encuentra en stock"
}
cantidad=parseInt(prompt("Ingrese la cantidad de fruta que desea"))
precioTotal=precio*cantidad
alert("Producto agregadado correctamente")
document.write("El precio de "+frutas+ " es: "+precio +" Bs "+"<br>"+ " El precio total de las "+frutas+ " es "+precioTotal+ " Bs"+"<br>"+"La cantidad seleccionada es: "+ cantidad)
//Con condicionales*/
/*productos=prompt("Desea agregar mas frutas? si / no")
if(productos=="si"){
    switch (frutas){
        case "manzana":
        precio=2.5 
        break
        case "naranja":
        precio=1.5
        break
        case "frutilla":
        precio=3.5
        break
        case "pera":
        precio=1.80
        break
        case "sandia":
        precio=8
        break
        default:
        precio="El producto no se encuentra en stock"
    }
    cantidad=parseInt(prompt("Ingrese la cantidad de fruta que desea"))
    precioTotal=precio*cantidad
    precioFinal=precioTotal
    alert("Producto agregadado correctamente")
    document.write("El precio de "+frutas+ " es: "+precio +" Bs "+"<br>"+ " El precio total de las "+frutas+ " es "+precioTotal+ " Bs"+"<br>"+"La cantidad seleccionada es: "+ cantidad)
}else{
    document.write("El precio de "+frutas+ " es: "+precio +" Bs "+"<br>"+ " El precio total de las "+frutas+ " es "+precioTotal+ " Bs"+"<br>"+"La cantidad seleccionada es: "+ cantidad)
}

*/

//Con el Bucle While 
let productoss=prompt("Desea seleccionar mas frutas, si /no")
while(productoss=="si"){
    let frutas=prompt("Seleccione la fruta que desea: manzana, naranja, frutilla, pera, sandia ")
    var precio
    switch (frutas){
        case "manzana":
        precio=2.5 
        break
        case "naranja":
        precio=1.5
        break
        case "frutilla":
        precio=3.5
        break
        case "pera":
        precio=1.80
        break
        case "sandia":
        precio=8
        break
        default:
        precio="El producto no se encuentra en stock"
    }
cantidad=parseInt(prompt("Ingrese la cantidad de fruta que desea"))
precioTotal=precio*cantidad
precioFinal+=precioTotal
alert("Producto agregadado correctamente")
let productoss=prompt("Desea seleccionar mas frutas, si /no")
}


