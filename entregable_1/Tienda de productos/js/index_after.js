/* 
variables y / o constantes
funciones - estructurar la lógica
condicioneales(if - else - switch)
utilizar un ciclo(for - while- dowhile)

prompt - confirm - alert
console log - warn - error

Texto / String = listado de prendas
Prompt() = el usuario elige una prendas
dde el prompt > buscamos lo que ingresó en una lista
(condicional)
alert() le respondemos con el precio / costo / importe
confirm? preguntamos ¿deseas conocer algún otro producto ?
    TRUE => seguimos en el ciclo While
    FALSE => Gracias por tu interés. Hasta pronto
 */

let continuar = true;
let precio = 0;

const mensajeInicial =
  "Ingresa el código del producto a consultar: \n" +
  "a) Curso: Crea contenidos y productos digitales aplicando la metodología de Design Thinking \n" +
  "b) Curso: Crea contenido con Inteligencia Artificial \n" +
  "c) E-book: Princesas modernas con problemas reales \n" +
  "d) E-book: Girl boss con IE \n" +
  "e) Workbook: Crea contenidos y productos digitales aplicando la metodología de Design Thinking \n";
function iniciarConsulta() {
  let resultado = prompt(mensajeInicial).toLowerCase().trim();
  // console.log(resultado);
  //return;
  if (
    resultado !== "a" &&
    resultado !== "b" &&
    resultado !== "c" &&
    resultado !== "d" &&
    resultado !== "e"
  ) {
    alert("⛔️ Ingresa un código de producto válido.");
  } else {
    let membresiaDigitalGirls = confirm(
      "¿Perteneces a la membresía 'Digital Girls'?"
    );
    if (membresiaDigitalGirls === true) {
      descuento = 0.9;
    } else {
      descuento = 1;
    }
    switch (resultado) {
      case "a":
        precio = 47;
        alert("💲Este producto cuesta $ " + precio + "USD");

        break;
      case "b":
        precio = 47 * descuento;
        alert("💲Este producto cuesta $ " + precio + "USD");

        break;
      case "c":
        precio = 7 * descuento;
        alert("💲Este producto cuesta $ " + precio + "USD");

        break;
      case "d":
        precio = 7 * descuento;
        alert("💲Este producto cuesta $ " + precio + "USD");

        break;
      case "e":
        precio = 3 * descuento;
        alert("💲Este producto cuesta $ " + precio + "USD");

      default:
        console.error("Huston ¡Tenemos un problema!");
    }
  }
}

function validarPrecio() {
  while (continuar) {
    iniciarConsulta();
    continuar = confirm("¿Deseas conocer el precio de otro producto?");
  }
  alert("🙏 Gracias por tu visita.");
}

//validarPrecio();

//console.log("El número mayor es", Math.max(1, 54, 67, 33, 88, 91))
//Date() //En la consolo Javascript de las DevTools devuelve la fecha
//Date.toLocaleString() //devuelve la fecha y la hora local
