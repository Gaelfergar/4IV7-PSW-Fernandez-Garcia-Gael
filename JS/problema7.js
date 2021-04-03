function validar1(e){
    var teclado = (document.all)?e.keyCode:e.which;
    if(teclado == 8)return true;

    var el1 = /[0-9]/;

    var probar = String.fromCharCode(teclado);
    return el1.test(probar);
}

function validar2(e){
    var teclado = (document.all)?e.keyCode:e.which;
    if(teclado == 8)return true;

    var el2 = /[0-9]/;

    var probar = String.fromCharCode(teclado);
    return el2.test(probar);
}

function operación(){
    var eluno = document.formulario.uno.value;
    var eldos = document.formulario.dos.value;

    var eluno = parseInt(a);
    var eldos = parseInt(b);

    var resultado = parseInt(a, b);

    if(a == b){
        var resultado = a*b;
    }

    if(a > b){
        var resultado = a-b;
    }

    if(a < b){
        var resultado = a+b;
    }

    document.formulario.total.value = resultado;
}

function borrar(){
    document.formulario.uno.value = "";
    document.formulario.dos.value = "";
    document.formulario.total.value = "";
}