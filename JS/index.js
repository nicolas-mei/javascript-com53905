
let nombre = prompt ("ingrese su nombre");
console.log(nombre);
let apellido = prompt ("ingrese su apellido");
console.log(apellido);
let contrasena = prompt ("Si ya ha ingresado a nuestro sitio en otro momento, ingrese si, de lo contrario ingrese su edad para verificar si es apto este sitio para ud. Muchas gracias.");
if (contrasena <= 120) {
    if (contrasena >= 18) {
        alert ("Puede ingresar a nuestro sitio ya que tiene la edada permitida para hacerlo.");
        const VALIDAR = /^[a-zA-Z0-9]{8,}$/;
        contrasena = prompt ("ingrese una contraseña de al menos 8 caracteres");
        if (VALIDAR.test(contrasena)) {
        console.log("El texto ingresado es válido.");
        } else {
        console.log("El texto ingresado no es válido.");
        }
    } else {
            console.log ("Espere tener la mayoria de edad para ingresar al mundo del tatuaje.");

    }
}else if ("si") {
    contrasena = prompt ("ingrese una contraseña de al menos 8 caracteres");
    const CARACTERES = /^[a-zA-Z0-9]{8,}$/;
    if (CARACTERES.test(contrasena)) {
    console.log("El texto ingresado es válido.");
    } else {
    console.log("El texto ingresado no es válido.");
    }
}
console.log (contrasena);
console.log("hola " + nombre + " " + apellido + " espero que te sea de mucha utilidad nuestros productos");


function precioDescuento (cantidad, precio) {
  precioTotal = cantidad * precio;
  if (precioTotal >= 1000) {
    precioTotal *= 0,85;
    return precioTotal;
  }
}

console.log (precioDescuento(8,2369));


function calcularGanancias (precio, porcentajeGanancia) {
  gananciasTotales = precio * porcentajeGanancia;
  if (gananciasTotales >= 500000) {
    return alert ("hay que hacer un sorteo para premiar a los clientes")
  }
}

console.log (calcularGanancias(121251, 1,9));

const precioPorKilometro = 35;
let kilometrosRecorridos;
do {
  kilometrosRecorridos = prompt("Ingrese la distancia que se encuentra del local para poder ofrecerle un estimado de costo de cadeteria:");
} while (isNaN(kilometrosRecorridos));
const precio = kilometrosRecorridos * precioPorKilometro;
console.log ("El precio total es " + precio);
