//Bucle FOR
document.write("<h1>EJERCICIO 1 - FOR</h1>")
let suma=0
let n=parseInt(prompt("Ingrese el numero final para la suma: "))
for(let i=1; i<=n; i++){
    suma+=i
}
document.write("La suma de los numeros del 1 al 30 es: "+suma)
//Numeros pares 1 al 100
document.write("<br>")
document.write("<h1>EJERCICIO 2 </h1>")
for(let contador=1; contador<=100;contador++){
    if (contador%2==0){
        document.write(contador)
        document.write("<br>")
    }
}

//Mostrar los numeros impares del 1 al 200
document.write("<br>")
document.write("<h1>EJERCICIO 3 </h1>")
for(let contador=1; contador<=200;contador++){
    if (contador%2!=0){
        document.write(contador)
        document.write("<br>")
    }
}

//Mostrar la secuencia de numero del 100 al 1
document.write("<br>")
document.write("<h1>EJERCICIO 4 </h1>")
for(let j=100; j>=1;j--){
    document.write(j+"<br>")
}

//Mostrar la tabla de multiplicar del 9
document.write("<br>")
document.write("<h1>EJERCICIO 5 </h1>")
let multiplicar=5
document.write("Tabla de Multiplicar del "+multiplicar)
document.write("<br>")
for(let cont=1;cont<=10;cont++){
    resultado=multiplicar*cont
    document.write(multiplicar+" x "+cont+" = "+ resultado+ "<br>")
}

//Mostrar la tabla de multiplicar del numero que el usuario ingrese por teclado
document.write("<br>")
document.write("<h1>EJERCICIO 6 </h1>")
let multi=parseInt(prompt("Ingrese el numero de la tabla de multiplicar desea mostrar"))
document.write("Tabla de Multiplicar del "+multi)
document.write("<br>")
for(let conta=1;conta<=10;conta++){
    resul=multi*conta
    document.write(multi+" x "+conta+" = "+ resul+ "<br>")
}
