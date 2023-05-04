//Estructura basica de una funcion
function sumar(a,b){
    return a+b
}

document.write(sumar(7,9))

sumar(78,55)
sumar(6,4)
//Ejercicio 1- Funciones
//Realizar una funcion para emular una calculadora simple
function resta(a,b){
    return a-b
}
function multiplicar(a,b){
    return a*b
}
function division(a,b){
    return a/b
}
document.write("<h1>Calculadora Simple</h1>")
let opcion=parseInt(prompt("Ingrese la operacion que desea realizar: Suma=1, Resta=2, Multiplicacion=3,Division=4 :>"))
let num1=parseFloat(prompt("Ingrese el primer numero: "))
let num2=parseFloat(prompt("Ingrese el segundo numero: "))
switch(opcion){
    case 1:
    document.write("<h3>Resultado de la Suma</h3>")
    let resultado=sumar(num1,num2)
    document.write("La suma de "+num1+" + "+num2+" = "+resultado)
    return
    case 2:
    document.write("<h3>Resultado de la Resta</h3>")
    let resultado=resta(num1,num2)
    document.write("La resta de "+num1+" - "+num2+" = "+resultado)
    return
    case 3:
    document.write("<h3>Resultado de la Multiplicación</h3>")
    let resultado=multiplicar(num1,num2)
    document.write("La multiplicación de "+num1+" x "+num2+" = "+resultado)
    return
    case 4:
    document.write("<h3>Resultado de la División</h3>")
    let resultado=division(num1,num2)
    document.write("La división de "+num1+" / "+num2+" = "+resultado)
    return
    default:
    document.write("La operación es Invalida")
}


