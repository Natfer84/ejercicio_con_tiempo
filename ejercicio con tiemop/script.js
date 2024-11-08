/*Ejercicio: Vamos a realizar la validación de una contraseña segura en un formulario de registro (para registrarnos sólo necesitamos un email, que se puede validar desde HTML y una contraseña, que se debe repetir y validar desde JS)

La contraseña debe tener lo siguiente (Todo obligatorio): 

1. Al menos dos mayúsculas.
2. Al menos un carácter de los siguientes: * / - # ~
3. Al menos tres números entre 5 y 9
4. Un tamaño de entre 10 y 15*/
// contraeña DD/666hola

function enviarMensaje(e) {
    e.preventDefault();
}

function comprobarFormulario(){
    let ejemploContraseña = /^(?=(.*[A-Z]){2,})(?=(.*[\*\/\-\#\~]){1,})(?=(.*[5-9]){3,}).{10,15}$/;
    console.log(ejemploContraseña);
    let contraseña = document.getElementById("contraseña").value;
    let repetirContr = document.getElementById("contraseñaRep").value;

    //let contraseñabuena = contraseña.trim();
    
    console.log(contraseña);
    if(contraseña != repetirContr){
        let errorMay = document.getElementById("oculto2").textContent;
        document.getElementById("oculto2").textContent = ("Las contraseñas son distintas"),
        errorMay.classList.add("oculto2");
        //return false;
        console.log("Son distintas");
        return false;
    }
    if(contraseña != /^(?=(.*[A-Z]){2,})(?=(.*[\*\/\-\#\~]){1,})(?=(.*[5-9]){3,}).{10,15}$/){
        console.log("son iguales");
        let errorMay2 = document.getElementById("contraseñaRep").textContent;
        document.getElementById("oculto3").textContent = ("CORRECTAS"),
        errorMay2.classList.add("oculto3");

        return false;
    }

}