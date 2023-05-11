//CICLOS

/* let nombre = "AnnaMoons";
console.log("Tu nombre es: " + nombre);

*/

//console.log("Tu nombre es:", nombre);

/* let nombre = "AnnaMoons"
let role = "Admin"
let password = "AnnaMarieMoon"

if (nombre === "AnnaMoons") {
  console.log("Tu nombre es: " + nombre);
} else {
  console.warn("No reconocemos tu nombre de usuario. Inténtalo nuevamente.");
}

//El código else se ejecuta si se cumple una condición y la otra
if (nombre === "Coder" && password === "Mistery") {
    
}


//Una condición dentro de otra condición
if (nombre === "AnnaMoons" || role= "Admin") {
    
}
 */

/* 
| desde  hasta   actualización
for (inicio;límite o final; incremento) 
for (let i=0 ; i<21;){
console.log("Iteración con cliclo FOR nro:",i)

} 

*/
/* 
debugger;
for (let i = 0; i < 21; i++) {
  console.log("Iteración con cliclo FOR nro:", i);
}
 */

/* let numero = prompt("Ingresa un número del 1 al 100");
for (let i = 0; i < parseInt(numero); i++) {
  console.log("Iteración con cliclo FOR nro:", i);
} 
 */

/* const paises = [
  "Argentina", //0
  "Bolivia", //1
  "Brasil", //2
  "Chile", //3
  "Colombia", //4
  "Ecuador", //5
  "Guayana", //6
  "Paraguay", //7
  "Perú", //8
  "Surinam", //9
  "Uruguay", //10
  "Venezuela", //11
];

for (let i = 0; i < paises.length; i++) {
  console.log(paises[i]);
}
 */

/* 
for (let i = 0; i < paises.length; i++) {
  if (i === 8) {
    break // Interrumpe la ejecución del ciclo
  }
  console.log(paises[i]);
}
 */

/* const paises = [
  "Argentina", //0
  "Bolivia", //1
  "Brasil", //2
  "Chile", //3
  "Colombia", //4
  "Ecuador", //5
  "Guayana", //6
  "Paraguay", //7
  "Perú", //8
  "Surinam", //9
  "Uruguay", //10
  "Venezuela", //11
];

for (let i = 0; i < paises.length; i++) {
  if (
    paises[i] === "Brasil" ||
    paises[i] === "Guayana" ||
    paises[i] === "Surinam"
  ) {
    continue; // Saltea la ejecución del ciclo
  }
  console.log(paises[i]);
}
 */

/* let iterar = false;
while (iterar === true) {
  //esto es una redundancia. Podría dejarse solo while(iterar)
  console.log("Imprimir mensaje en consola JS.");
  iterar = confirm("¿Desea continuar con el bucle?");
}
 */

//Do while

/* let iterar = false;
do {
  console.log("Ejecuto el código");
} while (iterar);
 */

/* 
// CÓDIGO QUE SIMULA LA IDENTIFICACIÓN DE UN USUARIO / LOGUEO.

let intentos = 1;
let identificarme = false; // cambiar a true cuando se vaya a probar
do {
  let usuario = prompt(
    "Intresa tu nombre de usuario: \n (tienes solo 3 intentos.)"
  );
  if (usuario === null) {
    break;
  }

  if (usuario === "AnnaMoons" && intentos <= 3) {
    alert("✅ Hola " + usuario);
    identificarme = false;
  } else {
    alert(
      "⛔️ El usuario " + usuario + " no está registrado. Vuelve a intentarlo."
    );
    intentos++;
    if (intentos > 3) {
      console.error("Superaste los tres intentos de identificación.");
      break;
    }
  }
} while (identificarme);
 */

//Estructura SWITCH

//COLORES A USAR:
/* 
console.log(
  "¡Hola! Me encanta que visites AMA (Amazing Match). \n ⭐️ El espacio digital donde encuentras herramientas para construir relaciones más conscientes ⭐️"
);

let consulta = confirm("¿Deseas mejorar tus relaciones interpersonales?");

if (consulta === true) {
  let relación = prompt(
    "¿Cuál de tus relaciones quisieras mejorar? \n Ingresa una de estas opciones: \n relación contigo \n relación romántica \n relación amistosa \n relación familiar \n relación laboral "
  ).toLocaleLowerCase();
  let estado = prompt(
    "Ingresa el estado de la " + relación
  ).toLocaleLowerCase();
  switch (estado) {
    case "feliz y satisfactoria":
      console.log(
        "Aquí tienes algunas herramientas para tu " +
        relación +
        " en estado " +
        estado
      );
      break;
    case "aburrida y monótona":
      console.log(
        "Aquí tienes algunas herramientas para tu " +
        relación +
        " en estado " +
        estado
      );
      break;
    case "desgastada y tensa":
      console.log(
        "Aquí tienes algunas herramientas para tu " +
        relación +
        " en estado " +
        estado
      );
      break;
    case "nueva y emocionante":
      console.log(
        "Aquí tienes algunas herramientas para tu " +
        relación +
        " en estado " +
        estado
      );
      break;

    default:
      console.warn(
        "Aún no tenemos una herramienta para tu relación en estado " + estado
      );
      break;
  }
} */
