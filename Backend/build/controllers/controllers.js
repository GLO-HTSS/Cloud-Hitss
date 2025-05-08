"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.proyectos_el = exports.miembros_grupo_el = exports.usuarios_el = exports.seguridad_el = exports.infra_el = exports.grupos_el = exports.gestion_el = void 0;
const create_elements_1 = require("./create-elements");
const create_elements_2 = require("./create-elements");
const create_elements_3 = require("./create-elements");
const create_elements_4 = require("./create-elements");
const create_elements_5 = require("./create-elements");
const create_elements_6 = require("./create-elements");
const create_elements_7 = require("./create-elements");
exports.gestion_el = {
    getMang: create_elements_1.getMang,
    createMang: create_elements_1.createMang,
};
exports.grupos_el = {
    getGrupos: create_elements_2.getGrupos,
    createGrupo: create_elements_2.createGrupo,
};
exports.infra_el = {
    getInfra: create_elements_3.getInfra,
    createInfra: create_elements_3.createInfra,
};
exports.seguridad_el = {
    getSafe: create_elements_4.getSafe,
    createSafe: create_elements_4.createSafe,
};
exports.usuarios_el = {
    getUsuarios: create_elements_5.getUsuarios,
    createUsuario: create_elements_5.createUsuario,
};
exports.miembros_grupo_el = {
    getMiembros: create_elements_6.getMiembros,
    createMiembros: create_elements_6.createMiembros,
};
exports.proyectos_el = {
    getProyectos: create_elements_7.getProyectos,
    createProyecto: create_elements_7.createProyecto,
};
