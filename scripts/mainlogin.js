// usuario y contraseña
const USUARIO_CORRECTO = "Margara123";
const CLAVE_CORRECTA = "Leyendo2025";

// intentos
let intentos = 3;
let ultimoUsuario = ""; 

// DOM
const usuario = document.getElementById("usuario");
const clave = document.getElementById("clave");
const botonEntrar = document.getElementById("botonEntrar");
const msjBienvenido = document.getElementById("msjBienvenido");

// botón
botonEntrar.addEventListener("click", function() {
  const usuarioIngr = usuario.value;
  const claveIngr = clave.value;

  // Si el usuario cambió, se reinicia el conteo de intentos 
  if (usuarioIngr !== ultimoUsuario) {
    intentos = 3;
    ultimoUsuario = usuarioIngr;
  }

  if (intentos > 0) {
    if (usuarioIngr === USUARIO_CORRECTO && claveIngr === CLAVE_CORRECTA) {
      msjBienvenido.textContent = "¡Bienvenido a nuestra Biblioteca!";
      window.location.href = "index.html";
    } else {
      intentos--;
      if (intentos > 0) {
        msjBienvenido.textContent = `Credenciales incorrectas. Te quedan ${intentos} intento(s).`;
      } else {
        msjBienvenido.textContent = "Usuario bloqueado. Ha superado el número de intentos.";
      }
    }
  } else {
    msjBienvenido.textContent = "Usuario bloqueado. Ha superado el número de intentos.";
  }
});
