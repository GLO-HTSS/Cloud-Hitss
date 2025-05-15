// form-init.js

document.addEventListener("DOMContentLoaded", () => {
  const formularios = [
    "usr", // Usuario
    "mgp", // Grupo
    "mpt", // Proyecto
    "mif", // Gestión Técnica
    "inf", // Infraestructura
    "seg", // Seguridad
    "pro", // Información
  ];

  let indiceActual = 0;

  function mostrarSoloFormulario(id) {
    formularios.forEach((formId) => {
      const div = document.getElementById(formId);
      if (div) {
        div.style.display = formId === id ? "block" : "none";
      }
    });
  }

  // Mostrar solo el primero al cargar
  mostrarSoloFormulario(formularios[indiceActual]);

  // Adjuntar evento de submit a cada formulario
  formularios.forEach((formId, i) => {
    const formContainer = document.getElementById(formId);
    if (!formContainer) return;

    const form = formContainer.querySelector("form");
    if (!form) return;

    form.addEventListener("submit", (event) => {
      event.preventDefault(); // Evita el envío real por ahora

      // Aquí puedes manejar el envío con fetch/ajax si lo necesitas

      // Ir al siguiente formulario
      indiceActual = i + 1;

      if (indiceActual < formularios.length) {
        mostrarSoloFormulario(formularios[indiceActual]);
      } else {
        alert("Todos los formularios han sido completados.");
        // Opcionalmente: volver al primero o mostrar un resumen
        // indiceActual = 0;
        // mostrarSoloFormulario(formularios[indiceActual]);
      }
    });
  });
});
