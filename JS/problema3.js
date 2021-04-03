function validar(e){
    var teclado = (document.all)?e.keyCode:e.which;
    if(teclado == 8)return true;

    var precio = /[0-9]/;

    var probar = String.fromCharCode(teclado);
    return precio.test(probar);
}

function rebaja(){
    var valor = document.formulario.compra.value;
    var precio = parseInt(valor);
    var multi = precio*0.15;

    var resultado = valor-multi

    document.formulario.total.value = "$"+resultado;
}

function borrar(){
    document.formulario.compra.value = "";
    document.formulario.total.value = "";
}