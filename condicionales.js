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