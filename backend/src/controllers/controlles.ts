import { Request, Response } from 'express';
import { pool1 } from '../config/db';
import { Servicio } from '../models/Strucucture';

// Obtener todos los servicios
export const getServicios = async (_req: Request, res: Response) => {
  try {
    const [servicios] = await pool1.query('SELECT * FROM Servicios');
    res.json(servicios);
    console.log(servicios);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener servicios', details: error });
  }
};

// Crear un nuevo servicio
export const createServicio = async (req: Request, res: Response) => {
  const { nombre, categoria }: Servicio = req.body;

  try {
    await pool1.query(
      'INSERT INTO Servicios (nombre, categoria) VALUES (?, ?)',
      [nombre, categoria]
    );
    res.status(201).json({ message: 'Servicio creado exitosamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al crear servicio', details: error });
  }
};
