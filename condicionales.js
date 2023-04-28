//mostrar los numeros pares del 1 al 10
let contador=1
while(contador<=100){
    if(contador %2==0)
    {
        document.write(contador+"<br>")
    }
    contador++
}
//mostrar los numeros pares del 1 al N ingresado por el usuario
document.write("<br>")
document.write("<h1>EJERCICIO 2</h1>")
let contador2=1
let n=prompt("ingrese el valor final de los numeros pares que desea ver")
while(contador2<=n)
{
    if(contador2 %2==0)
    {
        document.write(contador2+"<br>")
    }
    contador2++    
}
//mostrar los primeros 100 numeros de froma inversa
document.write("<br>")
document.write("<h1>EJERCICIO 3</h1>")
let co=101
while(co>=1){
    document.write(co + "<br>")
    co--
}
//
document.write("<br>")
document.write("<h1>EJERCICIO 4</h1>")
let co4=1
while(co4<=101){
    document.write(co4 + "<br>")
    co4++
}
//nos muestre la suma total del 1 al 100
document.write("<br>")
document.write("<h1>EJERCICIO 5</h1>")
let co5=1
let suma=0
while(cont<=100){
    suma+=co
    co++
}
document.write("la suma total es: "+ suma)
//calcular y mostrar el promedio de 5 notas ingresada por teclado
document.write("<br>")
document.write("<h1>EJERCICIO 6</h1>")
let co6=1
let sumatotal=0
let promedio=0
while(co6<=5)
{
    let nota=parseint(prompt("ingrese la nota"))
    sumatotal+=nota
    co6++    
}
document.write(sumatotal)
promedio=sumatotal/5
document.write("el promedio de las 5 notas ingresadas es: "+ promedio)