function validarc(e){
    var teclado = (document.all)?e.keyCode:e.which;
    if(teclado == 8)return true;

    var patrón = /[0-9]/;

    var probar = String.fromCharCode(teclado);
    return patrón.test(probar);
}

function validarm(e){
    var teclado = (document.all)?e.keyCode:e.which;
    if(teclado == 8)return true;

    var losmeses = /[0-9]/;

    var probar = String.fromCharCode(teclado);
    return losmeses.test(probar);
}

function interés(){
    var valor = document.formulario.cantidad.value;
    var cantidadmeses = document.formulario.meses.value;

    var valorinvertir = parseInt(valor);
    var mesesinvertir = parseInt(cantidadmeses)

    var operación = ((valorinvertir*0.02)*mesesinvertir)+valorinvertir;

    var resultado = operación;

    document.formulario.sueldoin.value = "$"+resultado;
}

function borrar(){
    document.formulario.sueldoin.value = "";
    document.formulario.cantidad.value = "";
    document.formulario.meses.value = "";
}