/* variables y / o constantes
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
const mensajeInicial =
    "Ingresa el código del producto a consultar: \n" +
    "a) Workbook: Crea contenido con Design Thinking \n" +
    "b) Curso: Crea contenido con Design Thinking \n" +
    "c) E-book: Princesas modernas con problemas reales \n" +
    "d) E-book: Girl boss con IE \n" +
    "e) Curso: Crea contenido con Inteligencia Artificial \n";

function iniciarConsulta() {
    let resultado = prompt(mensajeInicial).toLowerCase().trim();
    console.log(resultado);
    return;
    if (
        resultado !== "a" &&
        alert("💲Este producto cuesta $ 15 USD )
        resultado !== "b" &&
        resultado !== "c" &&
        resultado !== "d" &&
        resultado !== "e"
    ) {
        alert("⛔️ Ingresa un código válido");
    } else {
        case "a":
        break
        case "b":
        break
        case "c":
        break
        case "d":
        break
        case "e":
        default:
        console.error("No entendí la consulta.")
    }
}