class Persona {
    constructor(nombre, dni, edad, sexo, peso, altura, añoNacimiento) {
        this.nombre = nombre;
        this.dni = dni;
        this.edad = edad;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura; 
        this.añoNacimiento = añoNacimiento;
    }

    mostrarGeneracion(){
        if(this.añoNacimiento>=1930 && this.añoNacimiento<=1948){
            alerta.innerHTML= 'Pertenece a la generacio Silent Generation y su rango caracteristico es Austeridad'
        }else if(this.añoNacimiento>=1949 && this.añoNacimiento<=1968){
            alerta.innerHTML= 'Pertenece a la generacio BabyBoom y su rango caracteristico es Ambicion'
        }else if(this.añoNacimiento>=1969 && this.añoNacimiento<=1980){
            alerta.innerHTML= 'Pertenece a la generacio Generacion X y su rango caracteristico es Obsesion por el exito'
        }else if(this.añoNacimiento>=1981 && this.añoNacimiento<=1993){
            alerta.innerHTML= 'Pertenece a la generacio Generacion Y y su rango caracteristico es Frustracion'
        }else if(this.añoNacimiento>=1994 && this.añoNacimiento<=2010){
            alerta.innerHTML= 'Pertenece a la generacio Generacion Z y su rango caracteristico es Irreverencia'
        }else{
            alerta.innerHTML= 'No hay una generacion definida'
        }
    }

    esMayorDeEdad(){
        if(this.edad>=18){
            alerta.innerHTML= 'Es mayor de edad'
        }else{
            alerta.innerHTML= 'Es menor de edad'
        }
    }

    mostrarDatos(){

    }

    set modificarNombre(nuevoNombre) {
        this.nombre = nuevoNombre;
    }
    
    set modificarEdad(nuevoEdad) {
        this.edad = nuevoEdad;
    }

    set modificarDNI(nuevoDNI) {
        this.dni = nuevoDNI;
    }

    set modificarPeso(nuevoPeso) {
        this.peso = nuevoPeso;
    }
    set modificarSexo(nuevoSexo) {
        this.sexo = nuevoSexo;
    }
    set modificarAltura(nuevoAltura) {
        this.altura = nuevoAltura;
    }
    set modificarAñoNac(nuevoAñoNac) {
        this.añoNacimiento = nuevoAñoNac;
    }

    get mostrarNombre() {
        return this.nombre;
    }
    
    get mostrarEdad() {
        return this.edad;
    }

    get mostrarDNI() {
        return this.dni;
    }

    get mostrarPeso() {
        return this.peso;
    }
    get mostrarSexo() {
        return this.sexo;
    }

    get mostrarAltura() {
        return this.altura;
    }

    get mostrarAñoNac() {
        return this.añoNacimiento;
    }
}

let user = new Persona()
let btnCrear = document.querySelector('#btnCrear')
let btnMostrar = document.querySelector('#btnMostrar')
let btnMayor = document.querySelector('#btnMayor')
let alerta = document.querySelector('#alerts')

let newUser = (e) =>{
    e.preventDefault();
    user.modificarNombre = document.querySelector('#inputNombre').value;
    user.modificarEdad = document.querySelector('#inputEdad').value;
    user.modificarDNI = document.querySelector('#inputDNI').value;
    user.modificarPeso = document.querySelector('#inputPeso').value;
    user.modificarSexo = document.querySelector('#inputSexo').value;
    user.modificarAltura = document.querySelector('#inputAltura').value;
    user.modificarAñoNac = document.querySelector('#inputAño').value;
    btnCrear.className = 'btn btn-primary disabled'
    btnMostrar.className = 'btn btn-success '
    btnMayor.className = 'btn btn-success '
}

let mostrarGen = (e) =>{
    e.preventDefault();
    user.mostrarGeneracion();
} 
let mayorEdad = (e) => {
    e.preventDefault();
    user.esMayorDeEdad();
}

