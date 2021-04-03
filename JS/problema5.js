function validarh(e){
    var teclado = (document.all)?e.keyCode:e.which;
    if(teclado == 8)return true;

    var cantidadhombres = /[0-9]/;

    var probar = String.fromCharCode(teclado);
    return cantidadhombres.test(probar);
}

function validarm(e){
    var teclado = (document.all)?e.keyCode:e.which;
    if(teclado == 8)return true;

    var cantidadmujeres = /[0-9]/;

    var probar = String.fromCharCode(teclado);
    return cantidadmujeres.test(probar);
}

function saber(){
    var h = document.formulario.hombres.value;
    var m = document.formulario.mujeres.value;

    var totalhombres = parseInt(h);
    var totalmujeres = parseInt(m)

    var total = totalhombres+totalmujeres;
    var porcentajehombres = (totalhombres*100)/total;
    var porcentajemujeres = (totalmujeres*100)/total;

    var resultado1 = porcentajehombres;
    var resultado2 = porcentajemujeres;

    document.formulario.ph.value = resultado1+"%";
    document.formulario.pm.value = resultado2+"%";
}

function borrar(){
    document.formulario.hombres.value = "";
    document.formulario.mujeres.value = "";
    document.formulario.ph.value = "";
    document.formulario.pm.value = "";
}