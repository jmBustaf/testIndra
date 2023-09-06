import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TareasService } from './tareas.service';
import { TareasController } from './tareas.controller';
import { Tarea } from '../models/tarea.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Tarea])],
  providers: [TareasService],
  controllers: [TareasController]
})
export class TareasModule {}