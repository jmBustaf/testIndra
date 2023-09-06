import { Tarea } from 'src/models/tarea.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity()
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  apellido: string;

  @Column()
  correo: string;

  @Column()
  contrasena: string;

  @OneToMany(() => Tarea, (tarea) => tarea.id)
  tareas: Tarea[]
}
