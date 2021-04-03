function validars(e){
    var teclado = (document.all)?e.keyCode:e.which;
    if(teclado == 8)return true;

    var dinero = /[0-9]/;

    var probar = String.fromCharCode(teclado);
    return dinero.test(probar);
}

function validara(e){
    var teclado = (document.all)?e.keyCode:e.which;
    if(teclado == 8)return true;

    var viejo = /[0-9]/;

    var probar = String.fromCharCode(teclado);
    return viejo.test(probar);
}

function operación(){
    var dinero = document.formulario.sueldo.value;
    var viejo = document.formulario.años.value;

    var dinero = parseInt(dinero);
    var viejo = parseInt(viejo);

    if(viejo == 1){
        var resultado = dinero+(dinero*0.05);
    }

    if(viejo > 1){
        var resultado = dinero+(dinero*0.07);
    }

    if(viejo > 2){
        var resultado = dinero+(dinero*0.1);
    }

    if(viejo > 4){
        var resultado = dinero+(dinero*0.15);
    }

    if(viejo > 9){
        var resultado = dinero+(dinero*0.20);
    }

    document.formulario.paga.value = "$"+resultado;
}

function borrar(){
    document.formulario.sueldo.value = "";
    document.formulario.años.value = "";
    document.formulario.paga.value = "";
}