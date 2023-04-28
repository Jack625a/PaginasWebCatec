//Ejercicio 1 - mostrar los numeros pares del 1 al 100
let contador=1
while(contador<=100){
    if (contador %2==0){
        document.write(contador+"<br>")
    }
    contador ++
}
//Ejercicio 2 - Mostrar los numeros pares del 1 al N (N sera ingresado por el usuario por teclado)
document.write("<br>")
document.write("<h1>EJERCICIO 2</h1>")
let contador2=1
let n=prompt("Ingrese el valor final de los numeros pares que desea ver")
while(contador2<=n){
    if (contador2 %2==0){
        document.write(contador2+"<br>")
    }
    contador2++
}

