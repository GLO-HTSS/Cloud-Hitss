import { Router } from "express";
import { getServicios, createServicio } from "../controllers/controlles";

const router = Router();
export const BA = {
  "Services": [
    router.get("/servicios", getServicios),
    router.post("/servicios", createServicio),
  ],
  "Empleados": [
    router.get("/empleados", getServicios),
    router.post("/empleados", createServicio),
  ],
  "Horarios": [
    router.get("/horarios", getServicios),
    router.post("/horarios", createServicio),
  ],
  "Stock": [
    router.get("/stock", getServicios),
    router.post("/stock", createServicio),
  ],
  "Pedidos": [
    router.get("/pedidos", getServicios),
    router.post("/pedidos", createServicio),
  ],
};

export const US = {
  "Services": [
    router.get("/servicios", getServicios),
    router.post("/servicios", createServicio),
  ],
  "Empleados": [
    router.get("/empleados", getServicios),
    router.post("/empleados", createServicio),
  ],
  "Horarios": [
    router.get("/horarios", getServicios),
    router.post("/horarios", createServicio),
  ],
  "Stock": [
    router.get("/stock", getServicios),
    router.post("/stock", createServicio),
  ],
  "Pedidos": [
    router.get("/pedidos", getServicios),
    router.post("/pedidos", createServicio),
  ],
};
