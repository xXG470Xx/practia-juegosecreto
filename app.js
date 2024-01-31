//let parrafo = document.querySelector('p');
//parrafo.innerHTML = 'Indica un numero del 1 al 10';

let numeroSecreto =0;
let intentos = 0; 
let listaNumerosSorteados = [];
let numeroMaximo = 10; //el rango del maximo del juego 

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto; //agregar un titulo a la pagina
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);//obteniendo el numero del usuario desde la caja de texto de la pagina 
    //alert('Click desde el booton');
    console.log(numeroSecreto);
    if (numeroDeUsuario === numeroSecreto) {

        asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled'); //activar el boton de nuevo juego despues de acetar el numero 
    }else{
        //el usuario no acerto 
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p','el numero es menor');    
        }else{
            asignarTextoElemento('p','el numero es mayor');
        }
        intentos++;+
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //si ya sorteamos todos los numeros 
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','ya se sortearon todos los elementos ');
    }else{
        //si el numero generado esta en la lista 
        if (listaNumerosSorteados.includes(numeroGenerado)) {  //el include revisa si el numero ya esta en la lista 
            return generarNumeroSecreto();
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego de numero secreto:');
    asignarTextoElemento('p',`Indica un numero del 1 al ${numeroMaximo} `);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1; 
}
//funcion de reinicia todo el juego 
function reiniciarJuego(){
    //limpiar caja
    limpiarCaja();
    //Indicar mesnaje de intervalo de numeros
    //generar el numero aletario
    //Reiniciar el numero de intentos
    condicionesIniciales();
    //deshabilitar el boton de juego nuevo 
    document.querySelector('#reiniciar'/* es un id por eso va con #*/).setAttribute('disabled',true);
    
}

condicionesIniciales();

