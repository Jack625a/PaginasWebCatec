//estructura basica de una funcion 
function sumar(a,b){
    return a+b
}

document.write('')

sumar(78,77)
sumar(5,8)
//ejercicio 1
//realizar una funcion para emular una calculadora simple
function resta(a,b){
    return a-b
}
function multiplicar(a,b){
    return a*b
}
function dividir(a,b){
    return a/b
}
document.write("<h1>Calculadora Simple</h1>")
let opcion=parseInt(prompt("ingrese la opcion que desea "))
let num1=parseFloat(prompt("ingrese el primer numero "))
let num2=parseFloat(prompt("ingrese el segundo numero "))
switch(Option){
    case 1:
    document.write("<h3>Resultado de la Suma</h3>")
    let resultado=sumar(num1,num2)
    document,write("la suma de "+num1+" + "+num2+" = "+resultado)
    case 2:
    document.write("<h3>Resultado de la Resta</h3>")
    let resultado1=resta(num1,num2)
    document,write("la resta de "+num1+" - "+num2+" = "+resultado1)
    case 3:
    document.write("<h3>Resultado de la Suma</h3>")
    let resultado2=multiplicar(num1,num2)
    document,write("la multiplicacion de "+num1+" x "+num2+" = "+resultado2)
    case 4:
    document.write("<h3>Resultado de la Suma</h3>")
    let resultado3=dividir(num1,num2)
    document,write("la division de "+num1+" / "+num2+" = "+resultado3)
    return
    default:
    document.write("la operacion es invalida")
}