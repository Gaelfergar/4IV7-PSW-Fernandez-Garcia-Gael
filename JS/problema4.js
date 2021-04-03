function validarp1(e){
    var teclado = (document.all)?e.keyCode:e.which;
    if(teclado == 8)return true;

    var primerp = /[.0-9]/;

    var probar = String.fromCharCode(teclado);
    return primerp.test(probar);
}
function validarp2(e){
    var teclado = (document.all)?e.keyCode:e.which;
    if(teclado == 8)return true;

    var segundop = /[.0-9]/;

    var probar = String.fromCharCode(teclado);
    return segundop.test(probar);
}
function validarp3(e){
    var teclado = (document.all)?e.keyCode:e.which;
    if(teclado == 8)return true;

    var tercerp = /[.0-9]/;

    var probar = String.fromCharCode(teclado);
    return tercerp.test(probar);
}

function validaref(e){
    var teclado = (document.all)?e.keyCode:e.which;
    if(teclado == 8)return true;

    var efinal = /[.0-9]/;

    var probar = String.fromCharCode(teclado);
    return efinal.test(probar);
}
function validartf(e){
    var teclado = (document.all)?e.keyCode:e.which;
    if(teclado == 8)return true;

    var tfinal = /[.0-9]/;

    var probar = String.fromCharCode(teclado);
    return tfinal.test(probar);
}

function obtenerc(){
    var primerparcial = document.formulario.parcial1.value;
    var segundoparcial = document.formulario.parcial2.value;
    var tercerparcial = document.formulario.parcial3.value;
    var examenfinal = document.formulario.examenf.value;
    var trabajofinal = document.formulario.trabajof.value;

    var primerp = parseFloat(primerparcial);
    var segundop = parseFloat(segundoparcial);
    var tercerp = parseFloat(tercerparcial);
    var efinal = parseFloat(examenfinal);
    var tfinal = parseFloat(trabajofinal);

    var sumaparciales = (primerp+segundop+tercerp)/3
    var parcialporcentaje = sumaparciales*0.55
    var examenporcentaje = efinal*0.3
    var trabajoporcentaje = tfinal*0.15

    var resultado = parcialporcentaje+examenporcentaje+trabajoporcentaje;

    document.formulario.calificaciónf.value = resultado;
}

function borrar(){
    document.formulario.parcial1.value = "";
    document.formulario.parcial2.value = "";
    document.formulario.parcial3.value = "";
    document.formulario.examenf.value = "";
    document.formulario.trabajof.value = "";
    document.formulario.calificaciónf.value = "";
}