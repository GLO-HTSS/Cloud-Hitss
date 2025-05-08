"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProyectos = exports.getMiembros = exports.getUsuarios = exports.getSafe = exports.getInfra = exports.getGrupos = exports.getMang = exports.createProyecto = exports.createMiembros = exports.createUsuario = exports.createSafe = exports.createInfra = exports.createGrupo = exports.createMang = void 0;
const db_1 = require("../config/db");
const createMang = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { ticket, mantenimientos, credenciales, billing, estimacion_mensual, presupuesto_aprobado, duracion_uso, observaciones, } = req.body;
    try {
        yield db_1.pool.query("INSERT INTO gestion (ticket, mantenimientos, credenciales, billing, estimacion_mensual, presupuesto_aprobado, duracion_uso, observaciones) VALUES (?, ?, ?, ?, ?, ?, ?, ?)", [
            ticket,
            mantenimientos,
            credenciales,
            billing,
            estimacion_mensual,
            presupuesto_aprobado,
            duracion_uso,
            observaciones,
        ]);
        res.status(201).json({ message: "Gestión creada exitosamente" });
    }
    catch (error) {
        res.status(500).json({ error: "Error al crear gestion", details: error });
    }
});
exports.createMang = createMang;
const createGrupo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nombre_grupo } = req.body;
    try {
        yield db_1.pool.query("INSERT INTO grupos (nombre_grupo) VALUES (?)", [
            nombre_grupo,
        ]);
        res.status(201).json({ message: "Grupo creado exitosamente" });
    }
    catch (error) {
        res.status(500).json({ error: "Error al crear grupo", details: error });
    }
});
exports.createGrupo = createGrupo;
const createInfra = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { consola, sistema_operativo, memoria, disco, cpu, ram, disco_arranque, discos_adicionales, nics, } = req.body;
    try {
        yield db_1.pool.query("INSERT INTO infraestructura (consola, sistema_operativo, memoria, disco, cpu, ram, disco_arranque, discos_adicionales, nics) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)", [
            consola,
            sistema_operativo,
            memoria,
            disco,
            cpu,
            ram,
            disco_arranque,
            discos_adicionales,
            nics,
        ]);
        res.status(201).json({ message: "Infraestructura creada exitosamente" });
    }
    catch (error) {
        res
            .status(500)
            .json({ error: "Error al crear infraestructura", details: error });
    }
});
exports.createInfra = createInfra;
const createSafe = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { respaldos, acceso_iam, autenticacion_adicional, reglas_firewall, balanceador_carga, llaves_ssh, monitoreo, alertas_configuradas, } = req.body;
    try {
        yield db_1.pool.query("INSERT INTO seguridad (respaldos, acceso_iam, autenticacion_adicional, reglas_firewall, balanceador_carga, llaves_ssh, monitoreo, alertas_configuradas) VALUES (?, ?, ?, ?, ?, ?, ?, ?)", [
            respaldos,
            acceso_iam,
            autenticacion_adicional,
            reglas_firewall,
            balanceador_carga,
            llaves_ssh,
            monitoreo,
            alertas_configuradas,
        ]);
        res.status(201).json({ message: "Seguridad creada exitosamente" });
    }
    catch (error) {
        res.status(500).json({ error: "Error al crear seguridad", details: error });
    }
});
exports.createSafe = createSafe;
const createUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { responsable_tecnico, solicitante, admin_responsable, operador, } = req.body;
    try {
        yield db_1.pool.query("INSERT INTO usuarios (responsable_tecnico, solicitante, admin_responsable, operador) VALUES (?, ?, ?, ?)", [responsable_tecnico, solicitante, admin_responsable, operador]);
        res.status(201).json({ message: "Usuario creado exitosamente" });
    }
    catch (error) {
        res.status(500).json({ error: "Error al crear usuario", details: error });
    }
});
exports.createUsuario = createUsuario;
const createMiembros = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id_grupo, id_usuario } = req.body;
    try {
        yield db_1.pool.query("INSERT INTO miembros_grupo (id_grupo, id_usuario) VALUES (?, ?)", [id_grupo, id_usuario]);
        res.status(201).json({ message: "Miembro de grupo creado exitosamente" });
    }
    catch (error) {
        res
            .status(500)
            .json({ error: "Error al crear miembro de grupo", details: error });
    }
});
exports.createMiembros = createMiembros;
const createProyecto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { pais_sede, proposito_maquina, gerente_proyecto, proyecto_asignado, nombre_proyecto_cloud, id_proyecto_cloud, fecha_inicio, fecha_final, administracion_servicio, id_infraestructura, id_seguridad, id_usuario, id_gestion, } = req.body;
    try {
        yield db_1.pool.query(`INSERT INTO proyecto 
      (pais_sede, proposito_maquina, gerente_proyecto, proyecto_asignado, nombre_proyecto_cloud, id_proyecto_cloud, fecha_inicio, fecha_final, administracion_servicio, id_infraestructura, id_seguridad, id_usuario, id_gestion) 
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`, [
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
        ]);
        res.status(201).json({ message: "Proyecto creado exitosamente" });
    }
    catch (error) {
        res.status(500).json({ error: "Error al crear proyecto", details: error });
    }
});
exports.createProyecto = createProyecto;
// Controladores para la tabla "gestion"
const getMang = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const [rows] = yield db_1.pool.query("SELECT * FROM gestion");
        res.json(rows);
    }
    catch (error) {
        res.status(500).json({ error: "Error al obtener gestion", details: error });
    }
});
exports.getMang = getMang;
// Controladores para la tabla "grupos"
const getGrupos = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const [rows] = yield db_1.pool.query("SELECT * FROM grupos");
        res.json(rows);
    }
    catch (error) {
        res.status(500).json({ error: "Error al obtener grupos", details: error });
    }
});
exports.getGrupos = getGrupos;
const getInfra = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const [rows] = yield db_1.pool.query("SELECT * FROM infraestructura");
        res.json(rows);
    }
    catch (error) {
        res
            .status(500)
            .json({ error: "Error al obtener infraestructura", details: error });
    }
});
exports.getInfra = getInfra;
const getSafe = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const [rows] = yield db_1.pool.query("SELECT * FROM seguridad");
        res.json(rows);
    }
    catch (error) {
        res
            .status(500)
            .json({ error: "Error al obtener seguridad", details: error });
    }
});
exports.getSafe = getSafe;
const getUsuarios = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const [rows] = yield db_1.pool.query("SELECT * FROM usuarios");
        res.json(rows);
    }
    catch (error) {
        res
            .status(500)
            .json({ error: "Error al obtener usuarios", details: error });
    }
});
exports.getUsuarios = getUsuarios;
const getMiembros = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const [rows] = yield db_1.pool.query("SELECT * FROM miembros_grupo");
        res.json(rows);
    }
    catch (error) {
        res
            .status(500)
            .json({ error: "Error al obtener miembros de grupo", details: error });
    }
});
exports.getMiembros = getMiembros;
const getProyectos = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const [rows] = yield db_1.pool.query("SELECT * FROM proyecto");
        res.json(rows);
    }
    catch (error) {
        res
            .status(500)
            .json({ error: "Error al obtener proyectos", details: error });
    }
});
exports.getProyectos = getProyectos;
