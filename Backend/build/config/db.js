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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = exports.pool = void 0;
const promise_1 = __importDefault(require("mysql2/promise"));
const dotenv_1 = __importDefault(require("dotenv"));
// Cargar las variables de entorno
dotenv_1.default.config();
// Verificar que las variables de entorno estén definidas
if (!process.env.HITSS_URL) {
    throw new Error('Las variables no están definidas.');
}
// Crear pool de conexiones para la primera base de datos
const pool = promise_1.default.createPool(process.env.HITSS_URL);
exports.pool = pool;
class db {
    static getGestion() {
        return __awaiter(this, void 0, void 0, function* () {
            const [rows] = yield pool.query('SELECT * FROM gestion');
            return rows;
        });
    }
    static getGrupos() {
        return __awaiter(this, void 0, void 0, function* () {
            const [rows] = yield pool.query('SELECT * FROM grupos');
            return rows;
        });
    }
    static getInfraestructura() {
        return __awaiter(this, void 0, void 0, function* () {
            const [rows] = yield pool.query('SELECT * FROM infraestructura');
            return rows;
        });
    }
    static getSeguridad() {
        return __awaiter(this, void 0, void 0, function* () {
            const [rows] = yield pool.query('SELECT * FROM seguridad');
            return rows;
        });
    }
    static getUsuarios() {
        return __awaiter(this, void 0, void 0, function* () {
            const [rows] = yield pool.query('SELECT * FROM usuarios');
            return rows;
        });
    }
    static getMiembrosGrupo() {
        return __awaiter(this, void 0, void 0, function* () {
            const [rows] = yield pool.query('SELECT * FROM miembros_grupo');
            return rows;
        });
    }
    static getProyectos() {
        return __awaiter(this, void 0, void 0, function* () {
            const [rows] = yield pool.query('SELECT * FROM proyecto');
            return rows;
        });
    }
}
exports.db = db;
