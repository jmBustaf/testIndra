import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Usuario } from 'src/models/usuario.entity';

@Entity()
export class Tarea {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  descripcion: string;

  @Column()
  fechaCreacion: string;

  @Column()
  fechaEjecucion: string;

  @ManyToOne(() => Usuario, (usuario) => usuario.id)
  usuarioId: number;
}
