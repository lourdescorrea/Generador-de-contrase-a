const minusculas = "abcdefghijklmnopkrstuvwxyz";
const numeros = "123456789";
const simbolos = "$^&!#%";
const mayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

//* selectores checked */
const $checkNumeros = $("#checkNumeros");
const $checkMinusculas = $("#checkMinusculas ");
const $checkMayusculas = $("#checkMayusculas");
const $checkSimbolos = $("#checkSimbolos");

//* selectores radio btn */
const $rdNumero = $("#rdNumero");
const $rdLetras = $("#rdLetras");
const $rdtodosLosCaracteres = $("#rdtodosLosCaracteres");

//* selectores contraseña  */
const $botonCopiar = $("#botonCopiar");
const $botonReseteo = $("#botonReseteo");
const $inputCaracteres = $("#inputCaracteres");
const $inputContraseña = $("#inputContraseña");
const $copiarContraseña = $("#copiarContraseña");

const generadorPosibleContraseña = () => {
  let largoRequerido = parseInt($("#inputCaracteres").value);

  let contraseña = "";

  while (largoRequerido > contraseña.length) {
    if (largoRequerido > contraseña.length && $checkMayusculas.checked) {
      const num = Math.floor(Math.random() * mayusculas.length);
      contraseña += mayusculas[num];
    }

    if (largoRequerido > contraseña.length && $checkMinusculas.checked) {
      const num = Math.floor(Math.random() * minusculas.length);
      contraseña += minusculas[num];
    }

    if (largoRequerido > contraseña.length && $checkSimbolos.checked) {
      const num = Math.floor(Math.random() * simbolos.length);
      contraseña += simbolos[num];
    }

    if (largoRequerido > contraseña.length && $checkNumeros.checked) {
      const num = Math.floor(Math.random() * numeros.length);
      contraseña += numeros[num];
    }

    if (largoRequerido > contraseña.length && $rdLetras.checked) {
      const num = Math.floor(Math.random() * minusculas.length);
      const num1 = Math.floor(Math.random() * mayusculas.length);
      contraseña += minusculas[num] + mayusculas[num1];
    }
    if (largoRequerido > contraseña.length && $rdNumero.checked) {
      const num = Math.floor(Math.random() * numeros.length);
      contraseña += numeros[num];
    }

    if (largoRequerido > contraseña.length && $rdtodosLosCaracteres.checked) {
      const num = Math.floor(Math.random() * minusculas.length);
      const num1 = Math.floor(Math.random() * mayusculas.length);
      const num2 = Math.floor(Math.random() * numeros.length);
      const num3 = Math.floor(Math.random() * simbolos.length);
      contraseña +=
        minusculas[num] + mayusculas[num1] + numeros[num2] + simbolos[num3];
    }
  }
  $copiarContraseña.innerText = contraseña;
};

//*eventos*//

$botonCopiar.addEventListener("click", () => {
  let textToCopy = $copiarContraseña.innerText;
  navigator.clipboard.writeText(textToCopy);
});

const generadorContraseña = () => {
  $botonReseteo.addEventListener("click", generadorPosibleContraseña);
};

generadorContraseña();
