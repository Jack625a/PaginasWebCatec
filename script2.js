//arrays
Estudiante=
{
  Nombre:"Romer",
  Carrera:"Sistemas Informaticos",
  CI:"789654"
}
//document.write(Estudiante["Carrera"])
//bucles-ciclos for while dowhile
//bucle while
let numero=0
while(numero<1)
{
    numero++
    document.write(numero+"<br>")
}

//ejercicio 1 pares del 1 al 100
let contador=1
while(contador<100)
{
    if(contador%2==0)
    {  document.write(contador+" ") }
    contador++
}

//ejercicio 2 pares de 1 a n
document.write("<br>")
document.write("<h1>ej2</h1>")
let contador2=1
let n=prompt("ingrese n")
while(contador2<n)
{
    if(contador2%2==0)
    {  document.write(contador2+" ") }
    contador2++
}

//Ejercicio3 - Mostrar los primeros 100 numeros de forma inversa 
document.write("<br>")
document.write("<h1>EJERCICIO 3</h1>")
contador3=101
while (contador3>=1){
    document.write(contador3 + "<br>")
    contador3--
}
//Ejercicio4 - Mostrar los primero 100 numeros
document.write("<br>")
document.write("<h1>EJERCICIO 4</h1>")
contador4=1
while(contador4<=100){
    document.write(contador4+ "<br>")
    contador4++
}
//Ejercicio 5 - Nos muestre las Suma total de los numeros del 1 al 100
document.write("<br>")
document.write("<h1>EJERCICIO 5</h1>")
let cont=1
let suma=0
while(cont<=100){
    suma+=cont
    cont++
}
document.write("La suma total es: "+ suma)
//Ejercicio6 calcular y mostrar el Promedio de 5 notas ingresadas por teclado con ciclo while
document.write("<br>")
document.write("<h1>EJERCICIO 6</h1>")
let cont2=1
let sumaTotal=0
let promedio=0
while (cont2<=5){
    let nota=parseFloat(prompt("Ingrese la nota"))
    sumaTotal+=nota
    cont2++
}
document.write(sumaTotal)
promedio=sumaTotal/5
document.write("El promedio de las 5 notas ingresadas es : "+ promedio)














