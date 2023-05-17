/* 
let valorFijoMensual = 0
let tipoInmueble = 0
let M2 = 0
let alarma = false
let factorAlarma= 1 
*/

let valorFijoMensual = 0;
let tipoInmueble = 0;
let M2 = 0;
let alarma = false;
let factorAlarma = 1;
let cotizacion = 0;

let mensajeCotizador =
  "¿Para qué tipo de inmueble deseas cotizar el seguro? \n" +
  "1) Residencial \n" +
  "2) Comercial \n" +
  "3) Consultorio \n" +
  "Por favor, ingresa el número correspondiente:";

let estoyCotizando = true;
while (estoyCotizando) {
  iniciarCotizacion();
  estoyCotizando = confirm("¿Quieres cotizar otro inmueble?");
}

function iniciarCotizacion() {
  tipoInmueble = parseInt(prompt(mensajeCotizador));

  if (tipoInmueble !== 1 && tipoInmueble !== 2 && tipoInmueble !== 3) {
    alert("⛔️ Por favor, ingresa un número válido.");
  } else {
    //preguntar por la alarma
    alarma = confirm("El inmueble tiene alarma");
    if (alarma === false) {
      factorAlarma = 60.0;
    }

    M2 = parseInt(prompt("Ingresa los metros cuadrados del inmueble: "));
    if (M2 > 20 && M2 <= 500) {
      switch (tipoInmueble) {
        case 1:
          valorFijoMensual = 150.0;
          break;
        case 2:
          valorFijoMensual = 179.0;
          break;
        case 3:
          valorFijoMensual = 190.0;
          break;
        default:
          console.error("⛔️ Por favor, ingresa un dato válido.");
      }
      cotizacion = M2 * valorFijoMensual * factorAlarma;
      alert(
        "El valor mensual de la póliza para tu inmueble es de $" +
          cotizacion.toFixed(3)
      );
    }
  }
}
