//Función que valide que el usuario escriba más de 5 caracteres en nombre
//ventanita que dice "Escribe más de 5 caracteres.."

function validar(formulario){
    //obtener valores del formulario
    if(formulario.nombre.value.length < 5){
        alert("Escribe más de 5 caracteres en el campo nombre");
        formulario.nombre.focus();
    return false;
    }

    //Solo letras
    var checkOK = "QWERTYUIOPASDFGHJKLÑZXCVBNM"
    + "qwertyuiopasdfghjklñzxcvbnm"
    + "áéíóú" + " ";

    var checkStr = formulario.nombre.value;

    var allvalid = true;

    for(var i = 0; i < checkStr.length; i++){
        var ch = checkStr.charAt(i);
        for(var j = 0; j<checkOK.length; j++)
        if(ch == checkOK.charAt(j))
            break
        if(j == checkOK.length){
            allvalid = false;
            break;
        }
    }

    if(!allvalid){
        alert("Escribe solo letras en el campo nombre");
        formulario.nombre.focus();
        return false;
    }


    var checkOK = "1234567890";

    var checkStr = formulario.edad.value;

    var allvalid = true;

    for(var i = 0; i < checkStr.length; i++){
        var ch = checkStr.charAt(i);
        for(var j = 0; j<checkOK.length; j++)
        if(ch == checkOK.charAt(j))
            break
        if(j == checkOK.length){
            allvalid = false;
            break;
        }
    }

    if(!allvalid){
        alert("Escribe solo números en el campo edad");
        formulario.nombre.focus();
        return false;
    }

    //validar la entrada de un correo eléctrónico
    var txt = formulario.email.value;

    //patrón (expresión regular)
    var b = /^[^@\s]+@[^@\.\s]+(\.[^@\.\s]+)+$/;

    alert("Email "+(b.test(txt)?"":" no")+" válido");

    return b.test(txt);
}