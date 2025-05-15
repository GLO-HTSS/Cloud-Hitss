interface FormConfig {
  id: string;
  name: string;
  title: string;
}

export class FormHandler {
  private forms: FormConfig[] = [
    { id: "usr", name: "Usuarios", title: "Información del Usuario" },
    { id: "mgp", name: "Grupos", title: "Gestión de Grupos" },
    { id: "mpt", name: "Proyectos", title: "Gestión de Proyectos" },
    { id: "mif", name: "Gestión", title: "Gestión Técnica" },
    { id: "seg", name: "Seguridad", title: "Seguridad" },
    { id: "pro", name: "Información", title: "Información del Proyecto" },
  ];

  private currentForm: string = "usr";

  constructor() {
    this.initialize();
  }

  private initialize(): void {
    document.addEventListener("DOMContentLoaded", () => {
      this.setupNavigation();
      this.showInitialForm();
    });
  }

  private setupNavigation(): void {
    const navContainer = document.querySelector(".nav-main");
    if (!navContainer) return;

    const nav = document.createElement("ul");
    nav.className = "nav-list";

    this.forms.forEach((form) => {
      const li = document.createElement("li");
      const button = document.createElement("button");
      button.textContent = form.name;
      button.className = "nav-button";
      button.dataset.formId = form.id;
      button.addEventListener("click", () => this.showForm(form.id));
      li.appendChild(button);
      nav.appendChild(li);
    });

    navContainer.appendChild(nav);
  }

  private showForm(formId: string): void {
    // Ocultar todos los formularios
    const forms = document.querySelectorAll<HTMLElement>(".inpt-push");
    forms.forEach((form) => {
      form.style.display = "none";
    });

    // Mostrar el formulario seleccionado
    const selectedForm = document.getElementById(formId);
    if (selectedForm) {
      selectedForm.style.display = "block";
      this.currentForm = formId;
      this.updateActiveButton(formId);
    }
  }

  private showInitialForm(): void {
    this.showForm(this.currentForm);
  }

  private updateActiveButton(formId: string): void {
    const buttons = document.querySelectorAll(".nav-button");
    buttons.forEach((button) => {
      if (button instanceof HTMLElement) {
        if (button.dataset.formId === formId) {
          button.classList.add("active");
        } else {
          button.classList.remove("active");
        }
      }
    });
  }
}
