import { Request, Response } from "express";
import { pool } from "../config/db";
import { getMang, createMang } from "./create-elements";
import { getGrupos, createGrupo } from "./create-elements";
import { getInfra, createInfra } from "./create-elements";
import { getSafe, createSafe } from "./create-elements";
import { getUsuarios, createUsuario } from "./create-elements";
import { getMiembros, createMiembros } from "./create-elements";
import { getProyectos, createProyecto } from "./create-elements";

export const gestion_el = {
  getMang,
  createMang,
};

export const grupos_el = {
  getGrupos,
  createGrupo,
};

export const infra_el = {
  getInfra,
  createInfra,
};

export const seguridad_el = {
  getSafe,
  createSafe,
};

export const usuarios_el = {
  getUsuarios,
  createUsuario,
};

export const miembros_grupo_el = {
  getMiembros,
  createMiembros,
};

export const proyectos_el = {
  getProyectos,
  createProyecto,
};