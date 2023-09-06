export interface IUser {
    id?: number,
    nombre: string,
    apellido: string,
    correo: string,
    contrasena: string,
  }

  export interface ITask {
    id?: number,
    nombre: string,
    descripcion: string,
    fechaCreacion: Date,
    fechaEjecucion: Date
  }