import { Controller, Post, Get, Body, Delete, Param } from '@nestjs/common';
import { TareasService } from './tareas.service';
//import { ITask } from 'src/interfaces/models.interface';
import { Tarea } from '../models/tarea.entity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags("tasks")
@Controller('tarea')
export class TareasController {
    constructor(private readonly tareasService: TareasService) {}

    @Get('lista')
    async getTasks() {
        return await this.tareasService.findAll();
    }

    @Post()
    async create(@Body() body: Tarea): Promise<Tarea> {
        return await this.tareasService.createTask(body);
    }

    @Delete(':id')
    deleteTemplate(@Param('id') id: number ) {
        return this.tareasService.deleteTask(id);
    }
}
