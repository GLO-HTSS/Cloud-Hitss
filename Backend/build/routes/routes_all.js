"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = require("express");
const controllers_1 = require("../controllers/controllers");
const router = (0, express_1.Router)();
// Definición de rutas agrupadas en una constante
const routes = {
    inf: {
        get: router.get("/inf", controllers_1.infra_el.getInfra),
        post: router.post("/inf", controllers_1.infra_el.createInfra),
    },
    seguridad: {
        get: router.get("/safe", controllers_1.seguridad_el.getSafe),
        post: router.post("/safe", controllers_1.seguridad_el.createSafe),
    },
    gestion: {
        get: router.get("/mg", controllers_1.gestion_el.getMang),
        post: router.post("/mg", controllers_1.gestion_el.createMang),
    },
    grupos: {
        get: router.get("/gpo", controllers_1.grupos_el.getGrupos),
        post: router.post("/gpo", controllers_1.grupos_el.createGrupo),
    },
    usuarios: {
        get: router.get("/usr", controllers_1.usuarios_el.getUsuarios),
        post: router.post("/usr", controllers_1.usuarios_el.createUsuario),
    },
    miembros_grupo: {
        get: router.get("/mgp", controllers_1.miembros_grupo_el.getMiembros),
        post: router.post("/mgp", controllers_1.miembros_grupo_el.createMiembros),
    },
    proyectos: {
        get: router.get("/pyt", controllers_1.proyectos_el.getProyectos),
        post: router.post("/pyt", controllers_1.proyectos_el.createProyecto),
    },
};
exports.routes = routes;
exports.default = router;
