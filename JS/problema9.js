function validars(e){
    var teclado = (document.all)?e.keyCode:e.which;
    if(teclado == 8)return true;

    var dinero = /[0-9]/;

    var probar = String.fromCharCode(teclado);
    return dinero.test(probar);
}

function validarh(e){
    var teclado = (document.all)?e.keyCode:e.which;
    if(teclado == 8)return true;

    var hrs = /[0-9]/;

    var probar = String.fromCharCode(teclado);
    return hrs.test(probar);
}

function operación(){
    var dinero = document.formulario.sueldo.value;
    var hrs = document.formulario.horas.value;

    var dinero = parseInt(dinero);
    var hrs = parseInt(hrs);

    if(hrs <= 40){
        var resultado = dinero+0;
    }

    if(hrs > 40){
        var resultado = dinero*2;
    }

    if(hrs > 47){
        var resultado = dinero*3;
    }

    document.formulario.paga.value = "$"+resultado;
}

function borrar(){
    document.formulario.sueldo.value = "";
    document.formulario.horas.value = "";
    document.formulario.paga.value = "";
}