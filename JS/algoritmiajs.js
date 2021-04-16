//problema 1
function problema1(){

    var p1_input = document.querySelector('#p1-input').value;

    //detección del espacio dividiendo la cadena dentro de un array
    var p1_array = p1_input.split(' ').reverse();

    var p1_respuesta= '';

    p1_array.forEach(function (palabra, i){
        if(i !=0 || 1 != p1_array.lenght) p1_respuesta += ' ';
        p1_respuesta += palabra;
    });

    document.querySelector('#p1-output').textContent = p1_respuesta;

}


//problema 2
function problema2(){
    //obtener los valores de los campos de texto
    var p2_x1 = document.querySelector('#p2-x1').value;
    var p2_x2 = document.querySelector('#p2-x2').value;
    var p2_x3 = document.querySelector('#p2-x3').value;
    var p2_x4 = document.querySelector('#p2-x4').value;
    var p2_x5 = document.querySelector('#p2-x5').value;

    var p2_y1 = document.querySelector('#p2-y1').value;
    var p2_y2 = document.querySelector('#p2-y2').value;
    var p2_y3 = document.querySelector('#p2-y3').value;
    var p2_y4 = document.querySelector('#p2-y4').value;
    var p2_y5 = document.querySelector('#p2-y5').value;

    /*
    para encontrar el mínimo producto escalar entre 2 vectores,
    tenemos que realizar las operaciones correspondientes que son 
    con el máximo valor de un vector por el mínimo valor del otro vector. 
    */

    //construcción de vectores
    var v1 = [p2_x1, p2_x2, p2_x3, p2_x4, p2_x5];
    var v2 = [p2_y1, p2_y2, p2_y3, p2_y4, p2_y5];

    //ordenar vectores
    v1 = v1.sort(function(a,b){
        return b-a;
    });

    v2 = v2.sort(function(a,b){
        return b-a;
    });

    //invertir el vector 2
    v2 = v2.reverse();

    //producto
    var p2_producto = 0;
    
    for(var i = 0; i < v1.length; i++){
        p2_producto += v1[i]*v2[i];
    }

    //imprimir resultado
    document.querySelector('#p2-output').textContent = 
    'Producto escalar mínimo: '+p2_producto;
}


//problema 3 de tarea
//usar split(',')
//usar arreglos
//transformar letras en uppercase
function problema3(){
    var p3_input = document.querySelector('#p3-input').value;

    //detección del espacio dividiendo la cadena dentro de un array
    var p3_array = p3_input.split(',').reduce((acc, val) => acc.length > val.length ? acc : val, '');

    var p3_respuesta="";

    for (var x = 0; x < p3_array.length; x++) {
        var char = p3_array.charAt(x);
        if (p3_respuesta.indexOf(char) == -1 || char == ' ') {
            p3_respuesta += p3_array[x];
        }
    }

    p3_respuesta_mayus = p3_respuesta.toUpperCase().match(/.{1,1}/g);

    p3_final = p3_respuesta_mayus.join(", ");

    document.querySelector('#p3-output').textContent = p3_final;
}

function validar(e){
    var teclado = (document.all)?e.keyCode:e.which;
    if(teclado == 8)return true;

    var letras = /[A-Za-z,ñÑáéíóÁÉÍÓ]/;

    var probar = String.fromCharCode(teclado);
    return letras.test(probar);
}
