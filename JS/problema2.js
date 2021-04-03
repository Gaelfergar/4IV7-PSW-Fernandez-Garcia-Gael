function validarsueldo(e){
    var teclado = (document.all)?e.keyCode:e.which;
    if(teclado == 8)return true;

    var sueldobase = /[0-9]/;

    var probar = String.fromCharCode(teclado);
    return sueldobase.test(probar);
}

function validarvalor(e){
    var teclado = (document.all)?e.keyCode:e.which;
    if(teclado == 8)return true;

    var valorventas = /[0-9]/;

    var probar = String.fromCharCode(teclado);
    return valorventas.test(probar);
}

function validarventas(e){
    var teclado = (document.all)?e.keyCode:e.which;
    if(teclado == 8)return true;

    var ventasmes = /[0-9]/;

    var probar = String.fromCharCode(teclado);
    return ventasmes.test(probar);
}

function operación(){
    var valors = document.formulario.sueldo.value;
    var valorven = document.formulario.valorv.value;
    var valorv = document.formulario.ventas.value;
    var sueldobase = parseInt(valors);
    var valorventas = parseInt(valorven);
    var ventasmes = parseInt(valorv);
    var suma = sueldobase+(valorventas*ventasmes+(valorventas*0.1*(ventasmes)));

    var resultado = suma;

    document.formulario.total.value = "$"+resultado;
}

function borrar(){
    document.formulario.sueldo.value = "";
    document.formulario.ventas.value = "";
    document.formulario.total.value = "";
}



