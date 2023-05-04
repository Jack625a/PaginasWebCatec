//Programacion Orientada a Objetos
//Objetos
//Atributos - Parametros
//Acciones - Metodos
class Persona{
    //Atributos
    constructor(nombre,edad,carrera,ci){
        this.nombre=nombre;
        this.edad=edad;
        this.carrera=carrera;
        this.ci=ci;
    }
    //Metodos
    hablar(){
        console.log("Hola mi nombre es ${this.nombre} y estoy en la carrera de ${this.carrera} tengo ${this.edad} años ")
        document.write("Hola mi nombre es "+ this.nombre+ " y estoy en la carrera de "+this.carrera+" tengo "+this.edad+" años ")
        document.write("<br>")
    }
    comer(){
        alert("Estoy comiendo")
    }
}

//Objetos
const persona1=new Persona("Kevin Arroyo",27,"Sistemas Informaticos",5646526)
const persona2=new Persona("Juan",22,"Sistemas Informaticos",5418484)
const persona3=new Persona("Maria",24,"Sistemas Informaticos",787848)

//Integracion de Metodos al Objetos
persona1.hablar()
persona2.comer()
persona3.hablar()
