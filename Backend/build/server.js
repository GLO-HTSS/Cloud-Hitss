"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const routes_all_1 = require("./routes/routes_all");
const app = (0, express_1.default)();
dotenv_1.default.config();
// Middleware
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// Rutas API
app.use("/", routes_all_1.routes.inf.get);
// // Servir frontend compilado
// const frontendPath = path.join(__dirname, "../../frontend/dist");
// app.use(express.static(frontendPath));
// app.get("*", (_, res) => res.sendFile(path.join(frontendPath, "index.html")));
const PORT = process.env.BA_PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
