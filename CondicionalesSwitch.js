//Ejercicio 1 - Switch
//Solicitar al usuario que ingrese un numero del 1 al 7 y que se muestre con respecto al numero el dia
//1=Lunes, 2=Martes, 3=Miercoles, 4=Jueves, 5=Viernes ....
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
