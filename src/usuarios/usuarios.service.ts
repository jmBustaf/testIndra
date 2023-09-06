import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from '../models/usuario.entity';
import { IUser } from 'src/interfaces/models.interface';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(Usuario)
    private usuariosRepository: Repository<Usuario>,
  ) {}

  async createUser(usuario: IUser): Promise<IUser> {
    const nuevoUsuario = await this.usuariosRepository.create(usuario);
    return await this.usuariosRepository.save(nuevoUsuario);
  }

  async findAll() {
    let temp;
    try {
      temp = await this.usuariosRepository.query(`SELECT * FROM public.usuario`);
    } catch(e) {
      throw new HttpException('No hay registro de usuarios', HttpStatus.BAD_REQUEST);
    }
    return temp;
  }

  async findByEmail(correo: string): Promise<Usuario> {
    let temp;
    try {
      temp = await this.usuariosRepository.findOne({where: {correo}})
    } catch(e) {
      throw new HttpException('Correo de usuario no encontrado', HttpStatus.BAD_REQUEST);
    }
    return temp;
  }
}