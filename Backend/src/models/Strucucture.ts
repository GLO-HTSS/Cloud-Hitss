export interface Gestion {
  id_gestion: number;
  ticket: string;
  mantenimientos: string;
  credenciales: string;
  billing: string;
  estimacion_mensual: number;
  presupuesto_aprobado: number;
  duracion_uso: string;
  observaciones: string;
}

export interface Grupo {
  id_grupo: number;
  nombre_grupo: string;
}

export interface Infraestructura {
  id_infraestructura: number;
  consola: 'Azure internal' | 'Azure reseller' | 'Google Cloud Platform' | 'AWS' | 'Oracle Cloud Infrastructure' | 'Other';
  sistema_operativo: string;
  memoria: string;
  disco: string;
  cpu: string;
  ram: string;
  disco_arranque: string;
  discos_adicionales: string;
  nics: string;
}

export interface Seguridad {
  id_seguridad: number;
  respaldos: string;
  acceso_iam: string;
  autenticacion_adicional: string;
  reglas_firewall: string;
  balanceador_carga: string;
  llaves_ssh: string;
  monitoreo: string;
  alertas_configuradas: string;
}

export interface Usuario {
  id_usuario: number;
  responsable_tecnico: string;
  solicitante: string;
  admin_responsable: string;
  operador: string;
}

export interface MiembroGrupo {
  id_miembro: number;
  id_grupo: number;
  id_usuario: number;
}

export interface Proyecto {
  id_proyecto: number;
  pais_sede: string;
  proposito_maquina: string;
  gerente_proyecto: string;
  proyecto_asignado: string;
  nombre_proyecto_cloud: string;
  id_proyecto_cloud: string;
  fecha_inicio: string;
  fecha_final: string;
  administracion_servicio: string;
  id_infraestructura: number;
  id_seguridad: number;
  id_usuario: number;
  id_gestion: number;
}