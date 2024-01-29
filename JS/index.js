
let nombre = prompt ("ingrese su nombre")

let apellido = prompt ("ingrese su apellido")

let contrasena = prompt ("Si ya ha ingresado a nuestro sitio en otro momento, ingrese su contraseña, de lo contrario ingrese su edad para verificar si es apto este sitio para ud. Muchas gracias.");
let edad;
if (contrasena <= 100) {
    if (edad >= 18) {
        console.log ("Puede ingresar a nuestro sitio ya que tiene la edada permitida para hacerlo.")
        const VALIDAR = /^[a-zA-Z0-9]{8,}$/;
         contrasena = prompt ("ingrese una contraseña de al menos 8 caracteres")
        if (VALIDAR.test(contrasena)) {
                console.log("El texto ingresado es válido.");
        } else {
            console.log("El texto ingresado no es válido.");
        }

    } else {
            console.log ("Espere tener la mayoria de edad para ingresar al mundo del tatuaje.")
    }
         console.log (edad)
} else {
    console.log (contrasena)
}


