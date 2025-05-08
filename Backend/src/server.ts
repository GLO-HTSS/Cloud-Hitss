import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "./routes/routes_all";
import path from "path";

const app = express();

dotenv.config();

// Middleware
app.use(cors());
app.use(express.json());

// Rutas API
app.use("/", router);

const PORT = process.env.BA_PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
