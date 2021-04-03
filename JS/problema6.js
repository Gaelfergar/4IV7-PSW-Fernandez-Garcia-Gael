function validard(e){
    var teclado = (document.all)?e.keyCode:e.which;
    if(teclado == 8)return true;

    var cantidaddía = /[0-9]/;

    var probar = String.fromCharCode(teclado);
    return cantidaddía.test(probar);
}

function validarm(e){
    var teclado = (document.all)?e.keyCode:e.which;
    if(teclado == 8)return true;

    var cantidadmes = /[0-9]/;

    var probar = String.fromCharCode(teclado);
    return cantidadmes.test(probar);
}

function validara(e){
    var teclado = (document.all)?e.keyCode:e.which;
    if(teclado == 8)return true;

    var cantidadaño = /[0-9]/;

    var probar = String.fromCharCode(teclado);
    return cantidadaño.test(probar);
}

function saber(){
    var d = document.formulario.día.value;
    var m = document.formulario.mes.value;
    var a = document.formulario.año.value;

    var losdías = parseInt(d);
    var losmeses = parseInt(m);
    var losaños = parseInt(a);

    var totaldías = losdías+((losaños-2000)*(365));
    var totalmeses = losmeses+((losaños-2000)*(12));
    var totalaños = 2021-losaños;

    var resultado1 = totaldías;
    var resultado2 = totalmeses;
    var resultado3 = totalaños;

    document.formulario.edad.value = resultado3+" años, "+resultado2+" meses y "+resultado1+" días.";
}

function borrar(){
    document.formulario.día.value = "";
    document.formulario.mes.value = "";
    document.formulario.año.value = "";
    document.formulario.edad.value = "";
}