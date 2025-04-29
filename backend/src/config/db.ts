import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

// Cargar las variables de entorno
dotenv.config();

// Verificar que las variables de entorno estén definidas
if (!process.env.US_URL) {
  throw new Error('Las variables de entorno DB_URL_1 o DB_URL_2 no están definidas.');
}

// Crear pool de conexiones para la primera base de datos
const pool1 = mysql.createPool(process.env.US_URL!);

// Crear pool de conexiones para la segunda base de datos
const pool2 = mysql.createPool(process.env.US_URL!);

// Exportar ambos pools
export { pool1, pool2 };

export class servicio {
  static async getClientes() {
    const [rows] = await pool1.query('SELECT * FROM clientes');
    return rows;
  }

  static async getClientes2() {
    const [rows] = await pool2.query('SELECT * FROM clientes');
    return rows;
  }
}