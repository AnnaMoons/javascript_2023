function login() {
  let usuario = prompt("Ingresa tu nombre de usuario:");
  // if(usuario !== "" && usuario.trim().length > 0)
  if (usuario.trim().length > 4) {
    usuarioLogueado = usuario.trim();

    alert("👋 Hola " + usuario);
  } else {
    alert("⛔️ El usuario ingresado no está registrado.");
  }
}

//login();

function calcularIVA(precio) {
  if (parcefloat(precio)) {
    let resultado = precio * IVA;
    console.log("El precio + IVA es de:", resultado);
  }
}

function calcularPrecioFinal() {
  let precioDelProducto = prompt("Ingresa el valor del producto:");
  calcularIVA(precioDelProducto);
}
//calcularPrecioFinal();

function sumar(numA, numB) {
  let resultado = numA + numB;
  console.log("Resultado=", resultado);
}

function concatenar(texto1, texto2) {
  if (texto1.trim() !== "" && texto2.trim() !== "") {
    textoConcatenado = texto1.trim() + texto2.trim();
    return textoConcatenado;
    //console.log("Resultado: ", textoConcatenado)
  }
}

function reutilizar() {
  let username = "AnnaMoons";
  console.log("Usuario:", username);
}

console.log("La variable username vale:", username);
independiente();
console.log("Ahora la variable username vale:", username);

const miFuncion = function (a, b) {
  console.log("Esta es una función anónima");
  return a + b;
};

const miArrowFunction = (a, b) => {
  console.log("Esta es una función anónima");
  return a + b;
};
