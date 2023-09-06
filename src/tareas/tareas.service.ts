import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Tarea } from '../models/tarea.entity';
//import { ITask } from 'src/interfaces/models.interface';

@Injectable()
export class TareasService {
    constructor(
        @InjectRepository(Tarea)
        private tareasRepository: Repository<Tarea>,
    ) {}

    async createTask(tarea: Tarea): Promise<Tarea> {
        let temp;
        try {
            const nuevaTarea = await this.tareasRepository.create(tarea);
            temp = await this.tareasRepository.save(nuevaTarea);
        } catch(e) {
          throw new HttpException('No se puedo registrar la tarea', HttpStatus.BAD_REQUEST);
        }
        return temp;
    }

    async findAll() {
        let temp;
        try {
            temp = await this.tareasRepository.query(`SELECT * FROM public.tarea`);
        } catch(e) {
            throw new HttpException('No hay registro de tareas', HttpStatus.BAD_REQUEST);
        }
        return temp;
    }

    async deleteTask(id: number) {
        let temp;
        try {
            temp = await this.tareasRepository.delete(id);
        } catch(e) {
            throw new HttpException('No se pudo eliminar la tarea', HttpStatus.BAD_REQUEST);
        }
        return temp;
    }
}
