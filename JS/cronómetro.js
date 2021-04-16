//obtener variables de los id

let temporizador = document.getElementById('temporizador');

let iniciar = document.getElementById('iniciar');

let resetear = document.getElementById('resetear');

let almacenarTiempos = document.getElementById('almacenarTiempos');

let tiempo = 0;
let intervalo = 0;
let verificador = false;

function init(){        //llama otra función al hacer click
    iniciar.addEventListener('click', iniciarContador);
    resetear.addEventListener('click', resetearContador);
    grabarar.addEventListener('click', grabarContador);
}

init();

function iniciarContador(){
    if(verificador == false){
                    //función anónima (sin nombre)
                    //para llamar una función en otra
        var intervalo = setInterval(function (){
            tiempo += 0.01;
                                    // 2 decimales máx.
            temporizador.innerHTML = tiempo.toFixed(2);
    //Cada 10 milisegundos
        }, 10);
        verificador = true;
    }else{
        verificador = false;
        clearInterval(intervalo);
    }
}

function resetearContador(){
    verificador = false;
    tiempo = 0;
    temporizador.innerHTML = tiempo + '.00';
    clearInterval(intervalo);
    //almacenarTiempos es un arreglo. Guarda los tiempos.
    while(almacenarTiempos.firstChild){
        almacenarTiempos.removeChild(almacenarTiempos.firstChild);
    }
}

function grabarContador(){
    //triple igual para igualar el valor y el dato
    if(temporizador.textContent === '0.00'){
        console.log('Click para iniciar el cronómetro');
    }else{
        let p = document.createElement('ul');
    //comillas invertidas para poner html
        p.innerHTML = `
        <li>Tiempo: ${tiempo.toFixed(2)} </li>
        `;
    //agregar el elemento (p) del arreglo
        almacenarTiempos.appendChild(p);
    }
}
