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

function validar3(e){
    var teclado = (document.all)?e.keyCode:e.which;
    if(teclado == 8)return true;

    var el3 = /[0-9]/;

    var probar = String.fromCharCode(teclado);
    return el3.test(probar);
}

function operación(){
    var eluno = document.formulario.uno.value;
    var eldos = document.formulario.dos.value;
    var eltres = document.formulario.tres.value;

    var eluno = parseInt(eluno);
    var eldos = parseInt(eldos);
    var eltres = parseInt(eltres);

    var mayor = Math.max(eluno, eldos, eltres);

    document.formulario.total.value = mayor;
}

function borrar(){
    document.formulario.uno.value = "";
    document.formulario.dos.value = "";
    document.formulario.tres.value = "";
    document.formulario.total.value = "";
}