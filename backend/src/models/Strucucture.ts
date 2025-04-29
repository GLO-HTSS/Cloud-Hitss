export interface Empleado {
  id: number;
  nombre: string;
  correo_electronico: string;
  telefono: string | null;
  puesto: 'Costurero' | 'Tapicero' | 'Sastre' | 'Diseñador' | 'Administrador';
}

export interface Horario {
  id: number;
  empleado_id: number;
  dia: 'Lunes' | 'Martes' | 'Miércoles' | 'Jueves' | 'Viernes' | 'Sábado' | 'Domingo';
  hora_inicio: string;
  hora_fin: string;
}

export interface Servicio {
  id: number;
  nombre: string;
  categoria: 'Confección' | 'Remodelación' | 'Reparación' | 'Tapicería';
}

export interface Stock {
  id: number;
  nombre_producto: string;
  cantidad: number;
  precio: number;
  categoria: 'Tela' | 'Hilo' | 'Botones' | 'Otros';
}

// genera la interfaz de pedido

export interface Pedido {
  id: number;
  cliente: string;
  telefono: string;
  direccion: string;
  fecha_pedido: string;
  fecha_entrega: string;
  total: number;
  servicios: ServicioPedido[]; // Cambiado a ServicioPedido[]
}

export interface ServicioPedido {
  id: number;
  servicio_id: number;
  empleado_id: number;
  cantidad: number;
  precio_unitario: number;
  subtotal: number;
}
