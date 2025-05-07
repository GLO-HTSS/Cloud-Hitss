import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { routes } from "./routes/routes_all";
import path from "path";

const app = express();

dotenv.config();

// Middleware
app.use(cors());
app.use(express.json());

// Rutas API
app.use("/", routes.inf.get);

// // Servir frontend compilado
// const frontendPath = path.join(__dirname, "../../frontend/dist");
// app.use(express.static(frontendPath));
// app.get("*", (_, res) => res.sendFile(path.join(frontendPath, "index.html")));

const PORT = process.env.BA_PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
