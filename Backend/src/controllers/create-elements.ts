import { Request, Response } from "express";
import { pool } from "../config/db";
import {
  Gestion,
  Grupo,
  Infraestructura,
  Seguridad,
  Usuario,
  MiembroGrupo,
  Proyecto,
} from "../models/Strucucture";



export const createMang = async (req: Request, res: Response) => {
  const {
    ticket,
    mantenimientos,
    credenciales,
    billing,
    estimacion_mensual,
    presupuesto_aprobado,
    duracion_uso,
    observaciones,
  }: Gestion = req.body;

  try {
    await pool.query(
      "INSERT INTO gestion (ticket, mantenimientos, credenciales, billing, estimacion_mensual, presupuesto_aprobado, duracion_uso, observaciones) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
      [
        ticket,
        mantenimientos,
        credenciales,
        billing,
        estimacion_mensual,
        presupuesto_aprobado,
        duracion_uso,
        observaciones,
      ]
    );
    res.status(201).json({ message: "Gestión creada exitosamente" });
  } catch (error) {
    res.status(500).json({ error: "Error al crear gestion", details: error });
  }
};

export const createGrupo = async (req: Request, res: Response) => {
  const { nombre_grupo }: Grupo = req.body;

  try {
    await pool.query("INSERT INTO grupos (nombre_grupo) VALUES (?)", [
      nombre_grupo,
    ]);
    res.status(201).json({ message: "Grupo creado exitosamente" });
  } catch (error) {
    res.status(500).json({ error: "Error al crear grupo", details: error });
  }
};

export const createInfra = async (req: Request, res: Response) => {
  const {
    consola,
    sistema_operativo,
    memoria,
    disco,
    cpu,
    ram,
    disco_arranque,
    discos_adicionales,
    nics,
  }: Infraestructura = req.body;

  try {
    await pool.query(
      "INSERT INTO infraestructura (consola, sistema_operativo, memoria, disco, cpu, ram, disco_arranque, discos_adicionales, nics) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
      [
        consola,
        sistema_operativo,
        memoria,
        disco,
        cpu,
        ram,
        disco_arranque,
        discos_adicionales,
        nics,
      ]
    );
    res.status(201).json({ message: "Infraestructura creada exitosamente" });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error al crear infraestructura", details: error });
  }
};

export const createSafe = async (req: Request, res: Response) => {
  const {
    respaldos,
    acceso_iam,
    autenticacion_adicional,
    reglas_firewall,
    balanceador_carga,
    llaves_ssh,
    monitoreo,
    alertas_configuradas,
  }: Seguridad = req.body;

  try {
    await pool.query(
      "INSERT INTO seguridad (respaldos, acceso_iam, autenticacion_adicional, reglas_firewall, balanceador_carga, llaves_ssh, monitoreo, alertas_configuradas) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
      [
        respaldos,
        acceso_iam,
        autenticacion_adicional,
        reglas_firewall,
        balanceador_carga,
        llaves_ssh,
        monitoreo,
        alertas_configuradas,
      ]
    );
    res.status(201).json({ message: "Seguridad creada exitosamente" });
  } catch (error) {
    res.status(500).json({ error: "Error al crear seguridad", details: error });
  }
};

export const createUsuario = async (req: Request, res: Response) => {
  const {
    responsable_tecnico,
    solicitante,
    admin_responsable,
    operador,
  }: Usuario = req.body;

  try {
    await pool.query(
      "INSERT INTO usuarios (responsable_tecnico, solicitante, admin_responsable, operador) VALUES (?, ?, ?, ?)",
      [responsable_tecnico, solicitante, admin_responsable, operador]
    );
    res.status(201).json({ message: "Usuario creado exitosamente" });
  } catch (error) {
    res.status(500).json({ error: "Error al crear usuario", details: error });
  }
};

export const createMiembros = async (req: Request, res: Response) => {
  const { id_grupo, id_usuario }: MiembroGrupo = req.body;

  try {
    await pool.query(
      "INSERT INTO miembros_grupo (id_grupo, id_usuario) VALUES (?, ?)",
      [id_grupo, id_usuario]
    );
    res.status(201).json({ message: "Miembro de grupo creado exitosamente" });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error al crear miembro de grupo", details: error });
  }
};

export const createProyecto = async (req: Request, res: Response) => {
  const {
    pais_sede,
    proposito_maquina,
    gerente_proyecto,
    proyecto_asignado,
    nombre_proyecto_cloud,
    id_proyecto_cloud,
    fecha_inicio,
    fecha_final,
    administracion_servicio,
    id_infraestructura,
    id_seguridad,
    id_usuario,
    id_gestion,
  }: Proyecto = req.body;

  try {
    await pool.query(
      `INSERT INTO proyecto 
      (pais_sede, proposito_maquina, gerente_proyecto, proyecto_asignado, nombre_proyecto_cloud, id_proyecto_cloud, fecha_inicio, fecha_final, administracion_servicio, id_infraestructura, id_seguridad, id_usuario, id_gestion) 
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        pais_sede,
        proposito_maquina,
        gerente_proyecto,
        proyecto_asignado,
        nombre_proyecto_cloud,
        id_proyecto_cloud,
        fecha_inicio,
        fecha_final,
        administracion_servicio,
        id_infraestructura,
        id_seguridad,
        id_usuario,
        id_gestion,
      ]
    );
    res.status(201).json({ message: "Proyecto creado exitosamente" });
  } catch (error) {
    res.status(500).json({ error: "Error al crear proyecto", details: error });
  }
};

// Controladores para la tabla "gestion"
export const getMang = async (_req: Request, res: Response) => {
  try {
    const [rows] = await pool.query("SELECT * FROM gestion");
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener gestion", details: error });
  }
};

// Controladores para la tabla "grupos"
export const getGrupos = async (_req: Request, res: Response) => {
  try {
    const [rows] = await pool.query("SELECT * FROM grupos");
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener grupos", details: error });
  }
};

export const getInfra = async (_req: Request, res: Response) => {
  try {
    const [rows] = await pool.query("SELECT * FROM infraestructura");
    res.json(rows);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error al obtener infraestructura", details: error });
  }
};

export const getSafe = async (_req: Request, res: Response) => {
  try {
    const [rows] = await pool.query("SELECT * FROM seguridad");
    res.json(rows);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error al obtener seguridad", details: error });
  }
};

export const getUsuarios = async (_req: Request, res: Response) => {
  try {
    const [rows] = await pool.query("SELECT * FROM usuarios");
    res.json(rows);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error al obtener usuarios", details: error });
  }
};

export const getMiembros = async (_req: Request, res: Response) => {
  try {
    const [rows] = await pool.query("SELECT * FROM miembros_grupo");
    res.json(rows);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error al obtener miembros de grupo", details: error });
  }
};

export const getProyectos = async (_req: Request, res: Response) => {
  try {
    const [rows] = await pool.query("SELECT * FROM proyecto");
    res.json(rows);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error al obtener proyectos", details: error });
  }
};
