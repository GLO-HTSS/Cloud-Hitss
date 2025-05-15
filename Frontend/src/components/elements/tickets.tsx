import { useEffect, useState } from "react";
import "../../styles/tickets.css";

interface Proyecto {
  id_proyecto: number;
  pais_sede: string;
  proposito_maquina: string;
  gerente_proyecto: string;
  proyecto_asignado: string;
  nombre_proyecto_cloud: string;
  fecha_inicio: Date;
  fecha_final: Date;
  administracion_servicio: string;
  consola: string;
}

interface Infraestructura {
  id_infraestructura: number;
  consola: string;
  sistema_operativo: string;
  memoria: string;
  disco: string;
  cpu: string;
  ram: string;
}

interface Gestion {
  id_gestion: number;
  ticket: string;
  mantenimientos: string;
  credenciales: string;
  billing: string;
  estimacion_mensual: number;
  presupuesto_aprobado: number;
  duracion_uso: string;
  observaciones: string;
}

interface gropos {
  id_grupo: number;
  nombre_grupo: string;
}

export function Tickets() {
  const [proyectos, setProyectos] = useState<Proyecto[]>([]);
  const [gestiones, setGestiones] = useState<Gestion[]>([]);
  const [infraestructuras, setInfraestructuras] = useState<Infraestructura[]>(
    []
  );
  const [grupos, setGrupos] = useState<gropos[]>([]);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    // Obtener todos los proyectos
    fetch("http://localhost:3000/pyt")
      .then((response) => response.json())
      .then((data) => setProyectos(data))
      .catch((err) => {
        console.error("Error al obtener datos de proyectos:", err);
        setError("Error al cargar los datos de proyectos");
      });

    // Obtener todas las gestiones
    fetch("http://localhost:3000/mng")
      .then((response) => response.json())
      .then((data) => setGestiones(data))
      .catch((err) => {
        console.error("Error al obtener datos de gestión:", err);
        setError("Error al cargar los datos de gestión");
      });

    // Obtener todos los grupos
    fetch("http://localhost:3000/gpo")
      .then((response) => response.json())
      .then((data) => setGrupos(data))
      .catch((err) => {
        console.error("Error al obtener datos de grupos:", err);
        setError("Error al cargar los datos de grupos");
      });

    // Obtener todas las infraestructuras
    fetch("http://localhost:3000/inf")
      .then((response) => response.json())
      .then((data) => setInfraestructuras(data))
      .catch((err) => {
        console.error("Error al obtener datos de infraestructura:", err);
        setError("Error al cargar los datos de infraestructura");
      });
  }, []);

  // Función para obtener la abreviatura de la consola
  // Función para obtener la abreviatura de la consola
  const getConsolaAbreviatura = (consola: string): string => {
    const abreviaturas: { [key: string]: string } = {
      "Azure reseller": "AZR-R",
      "Azure internal": "AZR-I",
      "Amazon Web Services": "AWS",
      "Google Cloud Platform": "GCP",
    };
    return abreviaturas[consola] || consola.substring(0, 3).toUpperCase();
  };

  // Función para formatear el ID del proyecto
  const formatProjectId = (id: number): string => {
    return id.toString().padStart(6, "0");
  };

  return (
    <div className="tickets-container">
      {error ? (
        <div className="error-message">{error}</div>
      ) : (
        proyectos.map((proyecto, index) => {
          const infraestructura = infraestructuras[index];
          const gestion = gestiones[index];
          const grupo = grupos[index];

          const id_tick = infraestructura
            ? `${getConsolaAbreviatura(
                infraestructura.consola
              )}-${formatProjectId(proyecto.id_proyecto)}-${proyecto.pais_sede
                .substring(0, 3)
                .toUpperCase()}-${gestion?.ticket}`
            : "Cargando...";

          return (
            <div key={proyecto.id_proyecto} className="ticket-contain">
              <div className="label-icon"></div>
              <button className="config">⚙️</button>
              <h1>{id_tick}</h1>
              <br />
              <div className="detalles">
                <p>Sistema: {infraestructura?.sistema_operativo}</p>
                <p>Memoria: {infraestructura?.memoria}</p>
                <p>CPU: {infraestructura?.cpu}</p>
                <p>RAM: {infraestructura?.ram}</p>
              </div>
              <br />
              <h2>@{grupo?.nombre_grupo || "Sin grupo asignado"}</h2>
              <br />
              <div className="resp">
                <img src="" alt="" className="icon-resp" />
                <h3>{proyecto.gerente_proyecto || "Sin gerente asignado"}</h3>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}
