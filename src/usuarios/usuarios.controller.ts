import { Controller, Post, Get, Body, Query } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { IUser } from 'src/interfaces/models.interface';
import { ApiTags } from '@nestjs/swagger';


@ApiTags("users")
@Controller('usuario')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  
  @Get('lista')
  async getUsers() {
    return await this.usuariosService.findAll();
  }

  @Get('correo')
  async getUserEmail(@Query('correo') correo: string) {
    return await this.usuariosService.findByEmail(correo);
  }

  @Post()
  async create(@Body() body: IUser): Promise<IUser> {
    return await this.usuariosService.createUser(body);
  }
}
