import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

// Cargar las variables de entorno
dotenv.config();

// Verificar que las variables de entorno estén definidas
if (!process.env.HITSS_URL) {
  throw new Error('Las variables no están definidas.');
}

// Crear pool de conexiones para la primera base de datos
const pool = mysql.createPool(process.env.HITSS_URL!);

// Exportar ambos pools
export { pool };

export class db {

  static async getGestion() {
    const [rows] = await pool.query('SELECT * FROM gestion');
    return rows;
  }

  static async getGrupos() {
    const [rows] = await pool.query('SELECT * FROM grupos');
    return rows;
  }

  static async getInfraestructura() {
    const [rows] = await pool.query('SELECT * FROM infraestructura');
    return rows;
  }

  static async getSeguridad() {
    const [rows] = await pool.query('SELECT * FROM seguridad');
    return rows;
  }

  static async getUsuarios() {
    const [rows] = await pool.query('SELECT * FROM usuarios');
    return rows;
  }

  static async getMiembrosGrupo() {
    const [rows] = await pool.query('SELECT * FROM miembros_grupo');
    return rows;
  }

  static async getProyectos() {
    const [rows] = await pool.query('SELECT * FROM proyecto');
    return rows;
  }
}
