import { createBrowserRouter, RouterProvider } from "react-router-dom";
// Define tus rutas
const router = createBrowserRouter([
  {
    path: "@pgs/index.html",
    // La página principal estará en la raíz
  },
  {
    path: "/tickets",
  },
  // ... más rutas para otras secciones de tu aplicación
]);

// Exporta el RouterProvider para usarlo en tu aplicación principal
export const AppRouter = () => <RouterProvider router={router} />;

const startTime = Date.now();
// Función para redirigir
export function redirigir() {
  // Calcular el tiempo transcurrido
  const tiempoLimite = 10;
  let redirect = true;
  // Configurar el temporizador para redirigir
  setTimeout(function () {
    window.location.href = `/pgs/index.html`;
  }, tiempoLimite);
  const end = Date.now() - startTime;
  redirect = end > tiempoLimite ? true : false;
  if (redirect) {
    // Configurar el temporizador para mostrar el mensaje
    setTimeout(function () {
      // Mostrar mensaje
      const mensajeElement = document.getElementById("mensaje");
      if (mensajeElement) {
        mensajeElement.style.display = "block";
      }
    }, tiempoLimite);
  }
} 
redirigir();
