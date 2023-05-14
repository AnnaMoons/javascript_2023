/* variables y / o constantes
funciones - estructurar la lógica
condicioneales(if - else - switch)
utilizar un ciclo(for - while- dowhile)

prompt - comnfirm - alert
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
  "Ingresa el código de la prenda a consultar: \n" +
  "a) Camiseta rosa \n" +
  "b) Short playero \n" +
  "c) Camiseta casual \n" +
  "d) Pantalón de jean \n" +
  "e) Camisa elegante \n";

function iniciarConsulta() {
  let resultado = prompt(mensajeInicial).toLowerCase().trim();
  console.log(resultado);
  return;
  if (
    resultado !== "a" &&
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
        case "a":
            break
            case "a":
                break
                case "a":
      default:
  }
}
