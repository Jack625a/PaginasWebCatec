//Bucle FOR
document.write("<h1>EJERCICIO 1 - FOR</h1>")
let suma=0
let n=parseInt(prompt("Ingrese el numero final para la suma: "))
for(let i=1; i<=n; i++){
    suma+=i
}
document.write("La suma de los numeros del 1 al 30 es: "+suma)
//numeros pares de 1 al 100
document.write("<br>")
document.write("<h1>Ejercicio 2 - FOR</h1>")
for(let contador=1; contador<=100;contador++){
    if(contador%2==0){
        document.write(contador)
        document.write("<br>")
    }
}
//numeros impares del 1 al 200
document.write("<br>")
document.write("<h1>Ejercicio 3 - FOR</h1>")
for(let contador=1; contador<=100;contador++){
    if(contador%2!=0){
        document.write(contador)
        document.write("<br>")
    }
}
//mostrar la secuencia del 100 al 1
document.write("<br>")
document.write("<h1>Ejercicio 4 - FOR</h1>")
for(let i=100; i>=1; i--){
    document.write(i+"<br>")
}
//mostrar la secuencia del 100 al 1
document.write("<br>")
document.write("<h1>Ejercicio 5 FOR</h1>")
let multiplicar=5
document.write("tabla de multiplicar del "+multiplicar)
document.write("<br>")
for(let cont=1;cont<=10;cont++){
    resultado=multiplicar*cont
    document.write(multiplicar+" x "+cont+" = "+resultado+"<br>")
}
//mostrar la secuencia del 100 al 1
document.write("<br>")
document.write("<h1>Ejercicio 6 - FOR</h1>")
let multi=parseInt(prompt("ingrese el numero de la tabla de multiplicar de desea: "))
document.write("tabla de multiplicar del "+multi)
document.write("<br>")
for(let cont=1;cont<=10;cont++){
    resultado=multi*cont
    document.write(multi+" x "+cont+" = "+resultado+"<br>")
}