Materia= "Paginas Web I - Sistemas Informaticos"
//alert(Materia)
//TIPOS DE VARIABLES
var nombre= "Kevin Arroyo"
nombre="Juan"
//alert(nombre)
let edad= 27
const pi= 3.141658
//TIPOS DE DATOS
//STRING - CADENAS DE CARACTERES "" ''
var apellido = "Arroyo Montaño"
var numero2="A6.148596"
//Numericos -Enteros, Decimales
var numero1=45
var numero=12.4578
//Booleanos true, false 1 0 
var prender=true

//Casos Especiales
//Tipos de datos no definidos
//undefined
let celular
alert(celular)
//Tipos de datos nulos
carnet=null
alert(carnet)
//Tipos de datos NaN
alert(numero1*numero2)

//Funcion Prompt
let nombres=prompt("Ingrese su nombre")
alert (nombres)
let correo=prompt("Ingrese su correo")
alert("Hola bienvenido "+ nombres + " el correo ingresado es: "+ correo)

//Operadores en JavaScript
let a=5
let b=2
suma=a+b
resta=a-b
multiplicacion=a*b
division= a/b
incremento= a++
alert("La suma de "+a+"+"+b+ " es: "+ suma+ "La resta de "+a+"-"+b+ " es: "+ resta+ "La division de "+a+"/"+b+ " es: "+ division+"La multiplicacion de "+a+"x"+b+ " es: "+ multiplicacion + "El incremento en 1 de "+a+" es "+incremento)
document.write(a!=b)
document.write(a>b)
document.write(a<b)
document.write(a==b)

//Condicionales
//If
if(a<=b){
    alert("VERDADERO")
}else{
    alert("FALSO")
}
//Arrays
Colores=["rojo","verde","amarillo","cafe"]
document.write(Colores[0])

