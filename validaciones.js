// Obtén el elemento del formulario y los campos de nombre, correo electrónico, asunto y botón enviar
const form = document.getElementById("form");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  const nombre = document.getElementById("name");
  const email = document.getElementById("email");
  const asunto = document.getElementById("subject");
  if (
    nombre.value.trim() === "" ||
    email.value.trim() === "" ||
    asunto.value.trim() === ""
  ) {
    alert("Por favor, complete todos los campos del formulario.");
    return false;
  }
  if (nombre.value.length > 50 || asunto.value.length > 50) {
    alert("El campo Nombre y Asunto no deben contener más de 50 caracteres.");
    return false;
  }
  if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
    alert("El campo Correo Electrónico debeestar en formato de correo electrónico.");
    return false;
  }
  form.submit();
});