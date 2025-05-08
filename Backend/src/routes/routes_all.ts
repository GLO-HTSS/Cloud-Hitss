import { Router } from "express";
import {
  infra_el,
  seguridad_el,
  gestion_el,
  grupos_el,
  usuarios_el,
  miembros_grupo_el,
  proyectos_el,
} from "../controllers/controllers";

const router = Router();

// Definición de rutas agrupadas en una constante
const routes = {
  inf: {
    get: router.get("/inf", infra_el.getInfra),
    post: router.post("/inf", infra_el.createInfra),
  },
  saf: {
    get: router.get("/safe", seguridad_el.getSafe),
    post: router.post("/safe", seguridad_el.createSafe),
  },
  mng: {
    get: router.get("/mng", gestion_el.getMang),
    post: router.post("/mng", gestion_el.createMang),
  },
  gpo: {
    get: router.get("/gpo", grupos_el.getGrupos),
    post: router.post("/gpo", grupos_el.createGrupo),
  },
  usr: {
    get: router.get("/usr", usuarios_el.getUsuarios),
    post: router.post("/usr", usuarios_el.createUsuario),
  },
  mgp: {
    get: router.get("/mgp", miembros_grupo_el.getMiembros),
    post: router.post("/mgp", miembros_grupo_el.createMiembros),
  },
  pyt: {
    get: router.get("/pyt", proyectos_el.getProyectos),
    post: router.post("/pyt", proyectos_el.createProyecto),
  },
};

export { routes };
export default router;
