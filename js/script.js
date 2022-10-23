// Constantes
const numeros = "123456789";
const simbolos = "$^&!#%";
const mayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const minusculas = "abcdefghijklmnopkrstuvwxyz";

// Utiles
const $ = (s) => document.querySelector(s);
const $$ = (s) => document.querySelectorAll(s);

// Selectores checks
const checkNums = $("#checkNumeros");
const checkMayus = $("#checkMayusculas");
const checkSimbolos = $("#checkSimbolos");
const checkMin = $("#checkMinusculas");

// Selectores radio btn
const rdNums = $("#rdNumero");
const rdLetras = $("#rdLetras");
const rdTodos = $("#rdtodosLosCaracteres");

// Selectores btn
const btnCopiar = $("#btnCopiar");
const btnGenerar = $("#btnGenerar");
const btnResetear = $("#btnResetear");

// Selectores longitud y text
const inputLong = $("#inputCaracteres");
const txtContraseña = $("#contraseña");

// Radio Buttons Eventos y Funciones
const deshabilitarChecks = (disabled) => {
  checkNums.disabled = disabled;
  checkMayus.disabled = disabled;
  checkSimbolos.disabled = disabled;
  checkMin.disabled = disabled;
};

const setMin = (checked) => (checkMin.checked = checked);
const setNums = (checked) => (checkNums.checked = checked);
const setMayus = (checked) => (checkMayus.checked = checked);
const setSimbolos = (checked) => (checkSimbolos.checked = checked);
//  No se pueden sacar los parentesis ya que le estoy asignando algo, no estoy retornando ningun valor
const soloNumeros = () => {
  setMayus(false);
  setNums(true);
  setSimbolos(false);
  setMin(false);

  deshabilitarChecks(true);
};

const soloLetras = () => {
  setMayus(true);
  setNums(false);
  setSimbolos(false);
  setMin(true);

  deshabilitarChecks(true);
};

const todos = () => {
  setMayus(true);
  setNums(true);
  setSimbolos(true);
  setMin(true);

  deshabilitarChecks(false);
};

rdTodos.addEventListener("click", todos);
rdNums.addEventListener("click", soloNumeros);
rdLetras.addEventListener("click", soloLetras);

// Eventos y Funciones de Botones
const numRandom = (limite) => Math.floor(Math.random() * limite);

const generar = () => {
  const tieneMin = checkMin.checked;
  const tieneNums = checkNums.checked;
  const tieneMayus = checkMayus.checked;
  const tieneSim = checkSimbolos.checked;

  if (!tieneMayus && !tieneNums && !tieneSim && !tieneMin) {
    return alert("Debes seleccionar algún caracter");
  }

  const contraseña = [];
  const largoRequerido = parseInt(inputLong.value);

  while (largoRequerido > contraseña.length) {
    if (largoRequerido > contraseña.length && tieneMin) {
      const num = numRandom(minusculas.length);
      contraseña.push(minusculas[num]);
    }

    if (largoRequerido > contraseña.length && tieneNums) {
      const num = numRandom(numeros.length);
      contraseña.push(numeros[num]);
    }

    if (largoRequerido > contraseña.length && tieneMayus) {
      const num = numRandom(mayusculas.length);
      contraseña.push(mayusculas[num]);
    }

    if (largoRequerido > contraseña.length && tieneSim) {
      const num = numRandom(simbolos.length);
      contraseña.push(simbolos[num]);
    }
  }

  txtContraseña.innerText = contraseña.join("");
};

const copiarTexto = () => {
  const texto = txtContraseña.innerText;
  navigator.clipboard.writeText(texto);
};

btnGenerar.addEventListener("click", generar);
btnResetear.addEventListener("click", generar);
btnCopiar.addEventListener("click", copiarTexto);

inputLong.addEventListener("change", () => {
  $("#caracteres").value = inputLong.value;
});
