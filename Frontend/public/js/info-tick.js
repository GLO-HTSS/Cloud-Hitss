// Función para mostrar formularios por secciones
function showForm(formId) {
  // Ocultar todos los formularios
  const forms = document.querySelectorAll(".inpt-push");
  forms.forEach((form) => {
    form.style.display = "none";
  });

  // Mostrar el formulario seleccionado
  const selectedForm = document.getElementById(formId);
  if (selectedForm) {
    selectedForm.style.display = "block";
  }
}

// Función para inicializar la página
function initializeForms() {
  // Ocultar todos los formularios excepto el primero
  const forms = document.querySelectorAll(".inpt-push");
  forms.forEach((form, index) => {
    if (index === 0) {
      form.style.display = "block";
    } else {
      form.style.display = "none";
    }
  });

  // Crear la navegación de formularios
  const navContainer = document.querySelector(".nav-main");
  const formIds = ["usr", "mgp", "mpt", "mif", "seg", "pro"];
  const formNames = {
    usr: "Usuarios",
    mgp: "Grupos",
    mpt: "Proyectos",
    mif: "Gestión",
    seg: "Seguridad",
    pro: "Información",
  };

  const nav = document.createElement("ul");
  nav.className = "nav-list";

  formIds.forEach((id) => {
    const li = document.createElement("li");
    const button = document.createElement("button");
    button.textContent = formNames[id];
    button.className = "nav-button";
    button.onclick = () => showForm(id);
    li.appendChild(button);
    nav.appendChild(li);
  });

  navContainer.appendChild(nav);
}

// Inicializar cuando el DOM esté listo
document.addEventListener("DOMContentLoaded", initializeForms);
